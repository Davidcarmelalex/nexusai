const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'nexusai-api' }));

// Routes (stub — expand with full agent CRUD and run engine)
app.use('/api/agents', require('./routes/agents'));
app.use('/api/runs', require('./routes/runs'));

app.listen(PORT, () => console.log(`NexusAI API on port ${PORT}`));
