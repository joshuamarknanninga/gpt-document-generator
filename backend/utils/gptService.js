// backend/utils/gptService.js

const axios = require('axios');

const getGptResponse = async (prompt) => {
  const GPT_API_URL = process.env.GPT_API_URL; // e.g., 'https://api.yourgpt.com/generate'
  const GPT_API_KEY = process.env.GPT_API_KEY;

  const response = await axios.post(
    GPT_API_URL,
    { prompt },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GPT_API_KEY}`,
      },
    }
  );

  // Assuming the GPT API returns the response in 'data.text'
  return response.data.text;
};

module.exports = { getGptResponse };
