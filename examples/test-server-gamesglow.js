const WebSocket = require('ws');
const mockRetrieve = require('./mocks');

function StartServer() {
    var server = new WebSocket.Server({ port: 39231 });
    server.on('connection', (client, req) => {
        console.log('New connetion');
        client.on('message', (message) => {
            message = message.toString();
            console.log('Message received: ', message);
            try {
                message = JSON.parse(message);
            } catch (_error) {}

            if (message.retrieve) {
                const pack = {
                    event: 'socketapi:retrieve',
                    context: message.context,
                    data: {
                        ...mockRetrieve.retrieve,
                    },
                };
                client.send(JSON.stringify(pack));
            }
        });

        sendEvents = () => {
            // Send event to client
            client.send(JSON.stringify({ ...mockRetrieve.chatMock }));
            setTimeout(() => {
                client.send(JSON.stringify({ ...mockRetrieve.gamesGlowMinecraftJumpCommand }));
            }, 1000);
            setTimeout(() => {
                client.send(JSON.stringify({ ...mockRetrieve.gamesGlowMinecraftColorCommand }));
            }, 2000);
            setTimeout(() => {
                client.send(JSON.stringify({ ...mockRetrieve.gamesGlowMinecraftHealCommand }));
            }, 3000);
        };

        sendEvents();
        setInterval(sendEvents, 10000);

        client.on('close', (errno, message) => {
            console.log('Server closed: ', errno, message);
        });

        client.on('error', (err) => {
            console.log('Server error: ', err);
        });
    });
    server.on('error', (error) => {
        console.log('Server error: ', error.message);
    });

    server.on('close', () => {
        console.log('Server closing connection');
    });
}

StartServer();
