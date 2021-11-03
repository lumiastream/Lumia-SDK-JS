import { LumiaSDKCommandTypes } from './sdk.constants';

export interface ILumiaSdkSendPack {
	type: LumiaSDKCommandTypes;
	params: {
		value: string | { r: number; g: number; b: number };
		lights?: Array<ILumiaSdkLight>;
		hold?: boolean; // Sets this command to default or not
		skipQueue?: boolean; // Skips the queue and instantly turns to this color

		platform?: Platforms;

		// Used for TTS
		voice?: string;
		volume?: number;

		// Mainly used for RGB color and Hex color types
		brightness?: number;
		transition?: number;
		duration?: number;

		extraSettings?: { username?: string; bits?: number }; // Mainly used to pass in variables for things like TTS or Chat bot
	};
}

export interface ILumiaSdkEvent {
	origin: EventOrigins;
	subOrigin?: EventOrigins;
	type: LumiaSdkEventTypes;
	data: ILumiaSdkEventStateBody | ILumiaSdkEventChatCommandBody | ILumiaSdkEventChatBody | ILumiaSdkEventAlertBody | ILumiaSdkEventStateBody;
}

export interface ILumiaSdkEventChatCommandBody {
	username?: string;
	command?: string;
}

export interface ILumiaSdkEventChatBody {
	type: string;
	data: {
		username: string;
		userId: string;
		userColor: string;
		userColorRgb: string;
		platform: string;
		badgesRaw: string;
		hasEmotes: boolean;
		emotes: string;
		rawMessageWithoutEmotes: string;
		emotesRaw: string;
		channel: string;
		message: string;
		user: {
			'badge-info': Array<unknown>;
			badges: Array<unknown>;
			'client-nonce': string;
			color: string;
			'display-name': string;
			emotes: string;
			'first-msg': boolean;
			flags: string;
			id: string;
			mod: boolean;
			'room-id': string;
			subscriber: boolean;
			'tmi-sent-ts': string;
			turbo: boolean;
			'user-id': string;
			'user-type': string;
			'emotes-raw': string;
			'badge-info-raw': string;
			'badges-raw': string;
			username: string;
			'message-type': string;
			isSelf: boolean;
			vip: boolean;
			tier3: boolean;
			tier2: boolean;
			tier1: boolean;
			follower: boolean;
		};
	};
	raw: {
		channel: string;
		message: string;
		user: {
			'badge-info': Array<unknown>;
			badges: Array<unknown>;
			'client-nonce': string;
			color: string;
			'display-name': string;
			emotes: string;
			'first-msg': boolean;
			flags: string;
			id: string;
			mod: boolean;
			'room-id': string;
			subscriber: boolean;
			'tmi-sent-ts': string;
			turbo: boolean;
			'user-id': string;
			'user-type': string;
			'emotes-raw': string;
			'badge-info-raw': string;
			'badges-raw': string;
			username: string;
			'message-type': string;
			isSelf: boolean;
			vip: boolean;
			tier3: boolean;
			tier2: boolean;
			tier1: boolean;
			follower: boolean;
		};
	};
}

export interface ILumiaSdkEventAlertBody {
	// Streamlabs origin
	type?: 'follow';
	message?: unknown;
	for?: 'twitch_account';
	event_id?: string;
}

export interface ILumiaSdkEventStateBody {
	on: number;
	fuze: number;
	streamMode: number;
}

export interface ILumiaSdkLight {
	type: LightBrands;
	id: string | number;
}

export type Platforms = 'twitch' | 'youtube' | 'facebook' | 'trovo' | 'glimesh';
type LightBrands =
	| 'hue'
	| 'nanoleaf'
	| 'nanoleaf2'
	| 'lifx'
	| 'tplink'
	| 'yeelight'
	| 'cololight'
	| 'tuya'
	| 'smartlife'
	| 'wyze'
	| 'wiz'
	| 'homeassistant'
	| 'govee'
	| 'wled'
	| 'magichome'
	| 'logitech'
	| 'razer'
	| 'corsair'
	| 'steelseries'
	| 'overlay'
	| 'elgato';

export enum LumiaSdkEventTypes {
	STATES = 'states',
	CHAT = 'chat',
	COMMAND = 'command',
	TWITCH_POINTS = 'twitch_point',
	TWITCH_EXTENSIONS = 'twitch_extension',
	TROVO_SPELL = 'twitch_extension',
	PULSE = 'pulse',
	ALERTS = 'alert',
}

type EventOrigins =
	| 'lumia'
	| 'twitch'
	| 'youtube'
	| 'facebook'
	| 'glimesh'
	| 'trovo'
	| 'streamlabs'
	| 'streamelements'
	| 'extralife'
	| 'donordrive'
	| 'tiltify'
	| 'patreon'
	| 'tipeeestream'
	| 'treatstream'
	| 'discord'
	| 'obs'
	| 'slobs'
	| 'pulsoid'
	| 'paypal';
