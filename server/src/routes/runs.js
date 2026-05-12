const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ runs: [] });
});

router.get('/:id', async (req, res) => {
  res.json({ run: { id: req.params.id, status: 'completed' } });
});

module.exports = router;
