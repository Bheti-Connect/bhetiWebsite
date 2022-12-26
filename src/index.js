import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/themeContext';
import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <GlobalStyle />
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Router>
)


