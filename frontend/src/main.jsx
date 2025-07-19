import React from 'react';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // We use React.StrictMode here, which requires the 'React' object to be imported.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);