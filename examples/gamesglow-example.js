const { LumiaSdk, LumiaEventTypes } = require('@lumiastream/sdk');

const token = 'insert_token_here';
const appName = 'my_game';

(async () => {
    sdk = new LumiaSdk();

    try {
        console.log('Starting connection');
        await sdk.init({ name: appName, token, timeout: 30000 });

        sdk.on('event', (data) => {
            console.log('Event data: ', data);
            switch (data.type) {
                case LumiaEventTypes.CHAT: {
                    console.log('New chat message', data);
                    break;
                }
                case LumiaEventTypes.GAMESGLOW_ALERT: {
                    console.log('New gamesglow alert', data);
                    break;
                }
                case LumiaEventTypes.GAMESGLOW_COMMAND: {
                    console.log('New gamesglow command', data);
                    break;
                }
                case LumiaEventTypes.GAMESGLOW_VIRTUALLIGHT: {
                    console.log('New gamesglow virtual light', data);
                    break;
                }
            }
        });

        async function testSends() {
            // Sending an alert event example
            await sdk.sendGamesGlowAlert({
                glowId: 'gtav_lumia__wanted',
                value: 2,
            });

            // Sending a variable update
            await sdk.sendGamesGlowVariableUpdate({
                command: 'gtav_lumia__var_in_vehicle',
                value: true,
            });
        }

        testSends();
    } catch (err) {
        console.log('Init err: ', err);
    }
})();
