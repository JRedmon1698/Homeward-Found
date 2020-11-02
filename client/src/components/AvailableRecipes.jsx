import React from 'react';

const AvailableRecipes = ({ recipes }) => (
  <div>
    <h2>Available Recipes</h2>
    <ul>
    {recipes.map((recipe, index) => {
      return (
        <li key={index} onClick={() => console.log('clicked')}>
          {recipe.name}
        </li>
      )
    })}
    </ul>
  </div>
)

export default AvailableRecipes;