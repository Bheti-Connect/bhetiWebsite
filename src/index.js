import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle';

// import './index.css';
import App from './App';
import { ThemeProvider } from './context/themeContext';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
