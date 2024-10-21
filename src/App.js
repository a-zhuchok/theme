import './App.css';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Switch from './Switch';
import ThemeContext from "./ThemeContext";

const AppWrapper = styled.div`
width: 100%;
min-height:100vh;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-color: ${({ theme }) => theme.body};
`
function App() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ThemeProvider theme={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
          <AppWrapper>
            <Switch toggleTheme={toggleTheme} ></Switch>
          </AppWrapper>
        </ThemeProvider>)}
    </ThemeContext.Consumer>
  );
}

export default App;