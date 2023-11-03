import List from "./List"
import './App.css';
import React, {useState,  useRef } from 'react'


function App() {
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
    <div>
        <input ref={textInput} value={text} onChange ={handleChange} onKeyDown={handleKeyDown}/>
            <button onClick={() => valid()}>
                Click to focus
            </button>
        <List arr={ar} />   
    </div>
  );
}

export default App;