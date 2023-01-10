import Sockette from 'sockette';
import { EventEmitter } from 'events';
import { LumiaAlertValues, LumiaActivityCommandTypes } from '.';
import { ILumiaLight, ILumiaSendPack, LumiaPlatforms } from '@lumiastream/lumia-types';

// This will handle if Lumia-SDK is running in Node
if (!globalThis.WebSocket) {
	const WebSocket = require('ws');
	globalThis.WebSocket = WebSocket;
}

export default class LumiaSdk extends EventEmitter {
	private _messageIdCounter = 1;
	private _connected = false;
	private _websocket: Sockette;
	private _websocketConnectTimeout: ReturnType<typeof setTimeout>;
	private _heartbeatInterval: ReturnType<typeof setInterval>;
	private _promises = {};
	private _data = {
		host: 'localhost',
		port: 39231,
		name: null,
		token: null,
		endpoint: 'api',
		deck: false,
		timeout: 30000, // Wait 30 seconds when connecting before the game is approved or denied
	};

	constructor(config?: { token: string; name?: string; host?: string; port?: number; timeout?: number }) {
		super();

		this._data = {
			...this._data,
			...config,
		};

		return this;
	}

	// Send a message to Lumia Stream with an initialization request
	init = async (config?: { token: string; name?: string; host?: string; port?: number; timeout?: number }) => {
		try {
			if (config?.token) {
				this._data = {
					...this._data,
					...config,
				};
			}

			await this._startWebsockets();
			this._connected = true;
			return true;
		} catch (err) {
			this._connected = false;
			return false;
		}
	};

	// Gets information from lumia stream about settings
	getInfo = async () => {
		try {
			const result = await this._sendWebsocketMessage({
				retrieve: true,
				method: 'retrieve',
			});
			return result;
		} catch (err) {
			return new Error(err.message);
		}
	};

	stop = async () => {
		clearInterval(this._heartbeatInterval);
		clearTimeout(this._websocketConnectTimeout);
		try {
			await this._sendWebsocketMessage({
				method: 'stop',
			});
		} catch (err) {}

		try {
			if (this._websocket) {
				this._websocket.close();
			}
		} catch (err) {
			this._websocket = null;
		}

		this.emit('closed');
		return this;
	};

	private _startWebsockets = () => {
		return new Promise((resolve, reject) => {
			if (!this._data.token) {
				return reject('No token has been set');
			}

			if (this._websocket) {
				this._websocket.close();
			}

			// Timeout in case it can't connect in 3 seconds
			this._websocketConnectTimeout = setTimeout(() => {
				this._websocket.close();
				return reject('Setup timed out. Could not connect');
			}, this._data.timeout);

			let url = `ws://${this._data.host}`;
			if (this._data.deck) {
				url += `:39222?token=${this._data.token}&origin=${this._data.name}&name=${this._data.name}`;
			} else {
				url += `:${this._data.port}/${this._data.endpoint}?token=${this._data.token}&name=${this._data.name}`;
			}

			this._websocket = new Sockette(url, {
				timeout: 5000,
				// maxAttempts: 5, // When disabled it uses infinity
				onopen: async (e) => {
					clearTimeout(this._websocketConnectTimeout);

					this._connected = true;
					this.emit('connected');
					resolve(true);
				},
				onmessage: this._handleMessage,
				onreconnect: (e) => {
					this.emit('reconnecting');
				},
				onmaximum: (e) => {
					this.emit('maximum:reconnect');
				},
				onclose: (e) => {
					this._connected = false;
					this.emit('closing', e.code);

					// Make sure this is an intentional close
					if (e.code === 1000 || e.code === 1001 || e.code === 1005) {
						this.stop();
					}
				},
				onerror: (event: any) => {
					if (!this._connected) {
						this.emit('unauthorized', 'token is invalid');
						return reject('token is invalid');
					} else {
						this.emit('error', event.message);
					}
				},
			});
		});
	};

	// Handles incoming messages fulfilling the promise if it has one, otherwise checks the type of message
	private _handleMessage = async (message: any) => {
		try {
			const { context, event, ...msg } = JSON.parse(message.data);

			if (context) {
				if (msg.status === 200 || !msg.status) {
					this._promises[context].resolve(msg);
				} else {
					this._promises[context].reject(msg);
				}

				return;
			}

			this.emit('event', { event, ...msg });
		} catch (err) {
			this.emit('error', 'Handle Message err');
		}
	};

	private _sendWebsocketMessage = (event): Promise<any> => {
		return new Promise((resolve, reject) => {
			const context = (this._messageIdCounter++).toString();
			if (this._websocket) {
				event.context = context;
				this._promises[context] = { resolve, reject };
				this._websocket.send(JSON.stringify(event));
			}
		});
	};

	// Sends a raw pack without any massaging
	send = async (pack: ILumiaSendPack) => {
		try {
			// sdk:send
			const result = await this._sendWebsocketMessage({
				lsorigin: this._data.name,
				...pack,
			});
			this.emit('sent:message', result);
			return result;
		} catch (err) {
			this.emit('error:send', err.toString());
			return err.toString();
		}
	};

	sendAlert = async (pack: { alert: LumiaAlertValues }) => {
		return this.send({
			type: LumiaActivityCommandTypes.ALERT,
			params: {
				value: pack.alert,
			},
		});
	};

	// Sends command
	sendCommand = async (pack: { command: string; default?: boolean; skipQueue?: boolean }) => {
		return this.send({
			type: LumiaActivityCommandTypes.CHAT_COMMAND,
			params: {
				value: pack.command,
				hold: pack.default,
				skipQueue: pack.skipQueue,
			},
		});
	};

	// Sends a color pack
	sendHexColor = async (pack: {
		color?: string;
		brightness?: number; // 0-100
		duration?: number; // In milliseconds
		transition?: number; // In milliseconds
		default?: boolean;
		skipQueue?: boolean;
		lights: Array<ILumiaLight>;
	}) => {
		return this.send({
			type: LumiaActivityCommandTypes.HEX_COLOR,
			params: {
				value: pack.color,
				brightness: pack.brightness,
				transition: pack.transition,
				duration: pack.duration,
				skipQueue: pack.skipQueue,
				hold: pack.default,
				lights: pack.lights,
			},
		});
	};

	// Sends a color pack
	sendColor = async (pack: {
		color?: { r: number; g: number; b: number };
		brightness?: number; // 0-100
		duration?: number; // In milliseconds
		transition?: number; // In milliseconds
		default?: boolean;
		skipQueue?: boolean;
		lights: Array<ILumiaLight>;
	}) => {
		return this.send({
			type: LumiaActivityCommandTypes.RGB_COLOR,
			params: {
				value: pack.color,
				brightness: pack.brightness,
				transition: pack.transition,
				duration: pack.duration,
				skipQueue: pack.skipQueue,
				hold: pack.default,
				lights: pack.lights,
			},
		});
	};

	// Sends brightness only
	sendBrightness = async (pack: { brightness: number; transition?: number; skipQueue?: boolean }) => {
		return this.send({
			type: LumiaActivityCommandTypes.RGB_COLOR,
			params: {
				value: null,
				brightness: pack.brightness,
				transition: pack.transition,
				skipQueue: pack.skipQueue,
			},
		});
	};

	// Sends tts
	sendTts = async (pack: { text: string; volume?: number; voice?: string }) => {
		return this.send({
			type: LumiaActivityCommandTypes.TTS,
			params: {
				value: pack.text,
				volume: pack.volume,
				voice: pack.voice,
			},
		});
	};

	// Set to default
	setToDefault = async () => {
		return this.send({
			type: LumiaActivityCommandTypes.TO_DEFAULT,
		});
	};

	// Clear the queue
	clearQueue = async () => {
		return this.send({
			type: LumiaActivityCommandTypes.CLEAR_QUEUE,
		});
	};

	// Set fuze on / off. Leave null to toggle
	setFuze = async (on: boolean) => {
		return this.send({
			type: LumiaActivityCommandTypes.TOGGLE_FUZE,
			params: {
				value: on,
			},
		});
	};
	// Set lumia on / off. Leave null to toggle
	setLumiaState = async (on: boolean) => {
		return this.send({
			type: LumiaActivityCommandTypes.SET_LUMIA,
			params: {
				value: on,
			},
		});
	};

	// Set lumia on / off. Leave null to toggle
	setStreamModeState = async (on: boolean) => {
		return this.send({
			type: LumiaActivityCommandTypes.TOGGLE_STREAMMODE,
			params: {
				value: on,
			},
		});
	};

	// Sends Chatbot message
	sendChatbot = async (pack: { text: string; platform: LumiaPlatforms }) => {
		return this.send({
			type: LumiaActivityCommandTypes.CHATBOT_MESSAGE,
			params: {
				value: pack.text,
				platform: pack.platform,
			},
		});
	};

	// Games Glow Functions

	// Gets information from lumia stream about games glow settings that the user has input
	getGamesGlowSettings = async () => {
		try {
			const result = await this._sendWebsocketMessage({
				method: 'gamesGlowSettings',
				gamesGlowId: this._data.name,
			});
			return result;
		} catch (err) {
			return new Error(err.message);
		}
	};

	sendGamesGlowAlert = async (pack: { gamesGlowKey: string; value: any }) => {
		return this.send({
			type: LumiaActivityCommandTypes.GAMESGLOW_ALERT,
			gamesGlowId: this._data.name,
			gamesGlowKey: pack.gamesGlowKey,
			params: {
				value: pack.value,
			},
		});
	};

	sendGamesGlowCommand = async (pack: { gamesGlowKey: string; value: any }) => {
		return this.send({
			type: LumiaActivityCommandTypes.GAMESGLOW_COMMAND,
			gamesGlowId: this._data.name,
			gamesGlowKey: pack.gamesGlowKey,
			params: {
				value: pack.value,
			},
		});
	};

	sendGamesGlowVariableUpdate = async (pack: { gamesGlowKey: string; value: any }) => {
		return this.send({
			type: LumiaActivityCommandTypes.GAMESGLOW_VARIABLE,
			gamesGlowId: this._data.name,
			gamesGlowKey: pack.gamesGlowKey,
			params: {
				value: pack.value,
			},
		});
	};

	sendGamesGlowVirtualLightsChange = async (pack: { gamesGlowKey: string; value: any }) => {
		return this.send({
			type: LumiaActivityCommandTypes.GAMESGLOW_VIRTUALLIGHT,
			gamesGlowId: this._data.name,
			gamesGlowKey: pack.gamesGlowKey,
			params: {
				value: pack.value,
			},
		});
	};
}
