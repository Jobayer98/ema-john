import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import classes from "./NavBar.module.css";

const NavList = ({ className }) => {
  return (
    <>
      <div className={className}>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/order_review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <NavLink to="/cart">
        <label className={classes.quantity}>0</label>
        <FaShoppingCart className={classes.shopping_basket} />
      </NavLink>
    </>
  );
};

export default NavList;
