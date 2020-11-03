import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sampleData from '../../../database/sampleData.js';
import IngredientList from './IngredientList.jsx';
import AvailableRecipes from './AvailableRecipes.jsx';
import RecipeDetails from './RecipeDetails.jsx';

function App() {
  const [availIngredients, setAvailIngredients] = useState(sampleData.ingredients);
  const [availRecipes, setAvailRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [detailsView, setDetailsView] = useState(false);

  const getAvailRecipes = (ingredients) => {
    let ingredientStr = '';
    ingredients.map((ingredient, i) => {
      if (ingredient.amount > 0) {
        ingredientStr += `${ingredient.name}, `;
      }
    });
    axios.get(`/api/recipes/${ingredientStr}`)
      .then(({ data }) => setAvailRecipes(data))
      .catch((err) => console.log(err));
  }

  const getRecipeDetails = (id) => {
    axios.get(`/api/recipe/details/${id}`)
      .then(({ data }) => setRecipeDetails(data[0].steps))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAvailRecipes(availIngredients);
  }, [availIngredients]);


  if (detailsView === false) {
  return (
    <div>
      <h1>Homeward Found</h1>
      <IngredientList availIngredients={availIngredients}/>
      <AvailableRecipes availRecipes={availRecipes} getRecipeDetails={getRecipeDetails}
     recipeDetails={recipeDetails} detailsView={detailsView} setDetailsView={setDetailsView} />
    </div>
  );
  } else {
    return (
      <RecipeDetails recipeDetails={recipeDetails} detailsView={detailsView} setDetailsView={setDetailsView} />
    )
  }
}

export default App;
