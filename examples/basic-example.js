// const { LumiaSdk, LumiaSDKCommandTypes, LumiaSDKAlertValues, LumiaSdkEventTypes } = require('@lumiastream/sdk');
const { LumiaSdk, LumiaSDKCommandTypes, LumiaSDKAlertValues, LumiaSdkEventTypes } = require('../lib/cjs');

const token = 'insert-token-here';
const appName = 'lumia-test-sdk-js';

(async () => {
	sdk = new LumiaSdk();

	try {
		await sdk.init({ name: appName, token });
		const info = await sdk.getInfo();
		console.log('info: ', info);

		sdk.on('event', (data) => {
			console.log('Event data: ', data);
			switch (data.type) {
				case LumiaSdkEventTypes.STATES: {
					console.log('States have been updated', data);
					break;
				}
				case LumiaSdkEventTypes.COMMAND: {
					console.log('A Chat Command is being triggered', data);
					break;
				}
				case LumiaSdkEventTypes.CHAT: {
					console.log('New chat message', data);
					break;
				}
				case LumiaSdkEventTypes.ALERT: {
					console.log('New alert', data);
					break;
				}
			}
		});

		async function testSends() {
			// Sending an alert event example
			await sdk.sendAlert({
				alert: LumiaSDKAlertValues.TWITCH_FOLLOWER,
			});

			// Sending a command
			await sdk.sendCommand({
				command: 'red',
			});

			// Sending a basic color
			await sdk.sendColor({
				color: { r: 255, g: 0, b: 255 },
				brightness: 60,
				duration: 1000,
			});

			// Sending a brightness
			await sdk.sendBrightness({
				brightness: 100,
			});

			// Sending a TTS message
			await sdk.sendTts({
				text: 'This SDK is the best',
			});

			// Sending a Chat bot message
			await sdk.sendChatbot({
				platform: 'twitch',
				text: 'This SDK is the best',
			});

			// Sending a raw event example
			await sdk.send({
				type: LumiaSDKCommandTypes.ALERT,
				params: { value: LumiaSDKAlertValues.TWITCH_FOLLOWER },
			});
		}

		// Uncomment this to test out sending events
		// testSends();
	} catch (err) {
		console.log('Init err: ', err);
	}
})();
