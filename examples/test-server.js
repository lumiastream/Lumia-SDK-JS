const WebSocket = require('ws');

function StartServer() {
	var server = new WebSocket.Server({ port: 39231 });
	server.on('connection', (client, req) => {
		console.log('New connetion');
		client.on('message', (message) => {
			console.log('Message received: ', message.toString());
			client.send(JSON.stringify({ context: message.context, status: 200, message: 'success' }));
		});

		// Send event to client
		client.send(JSON.stringify({ type: 'chat/commands', value: 'red' }));
		client.send(JSON.stringify({ type: 'chat/twitch', value: 'I said hope you love this' }));

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
