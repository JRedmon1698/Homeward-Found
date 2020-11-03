import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import sampleData from '../../../database/sampleData.js';
import img from '../images/pantry.jpg';
import IngredientList from './IngredientList.jsx';
import AvailableRecipes from './AvailableRecipes.jsx';
import RecipeDetails from './RecipeDetails.jsx';

function App() {
  const [availIngredients, setAvailIngredients] = useState(sampleData.ingredients);
  const [availRecipes, setAvailRecipes] = useState(sampleData.recipes);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [detailsView, setDetailsView] = useState(false);

  const saveNewIngredient = (ingredient) => {
    axios.post('/api/ingredients', {
      name: ingredient.newIngredientName,
      amount: ingredient.newIngredientAmount,
      measure: ingredient.newIngredientMeasure
    })
      .then(({ data }) => console.log('saved', data))
      .catch((err) => console.log(err));
  }

  const getAvailIngredients = () => {
    axios.get('/api/ingredients')
      .then(({ data }) => {
        let ingredients = [];
        for (let i = 0; i < data.length; i += 1) {
          if (data[i].name !== '' && data[i].amount !== '' && data[i].measure !== '') {
            ingredients.push(data[i]);
          }
        }
        setAvailIngredients(ingredients);
      })
      .catch((err) => console.log(err));
  }

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

  // useEffect(() => {
  //   getAvailRecipes(availIngredients);
  // }, [availIngredients]);

  useEffect(() => {
    getAvailIngredients()
  }, [availIngredients]);


  if (detailsView === false) {
  return (
    // <Wrapper>
    <div>
      <TitleWrapper>
        Homeward Found
      </TitleWrapper>
      <AvailableIngredientsWrapper>
        <IngredientList availIngredients={availIngredients} saveNewIngredient={saveNewIngredient} />
      </AvailableIngredientsWrapper>
    <AvailableRecipesWrapper>
      <AvailableRecipes availRecipes={availRecipes} getRecipeDetails={getRecipeDetails}
        recipeDetails={recipeDetails} detailsView={detailsView} setDetailsView={setDetailsView} />
    </AvailableRecipesWrapper>
    </div>
    // {/* </Wrapper> */}
  );
  } else {
    return (
      <Wrapper>
      <RecipeDetails recipeDetails={recipeDetails} detailsView={detailsView} setDetailsView={setDetailsView} />
      </Wrapper>
    )
  }
}

const TitleWrapper = styled.div`
  background-image: url(${img});
  padding-bottom: 500px;
  font-size: 90px;
  z-index: 9;
`;

const Wrapper = styled.div`
  font-family: Georgia;
`;

const AvailableRecipesWrapper = styled.div`
  position: relative;
  float: right;
`;

const AvailableIngredientsWrapper = styled.div`
  position: relative;
  float: left;
`;

export default App;
