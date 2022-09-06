import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryContextProvider } from './providers/queryProviders';
import { StyleContextProvider } from './providers/styleProviders';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryContextProvider>
      <StyleContextProvider>
        <App />
      </StyleContextProvider>
    </QueryContextProvider>
  </React.StrictMode>,
);
