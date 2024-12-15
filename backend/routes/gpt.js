// backend/routes/gpt.js

const express = require('express');
const router = express.Router();
const { getGptResponse } = require('../utils/gptService');

// POST /api/gpt/generate
router.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const gptResponse = await getGptResponse(prompt);
    res.json({ response: gptResponse });
  } catch (error) {
    console.error('Error fetching GPT response:', error);
    res.status(500).json({ error: 'Failed to get GPT response' });
  }
});

module.exports = router;
