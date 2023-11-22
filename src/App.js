import List from "./List";
import './App.css';
import React, {useState,  useRef } from 'react';
import styled, { ThemeProvider }  from 'styled-components';
import Switch from './Switch';
import ThemeContext from "./ThemeContext";

const AppWrapper = styled.div`
width: 100%;
min-height:100vh;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-color: ${({theme})=>theme.body};
`
const Insert = styled.div`
margin:1rem;`

const ButtonFocus = styled.div`
background-color: ${({theme})=>theme.buttom};
cursor: pointer;
padding: 5px;
`
const Text = styled.div`
color: ${({theme})=>theme.text};
margin:1rem;
`
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
    
  return (
    <ThemeContext.Consumer>
        {(theme)=>(
    <ThemeProvider theme={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
      <AppWrapper>
        <Insert><input ref={textInput} value={text} onChange ={handleChange} onKeyDown={handleKeyDown}/></Insert>
        <button onClick={() => valid()}>
        <ButtonFocus>Click to focus </ButtonFocus>
        </button>
        <Text><List  arr={ar} /> </Text> 
        <Switch toggleTheme={toggleTheme} ></Switch>
      </AppWrapper> 
    </ThemeProvider>)}
    </ThemeContext.Consumer>
  );
}

export default App;