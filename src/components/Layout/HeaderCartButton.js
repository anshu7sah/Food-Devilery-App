import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { item } = cartCtx;
  const numberOfCartItem = item.reduce((curNum, it) => {
    return curNum + it.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setButonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
