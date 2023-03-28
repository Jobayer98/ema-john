import React from "react";

import logo from "../assets/Logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={classes.navBar}>
        {/* brand logo */}
        <img src={logo} alt="ema-jhon-logo" />
        {/* nav list */}
        <div className={classes.navList}>
          <a href="">Order</a>
          <a href="">Order Review</a>
          <a href="">Manage Inventory</a>
          <a href="">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
