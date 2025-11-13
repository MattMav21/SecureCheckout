import express from "express";
import {dirname} from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname,'Views', 'form1.html'));
});

app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}`);
});