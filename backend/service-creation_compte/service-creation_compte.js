import express from 'express';
import sqlite3 from 'sqlite3';
const app = express();
const port = 3002; // Choose a port for your backend

//connection à la base de données
const db = new sqlite3.Database('../Tout-pret.db');

// Middleware to parse incoming JSON data
app.use(express.json());

// Define a sample endpoint
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});