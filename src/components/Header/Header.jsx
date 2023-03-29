import React from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "./Hamburger";
import logo from "../../assets/Logo.svg";
import classes from "./Header.module.css";
import NavList from "./NavBar";

const Header = () => {
  return (
    <header>
      <nav className={classes.navBar}>
        {/* brand logo */}
        <NavLink to="/">
          <img src={logo} alt="ema-jhon-logo" />
        </NavLink>
        {/* nav list */}
        <div className={classes.nav_container}>
          <NavList className={classes.navList} />
          <Hamburger className={classes.hamburger} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
