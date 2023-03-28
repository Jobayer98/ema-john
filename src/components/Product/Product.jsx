import Button from "../UI/Button";
import Card from "../UI/Card";
import Figure from "../UI/Figure";
import ProductDetails from "../UI/ProductDetails";

import classes from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Card>
      <Figure>
        <img src={product.img} alt={product.name} />
      </Figure>
      <ProductDetails>
        <h2>{product.name.slice(0, 24)}</h2>
        <p>Price: ${product.price}</p>
        <div>
          <p>Manufacture: {product.seller}</p>
          <p>Rating: {product.ratings} star</p>
        </div>
      </ProductDetails>
      <Button className={classes.btn_cart}>Add to Cart</Button>
    </Card>
  );
};

export default Product;
