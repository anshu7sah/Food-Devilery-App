import React from "react";
import classes from "./MealItem.module.css";
import Button from "../../UI/Button";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={`${classes.meal} ${props.className}`}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm />
        {/* <Button>+Add</Button> */}
      </div>
    </li>
  );
};

export default MealItem;
