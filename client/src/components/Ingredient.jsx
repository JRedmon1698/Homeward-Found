import React from 'react';

const Ingredient = ({ ingredient }) => {
  return (
    <div>{console.log('ingredient', ingredient)}
      {ingredient.name}: {ingredient.amount}
    </div>
  )

}

export default Ingredient;