// frontend/src/components/DocumentViewer.js

import React from 'react';
import { Button, Segment, Header, Icon } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

function DocumentViewer({ content }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(
      () => {
        alert('Document copied to clipboard!');
      },
      () => {
        alert('Failed to copy document.');
      }
    );
  };

  return (
    <Segment>
      <Header as="h2">
        <Icon name="file alternate outline" />
        <Header.Content>Generated Document</Header.Content>
      </Header>
      <Segment>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Segment>
      <Button onClick={handleCopy} color="green" icon labelPosition="left">
        <Icon name="copy" />
        Copy to Clipboard
      </Button>
    </Segment>
  );
}

export default DocumentViewer;
