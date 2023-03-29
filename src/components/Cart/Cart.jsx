import { useState } from "react";
import { BiTrash, BiCreditCard } from "react-icons/bi";

import Figure from "../UI/Figure";
import ProductDetails from "../UI/ProductDetails";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = ({ addedProduct, value, onClearCart }) => {
  const [item, setItem] = useState(value);
  const [cart, setCart] = useState(addedProduct);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice += product.price;
    totalShipping += product.shipping;
  }
  const tax = (totalPrice * 5) / 100;
  const grandTotal = (totalPrice + totalShipping + tax).toFixed(2);

  const handleClearCart = () => {
    setCart([]);
    setItem(0);
    onClearCart();
  };
  return (
    <div className={classes.cart_container}>
      <div className={classes.card_container}>
        {cart.map((product) => {
          return (
            <Card key={product.id} className={classes.card}>
              <Figure className={classes.figure}>
                <img src={product.img} alt={product.name} />
              </Figure>
              <ProductDetails className={classes.product_details}>
                <h2>{product.name.slice(0, 24)}</h2>
                <p>
                  Price:{" "}
                  <label className={classes.label}>${product.price}</label>
                </p>
                <p>
                  Shipping Charge: <label className={classes.label}> $5</label>
                </p>
              </ProductDetails>
              <div className={classes.icon_container}>
                <BiTrash className={classes.delete} />
              </div>
            </Card>
          );
        })}
      </div>
      <div className={classes.orderSummary_container}>
        <div className={classes.order_summary}>
          <h1>Order Summary</h1>
          <p>Selected Items: {item}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <p>Total Shipping Charge: ${totalShipping}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <h2>Grand Total: ${grandTotal}</h2>
        </div>
        <div className={classes.order_btns}>
          <Button onClick={handleClearCart} className={classes.btn_clear}>
            Clear Cart <BiTrash />
          </Button>
          <Button className={classes.btn_checkout}>
            Processed Checkout <BiCreditCard />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
