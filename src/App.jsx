import { Fragment } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Products />
      <Cart />
    </Fragment>
  );
}

export default App;
