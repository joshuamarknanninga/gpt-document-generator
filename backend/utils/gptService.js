// backend/utils/gptService.js

const axios = require('axios');

const getGptResponse = async (prompt, model = process.env.GPT_MODEL || 'gpt-4') => {
  const GPT_API_URL = process.env.GPT_API_URL;
  const GPT_API_KEY = process.env.GPT_API_KEY;

  try {
    const response = await axios.post(
      GPT_API_URL,
      {
        prompt,
        max_tokens: 1500,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["\n\n"]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GPT_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error in getGptResponse:', error.response ? JSON.stringify(error.response.data) : error.message);
    throw new Error('Failed to generate response from GPT API.');
  }
};

module.exports = { getGptResponse };
