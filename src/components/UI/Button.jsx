import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, className }) => {
  return <button className={className || classes.btn}>{children}</button>;
};
export default Button;
