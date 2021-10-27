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
	type: LumiaSdkEventTypes;
	data: { username?: string; command?: string };
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
	CHAT = 'chat',
	CHAT_TWITCH = 'chat/twitch',
	CHAT_FACEBOOK = 'chat/facebook',
	CHAT_YOUTUBE = 'chat/youtube',
	CHAT_GLIMESH = 'chat/glimesh',
	CHAT_TROVO = 'chat/trovo',
	CHAT_COMMANDS = 'chat/commands',
	CHAT_COMMANDS_TWITCH = 'chat/commands/twitch',
	CHAT_COMMANDS_FACEBOOK = 'chat/commands/facebook',
	CHAT_COMMANDS_YOUTUBE = 'chat/commands/youtube',
	CHAT_COMMANDS_GLIMESH = 'chat/commands/glimesh',
	CHAT_COMMANDS_TROVO = 'chat/commands/trovo',
	TIMEOFUSE = 'time-of-use',
	LIVE = 'live',
	TWITCH_POINTS = 'twitch/points',
	TWITCH_EXTENSIONS = 'twitch/extensions',
	PULSE_RATE_MAX = 'pulse/rate/max',
	PULSE_RATE_MIN = 'pulse/rate/min',
	PULSE_CALORIES_MAX = 'pulse/calories/max',
	PULSE_CALORIES_MIN = 'pulse/calories/min',
	ALERTS = 'alerts',
	ALERTS_TWITCH = 'alerts/twitch',
	ALERTS_TWITCH_FOLLOWERS = 'alerts/twitch/followers',
	ALERTS_TWITCH_SUBSCRIBERS = 'alerts/twitch/subscribers',
	ALERTS_TWITCH_BITS = 'alerts/twitch/bits',
	ALERTS_TWITCH_HOSTS = 'alerts/twitch/hosts',
	ALERTS_TWITCH_RAIDS = 'alerts/twitch/raids',
	ALERTS_YOUTUBE = 'alerts/youtube',
	ALERTS_YOUTUBE_SUBSCRIBERS = 'alerts/youtube/subscribers',
	ALERTS_YOUTUBE_MEMBERS = 'alerts/youtube/members',
	ALERTS_YOUTUBE_SUPERCHATS = 'alerts/youtube/superchats',
	ALERTS_YOUTUBE_SUPERSTICKERS = 'alerts/youtube/superstickers',
	ALERTS_FACEBOOK = 'alerts/facebook',
	ALERTS_FACEBOOK_FOLLOWERS = 'alerts/facebook/followers',
	ALERTS_FACEBOOK_REACTIONS = 'alerts/facebook/reactions',
	ALERTS_FACEBOOK_STARS = 'alerts/facebook/stars',
	ALERTS_FACEBOOK_SUPPORTS = 'alerts/facebook/supports',
	ALERTS_FACEBOOK_SHARES = 'alerts/facebook/shares',
	ALERTS_FACEBOOK_FANS = 'alerts/facebook/fans',
	ALERTS_GLIMESH = 'alerts/glimesh',
	ALERTS_GLIMESH_FOLLOWERS = 'alerts/glimesh/followers',
	ALERTS_GLIMESH_SUBSCRIBERS = 'alerts/glimesh/subscribers',

	ALERTS_STREAMLABS = 'alerts/streamlabs',
	ALERTS_STREAMLABS_DONATIONS = 'alerts/streamlabs/donations',
	ALERTS_STREAMLABS_CHARITY = 'alerts/streamlabs/charity',
	ALERTS_STREAMLABS_MERCH = 'alerts/streamlabs/merch',
	ALERTS_STREAMLABS_REDEMPTIONS = 'alerts/streamlabs/redemptions',
	ALERTS_STREAMLABS_PRIMEGIFTS = 'alerts/streamlabs/primegifts',
	ALERTS_STREAMELEMENTS = 'alerts/streamelements',
	ALERTS_STREAMELEMENTS_DONATIONS = 'alerts/streamelements/donations',
	ALERTS_STREAMELEMENTS_MERCH = 'alerts/streamelements/merch',
	ALERTS_STREAMELEMENTS_REDEMPTIONS = 'alerts/streamelements/redemptions',
	ALERTS_EXTRALIFE_DONATIONS = 'alerts/extralife/donations',
	ALERTS_DONORDRIVE_DONATIONS = 'alerts/donordrive/donations',
	ALERTS_PAYPAL_PAYMENTCOMPLETE = 'alerts/paypal/paymentcomplete',
	ALERTS_PAYPAL_PAYMENTDENIED = 'alerts/tipeeestream/paymentdenied',
	ALERTS_TIPEEESTREAM_DONATIONS = 'alerts/tipeestream/donations',
	ALERTS_TILTIFY_CAMPAIGNDONATIONS = 'alerts/tiltify/campaigndonations',
	ALERTS_PATREON_CAMPAIGNPLEDGES = 'alerts/patreon/campaignpledges',
	ALERTS_TREATSTREAM_TREATS = 'alerts/treatstream/treats',
	ALERTS_OBS = 'alerts/obs',
	ALERTS_SLOBS = 'alerts/slobs',
	ALERTS_PULSE_RATE = 'alerts/pulse/rate',
	ALERTS_PULSE_CALORIES = 'alerts/pulse/calories',
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
