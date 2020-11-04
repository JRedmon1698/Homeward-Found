import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecipeDetails from './RecipeDetails.jsx';

const AvailableRecipes = ({ availRecipes, getRecipeDetails, setDetailsView }) => {

    return (
    <div>
      <TitleWrapper>
        <h2>Available Recipes Based on Your Current Ingredient Inventory</h2>
      </TitleWrapper>
      <SubTitle>
        <h4>Click on image to get full recipe</h4>
      </SubTitle>
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

const TitleWrapper = styled.div`
  margin-right: 50px;
`;

const SubTitle = styled.div`
  margin-left: 20px;
`;

export default AvailableRecipes;
