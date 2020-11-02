import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sampleData from '../../../database/sampleData.js';
import IngredientList from './IngredientList.jsx';
import AvailableRecipes from './AvailableRecipes.jsx';

function App() {
  const [ingredients, setIngredients] = useState(sampleData.ingredients);
  const [availRecipes, setAvailRecipes] = useState(sampleData.recipes);

  const getAvailRecipes = () => {
    let ingredientStr;
    for (let i = 0; i < ingredients.length; i+= 1) {
      if (ingredients[i].amount > 0) {

      }
    }
    axios.get(`/api/recipes/ingredients/${ingredientStr}`)
      .then(({ data }) => setAvailRecipes(data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Homeward Found</h1>
      <IngredientList ingredients={ingredients}/>
      <AvailableRecipes availRecipes={availRecipes}/>
    </div>
  );
}

export default App;