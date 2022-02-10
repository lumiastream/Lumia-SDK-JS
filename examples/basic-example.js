const { LumiaSdk, LumiaActivityCommandTypes, LumiaAlertValues, LumiaEventTypes } = require('@lumiastream/sdk');

const token = 'insert_token_here';
const appName = 'my_game';

(async () => {
    sdk = new LumiaSdk();

    try {
        console.log('Starting connection');
        await sdk.init({ name: appName, token });
        const info = await sdk.getInfo();
        console.log('info: ', info);

        sdk.on('event', (data) => {
            console.log('Event data: ', data);
            switch (data.type) {
                case LumiaEventTypes.STATES: {
                    console.log('States have been updated', data);
                    break;
                }
                case LumiaEventTypes.COMMAND: {
                    console.log('A Chat Command is being triggered', data);
                    break;
                }
                case LumiaEventTypes.CHAT: {
                    console.log('New chat message', data);
                    break;
                }
                case LumiaEventTypes.ALERT: {
                    console.log('New alert', data);
                    break;
                }
            }
        });

        async function testSends() {
            // Sending an alert event example
            await sdk.sendAlert({
                alert: LumiaAlertValues.TWITCH_FOLLOWER,
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
                type: LumiaActivityCommandTypes.ALERT,
                params: { value: LumiaAlertValues.TWITCH_FOLLOWER },
            });
        }

        testSends();
    } catch (err) {
        console.log('Init err: ', err);
    }
})();
