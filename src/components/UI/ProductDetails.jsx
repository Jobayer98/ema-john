import React from "react";

import classes from "./ProductDetails.module.css";

const ProductDetails = ({ children, className }) => {
  return <div className={className || classes.product_details}>{children}</div>;
};

export default ProductDetails;
