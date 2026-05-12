const express = require('express');
const router = express.Router();

// GET /api/agents
router.get('/', async (req, res) => {
  // TODO: fetch from DB
  res.json({ agents: [] });
});

// POST /api/agents
router.post('/', async (req, res) => {
  const { name, description, trigger, schedule, steps } = req.body;
  if (!name || !trigger) return res.status(400).json({ error: 'name and trigger are required' });
  // TODO: persist to DB
  res.status(201).json({ agent: { id: 'stub', name, trigger, status: 'active' } });
});

// POST /api/agents/:id/run
router.post('/:id/run', async (req, res) => {
  // TODO: queue agent run via Bull
  res.json({ run_id: 'stub', status: 'queued' });
});

module.exports = router;
