import React from "react";

import classes from "./Figure.module.css";

const Figure = ({ children }) => {
  return <figure className={classes.img}>{children}</figure>;
};

export default Figure;
