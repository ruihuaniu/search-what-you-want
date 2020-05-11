import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './index.scss';
import App from './App';

// Sentry.init({ dsn: "https://3f8cc987cf9a46ba932a72771dadf645@o390658.ingest.sentry.io/5235440" });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

