import UDP from 'dgram';

const server = UDP.createSocket('udp4');

const port = 2222;

server.on('listening', () => {
    const address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});


server.on('message', (message, remote) => {
    console.log(remote.address + ':' + remote.port +' - ' + message);

    const response = Buffer.from("Message received");

    server.send(response, 0, response.length, remote.port, remote.address, (error, bytes) => {
        if (error) {
            console.error('Failed to send response !!');
          } else {
            console.log('Response sent successfully');
          }
    });
});

server.bind(port);
