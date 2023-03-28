import React, { useState } from "react";

import classes from "./Hamburger.module.css";
const Hamburger = ({ className }) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div onClick={handleClick} className={className}>
      <span className={isClick ? classes.firstCross : classes.first}></span>
      <span className={isClick ? classes.hideSecond : classes.second}></span>
      <span className={isClick ? classes.thirdCross : classes.third}></span>
    </div>
  );
};

export default Hamburger;
