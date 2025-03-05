/*
Lazy loading in React allows you to split your code into smaller chunks, loading only the code that is 
needed for a particular part of your application when it is actually required.

- lazy() is used to dynamically import components only when they’re needed.
- Suspense is a component provided by React that lets you "wait" for the dynamic import to load,
  showing a fallback UI in the meantime
*/

// Products.js
import React from 'react';

const Products = () => {
  return <div>This is a lazy-loaded component!</div>;
};

export default Products;


// in route file 
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//  import Prodcuts from "./components/products/Products";
import PageNotFound from "./components/PagenotFound/PageNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";

const Prodcuts = React.lazy(() => import("./components/products/Products"));  // dynamic import

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} 
      <Route path="prodcuts"
      element={
        <React.Suspense fallback={<>...</>}>
          <Prodcuts />
        </React.Suspense>
      }
    />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));