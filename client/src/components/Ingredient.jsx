import React from 'react';

const Ingredient = ({ ingredient }) => {

  const useIngredient = () => {
    ingredient.amount -= 1;
    
  }

  return (
    <div>
      {ingredient.name}: {ingredient.amount}
    </div>
  )

}

export default Ingredient;