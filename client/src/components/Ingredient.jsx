import React from 'react';

const Ingredient = ({ ingredient }) => {
  return (
    <div>
      {ingredient.name}: {ingredient.amount}
    </div>
  )

}

export default Ingredient;