import React from "react";
import { BiTrash, BiCreditCard } from "react-icons/bi";

import Figure from "../UI/Figure";
import ProductDetails from "../UI/ProductDetails";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = () => {
  const product = {
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
    category: "Men's Sneaker",
    name: "ULTRABOOST 22 SHOES",
    seller: "Addidas",
    price: 420,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    shipping: 1,
    quantity: 0,
  };
  return (
    <div className={classes.cart_container}>
      <div className={classes.card_container}>
        <Card className={classes.card}>
          <Figure className={classes.figure}>
            <img src={product.img} alt={product.name} />
          </Figure>
          <ProductDetails className={classes.product_details}>
            <h2>{product.name}</h2>
            <p>
              Price: <label className={classes.label}>${product.price}</label>
            </p>
            <p>
              Shipping Charge: <label className={classes.label}> $5</label>
            </p>
          </ProductDetails>
          <div className={classes.icon_container}>
            <BiTrash className={classes.delete} />
          </div>
        </Card>
        <Card className={classes.card}>
          <Figure className={classes.figure}>
            <img src={product.img} alt={product.name} />
          </Figure>
          <ProductDetails className={classes.product_details}>
            <h2>{product.name}</h2>
            <p>
              Price: <label className={classes.label}>${product.price}</label>
            </p>
            <p>
              Shipping Charge: <label className={classes.label}> $5</label>
            </p>
          </ProductDetails>
          <div className={classes.icon_container}>
            <BiTrash className={classes.delete} />
          </div>
        </Card>
        <Card className={classes.card}>
          <Figure className={classes.figure}>
            <img src={product.img} alt={product.name} />
          </Figure>
          <ProductDetails className={classes.product_details}>
            <h2>{product.name}</h2>
            <p>
              Price: <label className={classes.label}>${product.price}</label>
            </p>
            <p>
              Shipping Charge: <label className={classes.label}> $5</label>
            </p>
          </ProductDetails>
          <div className={classes.icon_container}>
            <BiTrash className={classes.delete} />
          </div>
        </Card>
        <Card className={classes.card}>
          <Figure className={classes.figure}>
            <img src={product.img} alt={product.name} />
          </Figure>
          <ProductDetails className={classes.product_details}>
            <h2>{product.name}</h2>
            <p>
              Price: <label className={classes.label}>${product.price}</label>
            </p>
            <p>
              Shipping Charge: <label className={classes.label}> $5</label>
            </p>
          </ProductDetails>
          <div className={classes.icon_container}>
            <BiTrash className={classes.delete} />
          </div>
        </Card>
        <Card className={classes.card}>
          <Figure className={classes.figure}>
            <img src={product.img} alt={product.name} />
          </Figure>
          <ProductDetails className={classes.product_details}>
            <h2>{product.name}</h2>
            <p>
              Price: <label className={classes.label}>${product.price}</label>
            </p>
            <p>
              Shipping Charge: <label className={classes.label}> $5</label>
            </p>
          </ProductDetails>
          <div className={classes.icon_container}>
            <BiTrash className={classes.delete} />
          </div>
        </Card>
        <Card className={classes.card}>
          <Figure className={classes.figure}>
            <img src={product.img} alt={product.name} />
          </Figure>
          <ProductDetails className={classes.product_details}>
            <h2>{product.name}</h2>
            <p>
              Price: <label className={classes.label}>${product.price}</label>
            </p>
            <p>
              Shipping Charge: <label className={classes.label}> $5</label>
            </p>
          </ProductDetails>
          <div className={classes.icon_container}>
            <BiTrash className={classes.delete} />
          </div>
        </Card>
      </div>
      <div className={classes.orderSummary_container}>
        <div className={classes.order_summary}>
          <h1>Order Summary</h1>
          <p>Selected Items: 6</p>
          <p>Total Price: $1140</p>
          <p>Total Shipping Charge: $5</p>
          <p>Tax: $114</p>
          <h2>Grand Total: $1559</h2>
        </div>
        <div className={classes.order_btns}>
          <Button className={classes.btn_clear}>
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
