import React, { useState, setState } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient.jsx';

const IngredientList = ({ ingredients }) => {

  return (
    <div>
      <h2>{console.log(ingredients)}
      Current Ingredient Stock
      </h2>
      <ul>
        {ingredients.map((ingredient, index) => (         
            <Ingredient ingredient={ingredient} key={index}/>
        ))}
      </ul>
      </div>
  )

  }
  

export default IngredientList;



      /* 
    </div>
  ); */
// }