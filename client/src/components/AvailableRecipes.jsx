import React from 'react';

const AvailableRecipes = ({ availRecipes }) => {

  return (
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
}

export default AvailableRecipes;