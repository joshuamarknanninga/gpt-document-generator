// frontend/src/components/InputForm.js

import React, { useState } from 'react';
import { Form, TextArea, Button, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';

function InputForm({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/gpt/generate', { prompt });
      onGenerate(response.data.response);
      setPrompt('');
    } catch (err) {
      setError('Failed to generate document. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit} error={!!error}>
        <Form.Field
          control={TextArea}
          label="Enter your prompt"
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
        {error && <Message error content={error} />}
        <Button type="submit" primary loading={loading} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Document'}
        </Button>
      </Form>
    </Segment>
  );
}

export default InputForm;
