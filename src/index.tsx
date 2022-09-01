import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryContextProvider } from './providers/queryProviders';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryContextProvider>
      <App />
    </QueryContextProvider>
  </React.StrictMode>,
);
