import React, { useState } from "react";

// Child component A
const CounterDisplay = ({ counter }) => {
  return <p>Counter: {counter}</p>;
};

// Child component B
const CounterButton = ({ onIncrement }) => {
  return <button onClick={onIncrement}>Increment Counter</button>;
};

// Parent component (common ancestor)
const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterButton onIncrement={handleIncrement} />
    </div>
  );
};

export default App;
