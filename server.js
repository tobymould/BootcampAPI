const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(400).json({ success: true, msg: 'show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(400).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(400).json({ success: true, msg: 'create new bootcamps' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(400).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(400).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode of port ${PORT}`));
