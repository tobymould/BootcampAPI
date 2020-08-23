const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(400).json({ success: true, msg: 'show all bootcamps' });
});

router.get('/:id', (req, res) => {
  res.status(400).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(400).json({ success: true, msg: 'create new bootcamps' });
});

router.put('/:id', (req, res) => {
  res.status(400).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(400).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
