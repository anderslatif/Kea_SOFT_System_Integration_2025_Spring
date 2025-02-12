import net from 'net';

const HOST = '127.0.0.1';
const PORT = 2222;

const server = net.createServer((socket) => {

    console.log('Client connected');
    socket.write('Hello from the server'); 

    socket.on('data', (data) => {
        console.log('Data received from client: ', socket.remoteAddress, data.toString());
        socket.write('Hello Client');
    });

    socket.on('close', () => {
        console.log('Client disconnected: ', socket.remoteAddress, socket.remotePort);
    });

    socket.on('error', (error) => {
        console.log('Error: ', error);
    });
});

server.listen(PORT, HOST, () => console.log("TCP Server listening on " + HOST + ":", PORT));