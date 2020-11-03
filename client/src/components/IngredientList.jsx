import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ingredient from './Ingredient.jsx';

function IngredientList({ availIngredients, saveNewIngredient }) {
  const [newIngredientName, setNewIngredientName] = useState('');
  const [newIngredientAmount, setNewIngredientAmount] = useState(null);
  const [newIngredientMeasure, setNewIngredientMeasure] = useState('');

  const handleSubmit = (ingredient) => {
    saveNewIngredient(ingredient);
  }

  const handleNameChange = (e) => {
    setNewIngredientName(e.target.value);
    e.preventDefault();
  }

  const handleAmountChange = (e) => {
    setNewIngredientAmount(e.target.value);
    e.preventDefault();
  }

  const handleMeasureChange = (e) => {
    setNewIngredientMeasure(e.target.value);
    e.preventDefault();
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
          <form>
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
        <input type='text' name='measure' placeholder='lbs., gallons, boxes, oz., etc.' onChange={handleMeasureChange}></input>
      </div>
      <SaveButton onClick={(e) => {
        handleSubmit({
          newIngredientName,
          newIngredientAmount,
          newIngredientMeasure
        });
        }}>Save</SaveButton>
      </form>
      </div >
  )

}

const SaveButton = styled.button`
  border: none;
  color: white;
  background-color: blue;
  border-radius: 3px;
  padding: 10px 20px 10px 20px;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`;

export default IngredientList;
