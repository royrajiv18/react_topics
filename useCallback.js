/*
It memoizes functions instead of values, to prevent recreation upon every render.

*/

import React, { useState, useCallback } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the callback function to a child component */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

// ChildComponent receives the callback function as a prop
const ChildComponent = ({ onClick }) => {
  return <button onClick={onClick}>Increment Count</button>;
};

export default ExampleComponent;
