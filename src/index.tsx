import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/tailwind.css";
import App from './game/App';
import { CookiesProvider } from 'react-cookie';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
