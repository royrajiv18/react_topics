/* The Context API in React is a feature that allows you to manage and share state or 
data globally across a component tree, without needing to pass props manually at every level.
*/

// inside Context folder, create UserContext.js

//
import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user] = useState({ name: "John", age: 30 });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

// in GrandChild component - refer propsdrilling.js
import React, { useContext } from "react";
import UserContext from "./Context/Usercontext";

const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>GrandChild</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

// in App component
import Parent from "./Parent";

return (
  <UserProvider>
    <Parent />
  </UserProvider>
);
export default App;
