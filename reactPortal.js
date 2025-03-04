/* In React, a Portal is a way to render a component's children into a different parts of the DOM 
outside the parent component's hierarchy, while maintaining the React component structure
*/
// Modal.js

import ReactDom from "react-dom";
const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div
      style={{
        position: "fixed",
        top: "50px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        backgroundColor: "purple",
        padding: "20px",
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;

// in App.js

import React, { useState } from "react";
import Modal from "./Modal"
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h1>Welcome to React Modal</h1>
         <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Modal
      </button>
     <Modal isOpen={isModalOpen}>
         <h2>This is a Modal</h2>
     
      <button
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        Close Modal
      </button>
     </Modal>
    </div>
  );
};

export default App;
