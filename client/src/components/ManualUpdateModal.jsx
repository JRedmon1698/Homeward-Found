import React, { useState } from 'react';
import styled from 'styled-components';

const ManualUpdateModal = ({
  showManualModal, setShowManualModal, ingredient, updateIngredientAmount
}) => {
  const [newIngredientAmount, setNewIngredientAmount] = useState(ingredient.amount);
  const [newIngredientMeasure, setNewIngredientMeasure] = useState(ingredient.measure);

  if (!showManualModal) {
    return null;
  }

  return (
    <div>
      <Modal>
        Update Available Ingredient Amount 
        <Amount placeholder={ingredient.amount} onChange={(e) => {
          setNewIngredientAmount(e.target.value);
        }}></Amount> <br/>
        Update Available Ingredient Measurement Type
        <Measurement placeholder={ingredient.measure} onChange={(e) => {
          setNewIngredientMeasure(e.target.value);
        }}></Measurement> <br/>
        <Save onClick={() => {
          updateIngredientAmount(ingredient._id, newIngredientAmount, newIngredientMeasure);
          setShowManualModal(false);
        }}>Save</Save> <Cancel onClick={() => {
          setShowManualModal(false);
        }}>Cancel</Cancel>
      </Modal>
    </div>
  );
}

const Measurement = styled.input`
  height: 15px;
  width: 100px;
  margin-left: 5px;
`;

const Amount = styled.input`
height: 15px;
width: 40px;
margin-left: 5px;
`;

const Save = styled.button`
  border-radius: 7px;
  background-color: green;
  cursor: pointer;
  margin-right: 2px;
`;

const Cancel = styled.button`
  border-radius: 7px;
  background-color: red;
  cursor: pointer;
  margin-left: 2px;
`;

const Modal = styled.div`
width: 600px;
height: 85px;
border-radius: 5px;
text-align: center;
margin: auto;
display: table;
position: relative;
left: 0;
right:0;
top: 15%; 
background: white;
border: 4px solid;
tansition: 3s ease-out;
filter: blur(0);
transform: scale(1);
opacity: 5;
visibility: visible;
z-index: 10;
`;

export default ManualUpdateModal;
