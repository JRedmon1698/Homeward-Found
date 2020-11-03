import React, { useState, setState } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient.jsx';

const IngredientList = ({ availIngredients }) => {

  return (
    <div>
      <h2>
      Current Ingredient Stock
      </h2>
      <ul>
        {availIngredients.map((ingredient, index) => (         
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