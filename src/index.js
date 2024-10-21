import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import ThemeContext from "./ThemeContext";

const Global = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  font-family:consolas;
}
`
const theme = {
  darkTheme: {
    body: "#1c1c1c",
    buttom: "rgb(247, 165, 13)",
    text: "#b6b6b6",
  },
  lightTheme: {
    body: "#fff",
    buttom: "#fff",
    text: "#black",
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global />
    <ThemeContext.Provider value={theme}>
      <App />
    </ThemeContext.Provider>
  </>
);

reportWebVitals();