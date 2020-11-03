import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import RecipeDetails from './RecipeDetails.jsx';

const AvailableRecipes = ({ availRecipes, getRecipeDetails, setDetailsView }) => {

    return (
    <div>
      <h2>Available Recipes Based on Your  Current Ingredient Inventory</h2>
      <h4>Click on image to get full recipe</h4>
      <ul>
      {availRecipes.map((recipe, index) => {
        return (
          <li key={index} onClick={() => {
            getRecipeDetails(recipe.id);
            setDetailsView(true);
            }}>
            {recipe.title}
            <div><img href="" src={recipe.image}/></div>
          </li>
        )
      })}
      </ul>
    </div>
    );
}

export default AvailableRecipes;
