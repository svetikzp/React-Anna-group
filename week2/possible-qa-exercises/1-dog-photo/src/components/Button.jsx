import React from "react";
import './Button.css';

function Button({onClick}) {
   return <button onClick={onClick}>Get a dog!</button> 
}

export default Button;