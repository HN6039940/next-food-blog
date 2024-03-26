import React from "react";
import { MealItemProps } from "@/components/meals/Meal-item";
import MealItem from "@/components/meals/Meal-item";

type MealsGridProps = { meals: MealItemProps[] };

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul>
      {meals.map((meal) => {
        return <MealItem {...meal} key={meal.id} />;
      })}
    </ul>
  );
};

export default MealsGrid;
