import express from "express";
import {dirname} from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname,'Public', 'entrance.html'));
});

app.get("/form1", async (req, res) => {
    res.sendFile(path.join(__dirname,'Public', 'form1.html'));
});

app.get("/form2", async (req, res) => {
    res.sendFile(path.join(__dirname,'Public', 'form2.html'));
});


app.post("/submit-form1", async (req, res) => {
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log("HEHEHEHEHE")
    console.log(req.body)
    res.send(req.params)
});

app.post("/form2", async (req, res) => {
    res.send(req.body)
});

app.get("/confirmation", async (req, res) => {
    res.sendFile(path.join(__dirname,'Public', 'confirmation.html'));
});

app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}`);
});