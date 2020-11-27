import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ingredient from './Ingredient.jsx';
// import shelves from '../images/emptyshelves.png';

function IngredientList({ 
  availIngredients, saveNewIngredient, updateIngredientTimeLine, updateIngredientAmount, autoUseIngredient 
}) {
  const [newIngredientName, setNewIngredientName] = useState('');
  const [newIngredientAmount, setNewIngredientAmount] = useState(null);
  const [newIngredientMeasure, setNewIngredientMeasure] = useState('');

  const handleSubmit = (ingredient) => {
    saveNewIngredient(ingredient);
  };

  const handleNameChange = (e) => {
    setNewIngredientName(e.target.value);
    e.preventDefault();
  };

  const handleAmountChange = (e) => {
    setNewIngredientAmount(e.target.value);
    e.preventDefault();
  };

  const handleMeasureChange = (e) => {
    setNewIngredientMeasure(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <AvailableTitle>
      <h2>
      Current Ingredient Stock
      </h2>
      <ClockParagraph>
        <p>Click on clock to set usage timeframe, 
          or click on wrench to update ingredient count manually</p>
      </ClockParagraph>
      </AvailableTitle>
      <AvailableIngredientsWrapper>
      <ul>
        {availIngredients.map((ingredient, index) => (
          <Ingredient ingredient={ingredient} key={index} 
          updateIngredientTimeLine={updateIngredientTimeLine}
          updateIngredientAmount={updateIngredientAmount} 
          autoUseIngredient={autoUseIngredient}/>
        ))}
      </ul>
      </AvailableIngredientsWrapper>
          <form>
      <AddIngredientTitle>
        <h4>Add ingredient</h4>
      </AddIngredientTitle>
      <NewIngredientWrapper>
      <div>
        <p>Name</p>
        <TextInput name='name' onChange={handleNameChange}></TextInput>
      </div>
      <div>
        <p>Amount</p>
        <TextInput name='amount' onChange={handleAmountChange}></TextInput>
      </div>
      <div>
        <p>Measurement (if not applicable, input 'null')</p>
        <TextInput name='measure' placeholder='lbs., gallons, boxes, oz., etc.' 
        onChange={handleMeasureChange}></TextInput>
      </div>
      <SaveButton onClick={(e) => {
        handleSubmit({
          newIngredientName,
          newIngredientAmount,
          newIngredientMeasure
        });
      }}>Save</SaveButton>
      </NewIngredientWrapper>
      </form>
      </div >
  );
};

const ClockParagraph = styled.div`
  margin-left: 15px;
`;

const AddIngredientTitle = styled.div`
  margin-left: 50px;
`;

const AvailableTitle = styled.div`
  margin-left: 50px;
  margin-top: 30px;
`;

const AvailableIngredientsWrapper = styled.div`
  font-weight: 350px;
  padding-bottom: 75px;
  padding-right: 75px;
  padding-left: 75px;
  padding-top: 20px;
  font-size: 20px;
`;

const NewIngredientWrapper = styled.div`
  backgroun-color: grey;
  margin-left: 50px;
  border-radius: 15px;
  padding: 20px;
  z-radius: 10px;
`;

const TextInput = styled.input`
  height: 30px;
  width: 200px;
`;

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
