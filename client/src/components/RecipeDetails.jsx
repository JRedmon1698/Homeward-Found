import React from 'react';

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
      <button onClick={() => setDetailsView(false)}>Back</button>
    </div>
  );
} 

export default RecipeDetails;
