import React from 'react';

const Ingredient = ({ ingredient }) => {

  const useIngredient = () => {
    ingredient.amount -= 1;

  }

  return (
    <div>
      <span>{ingredient.name}: {ingredient.amount} {ingredient.measure}</span>
    </div>
  )

}

export default Ingredient;