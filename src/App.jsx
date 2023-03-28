import { Fragment } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Product/Products";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Products />
    </Fragment>
  );
}

export default App;
