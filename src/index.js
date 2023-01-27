import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SiteProvier from './context/SiteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SiteProvier>
      <App />
    </SiteProvier>
);