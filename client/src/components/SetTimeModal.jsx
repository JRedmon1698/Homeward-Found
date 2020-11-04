import React, { useState } from 'react';
import styled from 'styled-components';

const SetTimeModal = ({ 
  ingredient, showTimeModal, setShowTimeModal, updateIngredientTimeLine 
}) => {
  const [ingredientNumber, setIngredientNumber] = useState(null);
  const [newQualifier, setNewQualifier] = useState(null);
  const [newAmount, setNewAmount] = useState(null);

  if (!showTimeModal) {
    return null;
  }
  return (
    <div>
      <Modal>
      I use <Quantity onChange={(e) => {
        setIngredientNumber(e.target.value);
      }}></Quantity> {ingredient.name} {ingredient.measure} every <Quantity onChange={(e) => {
        setNewAmount(e.target.value);
      }}></Quantity> <Time onChange={(e) => {
        setNewQualifier(e.target.value);
      }}></Time>.
      <Example>
        Example: I use 4 {ingredient.name} {ingredient.measure} every 1 week.
        </Example>
        <Save onClick={() => {
          updateIngredientTimeLine(ingredient._id, newQualifier, newAmount);
          setShowTimeModal(false);
        }}>Save</Save> <Cancel onClick={() => {
          setShowTimeModal(false);
        }}>Cancel</Cancel>
      </Modal>
    </div>
  );
}

const Save = styled.button`
  border-radius: 7px;
  background-color: green;
  cursor: pointer;
`;

const Cancel = styled.button`
  border-radius: 7px;
  background-color: red;
  cursor: pointer;
`;

const Example = styled.div`
  font-style: italic;
  font-size: 16px;
  text-align: center;
`;

const Quantity = styled.input`
  width: 20px;
  height: 15px;
  margin-right: 5px;
`;

const Time = styled.input`
  width: 100px;
  height: 15px;
`;

const Modal = styled.div`
width: 500px;
height: 50px;
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

export default SetTimeModal;