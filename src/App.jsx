import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";

// sfc

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
