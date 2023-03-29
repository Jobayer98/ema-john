import { useState, useEffect } from "react";
import fetchData from "../../../public/fetchData";

import Product from "./Product";
import classes from "./Products.module.css";

const Products = ({ onAddProuct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = fetchData();
    setProducts(data);
  }, []);

  return (
    <div className={classes.products_container}>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddProuct={onAddProuct} />
      ))}
    </div>
  );
};

export default Products;
