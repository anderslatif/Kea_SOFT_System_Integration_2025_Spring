import { WebSocket } from "ws";

const websocketClient = new WebSocket("ws://localhost:8080");

websocketClient.on('open', () => {
    websocketClient.send("Sending a client message from Node.js");

    websocketClient.on("message", (message) => {
        console.log(`Receives a message from the server: ${message}`);

        // websocketClient.close();
    });
    
});