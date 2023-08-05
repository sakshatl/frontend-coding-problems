import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { FeatureContexProvider } from './FeatureContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FeatureContexProvider>
      <App />
    </FeatureContexProvider>
  // </React.StrictMode>,
)
