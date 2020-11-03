import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient.jsx';

function IngredientList({ availIngredients, saveNewIngredient }) {
  const [newIngredientName, setNewIngredientName] = useState('');
  const [newIngredientAmount, setNewIngredientAmount] = useState(null);
  const [newIngredientMeasure, setNewIngredientMeasure] = useState('');

  const handleSubmit = (ingredient) => {
    // setNewIngredient(ingredient);
    saveNewIngredient(ingredient);
    // alert(newIngredient.name);
  }

  const handleNameChange = (e) => {
    setNewIngredientName(e.target.value);
  }

  const handleAmountChange = (e) => {
    setNewIngredientAmount(e.target.value);
  }

  const handleMeasureChange = (e) => {
    setNewIngredientMeasure(e.target.value);
  }

  return (
    <div>
      <h2>
      Current Ingredient Stock
      </h2>
      <ul>
        {availIngredients.map((ingredient, index) => (
          <Ingredient ingredient={ingredient} key={index} />
        ))}
      </ul>
          <span>
      <h4>Add ingredient</h4>
      <div>
        <p>Name</p>
        <input type='text' name='name' onChange={handleNameChange}></input>
      </div>
      <div>
        <p>Amount</p>
        <input type='text' name='amount' onChange={handleAmountChange}></input>
      </div>
      <div>
        <p>Measurement (if not applicable, input 'null')</p>
        <input type='text' name='measure' onChange={handleMeasureChange}></input>
      </div>
      <button onClick={() => {
        handleSubmit({
          newIngredientName,
          newIngredientAmount,
          newIngredientMeasure
        })}}>Save</button>
      </span>
      </div >
  )

}


export default IngredientList;



/*
</div>
); */
// }