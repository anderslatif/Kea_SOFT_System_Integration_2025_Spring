import express from 'express';

const app = express();

let clients = [];

app.get("/events/subscribe", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clients.push(res);

    req.on('close', () => {
        clients = clients.filter((client) => client !== res);
    });
});

app.get("/events/publish", (req, res) => {
    const message = { data: "This is a new message" };

    clients.forEach((res) => {
        res.send(message);
    });

    clients = [];

    res.status(204).end();
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
