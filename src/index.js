import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import CustomProvider from "./itemContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider>
    <App />
    </CustomProvider>
  </React.StrictMode>
);

