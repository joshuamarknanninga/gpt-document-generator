// frontend/src/components/Header.js

import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

function HeaderComponent() {
  return (
    <Header as="h1" icon textAlign="center">
      <Icon name="keyboard outline" circular />
      <Header.Content>GPT Document Generator</Header.Content>
      <Header.Subheader>Generate and format documents using your custom GPT.</Header.Subheader>
    </Header>
  );
}

export default HeaderComponent;
