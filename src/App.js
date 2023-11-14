import List from "./List";
import './App.css';
import React, {useState,  useRef } from 'react';
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
background-color: ${(props)=>props.theme.body}
`
const Insert = styled.div`
margin:1rem;`

const ButtonFocus = styled.div`
background-color: ${(props)=>props.theme.buttom};
cursor: pointer;
padding: 5px;
`
const Text = styled.div`
color: ${(props)=>props.theme.text};
margin:1rem;
`
const darkTheme = {
  body:"#1c1c1c",
  buttom:"rgb(247, 165, 13)",
  text:"#b6b6b6",
  }
const lightTheme = {
  body:"#fff",
  buttom:"#fff",
  text:"#black",
  }

function App() {
  const [theme, setTheme]=useState('light');
  const isDarkTheme = theme ==="dark";
  const toggleTheme = ()=>{
    setTheme(isDarkTheme ? "light" : "dark")}
  const [text, setText] = useState('')
  const [ar, setAr] = useState([1,333])
  const textInput = useRef(0)
  const valid = () => {
      textInput.current.focus()
    }
  const handleChange = (event) => {
      setText(event.target.value);
    }
  const handleKeyDown = (event) => {
      if(event.key==='Enter' && text!==""){
        ar.push(text)
        setAr(ar)
        setText("")
    }}
    
  return (<ThemeContext.Provider value={theme}>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ThemeContext.Consumer>
        {(theme)=>(
      <AppWrapper>
        <Insert><input ref={textInput} value={text} onChange ={handleChange} onKeyDown={handleKeyDown}/></Insert>
        <button onClick={() => valid()}>
        <ButtonFocus>Click to focus </ButtonFocus>
        </button>
        <Text><List color={(props)=>props.theme.buttom} arr={ar} /> </Text> 
        <Switch toggleTheme={toggleTheme} ></Switch>
      </AppWrapper> )}
      </ThemeContext.Consumer> 
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;