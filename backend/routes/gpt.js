// backend/routes/gpt.js

const express = require('express');
const router = express.Router();
const { getGptResponse } = require('../utils/gptService');

// POST /api/gpt/generate
router.post('/generate', async (req, res) => {
  const { prompt, model } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const gptResponse = await getGptResponse(prompt, model);
    res.json({ response: gptResponse });
  } catch (error) {
    console.error('Error fetching GPT response:', error.message);
    res.status(500).json({ error: 'Failed to get GPT response' });
  }
});

module.exports = router;
