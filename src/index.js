import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled, {createGlobalStyle} from 'styled-components';
import ThemeContext from "./ThemeContext";

const Global = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  font-family:consolas;

}
`
const theme ={
darkTheme : {
  body:"#1c1c1c",
  buttom:"rgb(247, 165, 13)",
  text:"#b6b6b6",
  },
lightTheme : {
  body:"#fff",
  buttom:"#fff",
  text:"#black",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
