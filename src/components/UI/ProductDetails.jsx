import React from "react";

import classes from "./ProductDetails.module.css";

const ProductDetails = ({ children }) => {
  return <div className={classes.product_details}>{children}</div>;
};

export default ProductDetails;
