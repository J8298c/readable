import React from 'react';

const Button = (props) => (
    <button 
        className={props.className} onClick={props.onClick} 
    >{props.innerText}</button>
)
export default Button;