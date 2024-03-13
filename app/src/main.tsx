import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Supports weights 100-900
import '@fontsource-variable/inter';
// Supports weights 100-900
import '@fontsource-variable/montserrat';
// Supports weights 200-900
import '@fontsource-variable/nunito-sans';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
