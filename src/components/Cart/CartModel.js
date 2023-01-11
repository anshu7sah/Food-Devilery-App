import React from "react";
import classes from "./CartModel.module.css";
import Model from "../UI/Model";

const CartModel = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", price: 12.99, amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default CartModel;
