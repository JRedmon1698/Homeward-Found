import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sampleData from '../../../database/sampleData.js';
import IngredientList from './IngredientList.jsx';
import AvailableRecipes from './AvailableRecipes.jsx';

function App() {
  const [ingredients, setIngredients] = useState(sampleData.ingredients);
  const [recipes, setRecipes] = useState(sampleData.recipes);

  return (
    <div>
      <h1>Homeward Found</h1>
      <IngredientList ingredients={ingredients}/>
      <AvailableRecipes recipes={recipes}/>
    </div>
  );
}

export default App;