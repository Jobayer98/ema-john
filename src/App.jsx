import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";

// sfc
function App() {
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState([]);

  const onAddProuct = (product) => {
    setValue((prevValue) => prevValue + 1);
    setCart((prevCart) => [...prevCart, product]);
  };
  const clearCart = () => {
    setValue(0);
  };
  return (
    <BrowserRouter>
      <Header value={value} />
      <Routes>
        <Route path="/" element={<Home onAddProuct={onAddProuct} />} />
        <Route
          path="/cart"
          element={
            <Cart addedProduct={cart} value={value} onClearCart={clearCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
