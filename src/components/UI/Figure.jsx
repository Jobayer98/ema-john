import React from "react";

import classes from "./Figure.module.css";

const Figure = ({ children, className }) => {
  return <figure className={className || classes.img}>{children}</figure>;
};

export default Figure;
