/*
Memoization involves caching the results of complex logic 
so that they can be reused instead of being reimplemented on every render.

useMemo is one of the built-in hooks provided by React. It's used for memoization, 
which is an optimization technique to improve the performance of React components.
*/

//syntax
const memoValue = useMemo(() => {
  // complex logic code will goes here
  return result;
}, [dependency]);

/*
  memoValue: This is the variable that holds the memoized result of the function.
  The first argument is a function that contains the code you want to memoize.
  The second argument is an array of dependencies. If any of these dependencies change between renders, the memoized value will be changed.
  */

//Example of a shopping cart

import React, { useState, useMemo } from "react";

function ShoppingCart() {
  // State to store the items in the shopping cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 15 },
    { id: 3, name: "Product C", price: 20 },
  ]);

  // Calculate the total price of items in the cart
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <p>Length of cart - {cartItems.length}</p>
      <button
        onClick={() => addItemToCart({ id: 4, name: "Product D", price: 25 })}
      >
        Add Product D
      </button>
    </div>
  );
}

export default ShoppingCart;

/*
    We initialize a cartItems state variable to hold the items in the shopping cart.
    We use the useMemo hook to calculate totalPrice of the items in the cart.
    The calculation is performed only when the cartItems array changes.
    This avoids unnecessary recalculations of the total price when other parts of the component, 
    such as the button click, trigger re-renders.
    When a new item is added to the cart by clicking the “Add Product D” button, 
    the cartItems the state is updated, and the totalPrice calculation is triggered only when the cartItems array changes.
*/
