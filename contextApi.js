/* The Context API in React is a feature that allows you to manage and share state or 
data globally across a component tree, without needing to pass props manually at every level.

Steps to Use Context API:
- Create Context
- Provide Context
- Consume Context
*/

// inside Context folder, create ThemeContext.tsx
//
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// in ThemeToggle.tsx component
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;

// in App component
import "./App.css";

import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context API Example</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
