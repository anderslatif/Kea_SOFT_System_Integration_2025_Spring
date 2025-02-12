import net from 'net';

const HOST = '127.0.0.1';
const PORT = 2222;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Connected to server', HOST, PORT);
    client.write('Hello Server');
});

client.on('data', (data) => {
    console.log('Data received from server: ', data.toString());
    client.destroy();
});

client.on('close', () => {
    console.log('Connection closed');
});

client.on("error", (error) => {
    console.log(error);
});
