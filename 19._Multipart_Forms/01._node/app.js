import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from 'multer';
// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(undefined, './uploads');
    },
    filename: (req, file, cb) => {
        const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const uniqueFilename = `${uniquePrefix}__${file.originalname}`;
        
        cb(undefined, uniqueFilename);
    }
});

function fileFilter(req, file, cb) {
    const validTypes = ["image/png", "image/svg", "image/jpeg"];

    if (!validTypes.includes(file.mimetype)) {
        cb(new Error("File type not allowed" + file.mimetype), false);
    } else {
        cb(null, true);
    }
}

const upload = multer({
    storage,
    limits: {
        fileSize: 20 * 1024 * 1024 // 20MB
    },
    fileFilter
});




app.post("/form", (req, res) => {
    console.log(req.body);
    delete req.body.password;
    res.send(req.body);
});

app.post("/fileform", upload.single('file'), (req, res) => {
    console.log(req.body);
    res.send({ });
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
