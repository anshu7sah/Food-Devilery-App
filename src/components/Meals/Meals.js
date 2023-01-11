import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeal from "./AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeal />
    </React.Fragment>
  );
};

export default Meals;
