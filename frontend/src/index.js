// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import './styles/App.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register service worker for PWA
serviceWorker.register();
