import express from 'express';
const app = express();

import cors from 'cors';

// app.use(cors());

// app.use(cors({
//     origin: "*",
//     methods: ["GET"]
// }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/timestamp", /*cors(),*/ (req, res) => {
    res.send({ data: new Date() });
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
