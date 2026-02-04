/*
The useRef hook returns a mutable object with a .current property that you can use to store a value. 
Unlike useState, updating a useRef value does not trigger a component re-render. 
*/

import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;

//In this example, the useRef hook is used to directly reference the input element,
// allowing us to call the focus() method on it when the button is clicked.
