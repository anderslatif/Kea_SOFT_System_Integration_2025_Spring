import express from 'express';

const app = express();

app.get('/expressData', (req, res) => {
    res.send({ data: "This is the data from Express" });
});

app.get("/requestFastAPIData", () => {
// assignment.. make a request to FastAPI and send it as response
});

const PORT = 8080;
app.listen(PORT, () => console.log('Server started on port', PORT));
