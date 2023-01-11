import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <section className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </section>
  );
};

export default Input;
