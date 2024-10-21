import React from 'react';
import './Switch.css';
import { useState } from 'react';

const Switch = ({ toggleTheme }) => {
    const [isToggle, setToggle] = useState(false);
    const onToggle = () => {
        setToggle(!isToggle)
        toggleTheme()
    }
    return (
        <div>
            <label className='switch'>
                <input type='checkbox' onClick={onToggle} checked={isToggle} ></input>
                <span className='slider'></span>
                <img class="sun" width="20" height="20" src="https://img.icons8.com/ios/50/sun--v1.png" alt="sun--v1" />
                <img class="moon" width="20" height="20" src="https://img.icons8.com/ios/50/bright-moon--v1.png" alt="bright-moon--v1" />
            </label>
        </div>
    )
};
export default Switch