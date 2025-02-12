import UDP from 'dgram';

const client = UDP.createSocket('udp4');

const port = 2222;
const host = 'localhost';

client.on('message', (message, remote) => {

    console.log('Address: ', remote.address, 'Port: ', remote.port, 'Size: ', remote.size)
    console.log('Message from server', remote.toString())

});

const packet = Buffer.from('Hello Server');

client.send(packet, 0, packet.length, port, host, (error, bytes) => {
    if (error) {
        console.error('Failed to send packet !!');
    } else {
        console.log('Packet sent successfully');
    }
});

