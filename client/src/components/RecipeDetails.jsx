import React from 'react';
import styled from 'styled-components';

const RecipeDetails = ({ recipeDetails, setDetailsView }) => {

  return (
    <div>
      <ol>
        {recipeDetails.map((step, i) => {
          return (
          <li key={i}>{step.step}</li>
          );
        })}
      </ol>
      <Back onClick={() => setDetailsView(false)}>Back</Back>
    </div>
  );
} 

const Back = styled.button`
  cursor: pointer;
`;

export default RecipeDetails;
