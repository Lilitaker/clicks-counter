import React from "react";
import '../stylesheets/Button.css'

//destructuring -> props
function Button({ text, isClickBtn, manageClick }) { 
 return (
  <button 
    className={ isClickBtn ? "click-btn" : "restart-btn" }
    onClick={manageClick}>
    {text}
  </button>
 );
}

export default Button;

/* 
Step 1: 
- Create the Button component
- Add the class and the event
- Instead of props, we use destructuring to include three parameters 
- manageClick is a function
*/