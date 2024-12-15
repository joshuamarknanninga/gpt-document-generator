// frontend/src/components/App.js

import React, { useState } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import HeaderComponent from './Header';
import InputForm from './InputForm';
import DocumentViewer from './DocumentViewer';
import '../styles/App.css';

function App() {
  const [documentContent, setDocumentContent] = useState('');

  const handleGenerate = (content) => {
    setDocumentContent(content);
  };

  return (
    <Container style={{ marginTop: '2em' }}>
      <HeaderComponent />
      <Divider />
      <InputForm onGenerate={handleGenerate} />
      {documentContent && (
        <>
          <Divider />
          <DocumentViewer content={documentContent} />
        </>
      )}
    </Container>
  );
}

export default App;
