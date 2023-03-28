import { useState, useEffect } from "react";
import fetchData from "../../../public/fetchData";

import Product from "./Product";
import classes from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = fetchData();
    setProducts(data);
  }, []);

  return (
    <div className={classes.products_container}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
