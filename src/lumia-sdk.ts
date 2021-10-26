import { ILumiaSdkSendPack } from './types/sdk.types';
import Sockette from 'sockette';
import { EventEmitter } from 'events';

// This will handle if Lumia-SDK is running in Node
if (!globalThis.WebSocket) {
    const WebSocket = require('ws');

    globalThis.WebSocket = WebSocket;
}

export default class LumiaSdk extends EventEmitter {
    private _host = 'ws://localhost:39231';
    private _messageIdCounter = 1;
    private _connected = false;
    private _websocket: Sockette;
    private _websocketConnectTimeout: ReturnType<typeof setTimeout>;
    private _heartbeatInterval: ReturnType<typeof setInterval>;
    private _promises = {};
    private _data = {
        name: null,
        token: null,
    };

    constructor(config) {
        super();

        this._data = {
            ...this._data,
            ...config,
        };

        return this;
    }

    // Send a message to Lumia Stream with an initialization request
    init = async (config?: { token?: string }) => {
        if (config?.token) {
            this._data = {
                ...this._data,
                ...config,
            };
        }

        await this._startWebsockets();
        this._connected = true;
        return true;
    };

    // Gets information from lumia stream about settings
    getInfo = async () => {
        try {
            const result = await this._sendWebsocketMessage({
                method: 'sdk:getinfo',
            });
            return result;
        } catch (err) {
            return err.toString();
        }
    };

    // Turns game mode on or off
    stop = async () => {
        clearInterval(this._heartbeatInterval);
        clearTimeout(this._websocketConnectTimeout);
        try {
            await this._sendWebsocketMessage({
                method: 'sdk:stop',
            });
        } catch (err) {}

        try {
            if (this._websocket) {
                this._websocket.close();
            }
        } catch (err) {
            console.debug({
                type: 'error',
                title: 'Lumia-Stop-Websocket',
                message: err,
            });
            this._websocket = null;
        }

        this.emit('closed');
        return this;
    };

    // Sends either one packet or array of packets. When using commands, it should only send one packet as an object
    send = async (pack: ILumiaSdkSendPack) => {
        try {
            // sdk:send
            const result = await this._sendWebsocketMessage({
                lsorigin: 'lumia-sdk',
                ...pack,
            });
            this.emit('sent:message', result);
            return result;
        } catch (err) {
            this.emit('error:send', err.toString());
            return err.toString();
        }
    };

    private _startWebsockets = () => {
        return new Promise((resolve) => {
            if (!this._data.token) {
                throw new Error('No token has been set');
            }

            if (this._websocket) {
                this._websocket.close();
            }

            // Timeout in case it can't connect in 3 seconds
            this._websocketConnectTimeout = setTimeout(() => {
                this._websocket.close();
                throw new Error('Setup timed out. Could not connect');
            }, 3000);

            this._websocket = new Sockette(`${this._host}/api?token=${this._data.token}&name=${this._data.name}`, {
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
                onerror: (event) => {
                    this.emit('error', event.target);
                },
            });
        });
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

    // Handles incoming messages fulfilling the promise if it has one, otherwise checks the type of message
    private _handleMessage = async (event: any) => {
        try {
            const msg = JSON.parse(event.data);

            if (msg.context) {
                if (msg.status === 200 || !msg.status) {
                    this._promises[msg.context].resolve(msg);
                } else {
                    this._promises[msg.context].reject(msg);
                }

                return;
            }

            this.emit('event', msg);
        } catch (err) {
            this.emit('error', 'Handle Message err');
        }
    };
}
