import express from "express";
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

import fs from 'fs';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // For HTTPS
const httpApp = express(); // For HTTP

// Middleware for both
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

httpApp.use(express.urlencoded({ extended: true }));
httpApp.use(express.static(path.join(__dirname, 'public')));

// --- Your route handlers (for both servers) ---
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'entrance.html'));
});
app.get("/form2", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form2.html'));
});
app.post("/submit-form2", (req, res) => {
  console.log(req.body);
//   res.send(req.body);
  res.redirect("/confirmation");
});

// For Form 1, you can keep the same route or serve a separate page
httpApp.get("/form1", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form1.html'));
});
httpApp.post("/submit-form1", (req, res) => {
  console.log(req.body);
//   res.send(req.body);
  res.redirect("https://localhost:3001/confirmation");
});

// Confirmation Page
app.get("/confirmation", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'confirmation.html'));
});

httpApp.get("/confirmation", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'confirmation.html'));
});

// --- Start servers ---

// HTTP server (for form1)
httpApp.listen(3000, () => {
  console.log('HTTP (unencrypted) server running on http://localhost:3000');
});

// HTTPS server (for form2)
const options = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt')
};

https.createServer(options, app).listen(3001, () => {
  console.log('HTTPS (encrypted) server running on https://localhost:3001');
});