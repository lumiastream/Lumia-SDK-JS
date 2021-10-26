const { LumiaSdk, LumiaSDKCommandTypes, LumiaSDKAlertValues, LumiaSdkEventTypes } = require('../lib/cjs');

const token = 'insert-token-here';
const appName = 'lumia-test';

(async () => {
    sdk = new LumiaSdk();

    try {
        await sdk.init({ appName, token });

        sdk.on('event', (data) => {
            console.log('Event data: ', data);
            switch (data.type) {
                case LumiaSdkEventTypes.CHAT_COMMANDS: {
                    console.log('Chat Command is being triggered', data);
                    break;
                }
                case LumiaSdkEventTypes.CHAT_TWITCH: {
                    console.log('New chat message from twitch', data);
                    break;
                }
            }
        });

        // Sending an event example
        await sdk.send({
            type: LumiaSDKCommandTypes.ALERT,
            params: { value: LumiaSDKAlertValues.TROVO_FOLLOWER },
        });
    } catch (err) {
        console.log('Init err: ', err);
    }
})();
