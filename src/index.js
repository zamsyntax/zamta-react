import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
import { Analytics } from '@vercel/analytics';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <Analytics />
    </React.StrictMode>
);
