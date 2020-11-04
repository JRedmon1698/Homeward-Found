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

  const updateIngredientTimeLine = (id, qual, amt) => {
    const options = {
      timeLine: {
        qualifier: qual,
        amount: amt
      }
    }
    axios.patch(`/api/ingredients/timeLine/${id}`, options)
      .then((data) => console.log(data, ' saved'))
      .catch((err) => console.log(err));
  }

  const updateIngredientAmount = (id, amt, measureType) => {
    console.log(id, amt, measureType);
    const options = {
      amount: amt,
      measure: measureType
    }
    axios.patch(`/api/ingredients/amount/${id}`, options)
      .then((data) => console.log(data, ' updated'))
      .catch((err) => console.log(err));
  }

  const autoUseIngredient = (ingredients) => {
    let timeFrame;
    for (const ingredient of ingredients) {
      if (!ingredient.qualifier) {
        return;
      }
      if (ingredient.timeLine.qualifier === 'minutes') {
        timeFrame === ((1000 * 60 * 60) * ingredient.timeLine.amount);
      }
      if (!ingredient.timLine.amount) {
        return;
      } else {
        setInterval(() => {
          axios.patch(`/api/ingredients/useAmount/${ingredient.id}`)
            .then((data) => console.log('Ingredient auto-used'))
            .catch((err) => console.log(err));
        }, timeFrame)
      }
    }
  }

  // useEffect(() => {
  //   getAvailRecipes(availIngredients);
  // }, [availIngredients]);

  useEffect(() => {
    getAvailIngredients()
  }, [availIngredients]);

  useEffect(() => {
    autoUseIngredient(availIngredients);
  }, [availIngredients]);

  if (detailsView === false) {
    return (
      <Wrapper>
        <div>
          <Title>Homeward Found</Title>
          <TitleWrapper>
          </TitleWrapper>
          <AvailableIngredientsWrapper>
            <IngredientList availIngredients={availIngredients} saveNewIngredient={saveNewIngredient}
              updateIngredientTimeLine={updateIngredientTimeLine} autoUseIngredient={autoUseIngredient}
              updateIngredientAmount={updateIngredientAmount} />
          </AvailableIngredientsWrapper>
          <AvailableRecipesWrapper>
            <AvailableRecipes availRecipes={availRecipes} getRecipeDetails={getRecipeDetails}
              recipeDetails={recipeDetails} detailsView={detailsView} setDetailsView={setDetailsView} />
          </AvailableRecipesWrapper>
        </div>
      </Wrapper>
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
  background-repeat: no-repeat;
  padding-bottom: 500px;
  opacity: 60%;
  `;

const Title = styled.div`
  z-index: 9;
  font-size: 90px;
  position: absolute;
`;

const Wrapper = styled.div`
  font-family: Georgia;
   
`;

const AvailableRecipesWrapper = styled.div`
  position: relative;
  float: right;
  backgroun-color: linen;
`;

const AvailableIngredientsWrapper = styled.div`
  position: relative;
  float: left;
  backgroun-color: linen;
`;

export default App;
