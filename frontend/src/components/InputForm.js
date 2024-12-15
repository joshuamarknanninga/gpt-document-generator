// frontend/src/components/InputForm.js

import React, { useState } from 'react';
import { Form, TextArea, Button, Message, Segment, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

const modelOptions = [
  { key: 'standard', text: 'Standard GPT', value: 'text-davinci-003' },
  { key: 'custom', text: 'GPT Document Generator', value: 'ft-your-finetuned-model-name' },
  // Add more models as needed
];

function InputForm({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState('ft-your-finetuned-model-name');

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3001/api/gpt/generate', { prompt, model: selectedModel });
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
        <Form.Field
          control={Dropdown}
          label="Select GPT Model"
          placeholder="Select Model"
          fluid
          selection
          options={modelOptions}
          value={selectedModel}
          onChange={(e, { value }) => setSelectedModel(value)}
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
