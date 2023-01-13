import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import Button from "../../UI/Button";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={`${classes.meal} ${props.className}`}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
        {/* <Button>+Add</Button> */}
      </div>
    </li>
  );
};

export default MealItem;
