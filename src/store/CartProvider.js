import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existinCartItem = state.item[existingCartItemIndex];

    let updatedItems;

    if (existinCartItem) {
      const updatedItem = {
        ...existinCartItem,
        amount: existinCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    console.log("Anshu");
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.item[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id != action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispachCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispachCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
