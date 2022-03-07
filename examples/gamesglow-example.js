const { LumiaSdk, LumiaEventTypes } = require('@lumiastream/sdk');

// const token = 'insert_token_here';
// const appName = 'my_game';

const token = 'ls_krgorcfplh';
const appName = 'gtav_lumia';

(async () => {
    sdk = new LumiaSdk();

    try {
        console.log('Starting connection');
        await sdk.init({ name: appName, token, timeout: 30000 });

        sdk.on('event', (data) => {
            console.log('Event data: ', data);
            switch (data.type) {
                case LumiaEventTypes.CHAT: {
                    // console.log('New chat message', data);
                    break;
                }
                case LumiaEventTypes.GAMESGLOW_ALERT: {
                    console.log('New gamesglow alert', data);
                    break;
                }
                case LumiaEventTypes.GAMESGLOW_COMMAND: {
                    console.log('New gamesglow command', data);
                    // Check to see if this is the game the command was meant for
                    if (data.gamesGlowId !== appName) {
                        return;
                    }
                    const { gamesGlowId, gamesGlowKey, value } = data.data;

                    break;
                }
                case LumiaEventTypes.GAMESGLOW_VIRTUALLIGHT: {
                    console.log('New gamesglow virtual light', data);

                    const { gamesGlowId, gamesGlowKey, value } = data.data;

                    break;
                }
            }
        });

        async function testSends() {
            // Sending an alert event example
            // await sdk.sendGamesGlowAlert({
            //     gamesGlowKey: 'gtav_lumia__horn',
            //     value: true,
            // });

            // Sending a variable update
            await sdk.sendGamesGlowVariableUpdate({
                gamesGlowKey: 'gtav_lumia__var_in_vehicle',
                value: false,
            });
        }

        testSends();
    } catch (err) {
        console.log('Init err: ', err);
    }
})();
