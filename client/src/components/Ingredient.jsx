import React, { useState } from 'react';
import AccessAlarmsSharpIcon from '@material-ui/icons/AccessAlarmsSharp';
import BuildIcon from '@material-ui/icons/Build';
import SetTimeModal from './SetTimeModal.jsx';
import ManualUpdateModal from './ManualUpdateModal.jsx';
import styled from 'styled-components';

const Ingredient = ({ 
  ingredient, updateIngredientTimeLine, updateIngredientAmount, autoUseIngredient
}) => {
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);

  // autoUseIngredient(ingredient);

    return (
      <div>
        <span>
          {ingredient.name}: {ingredient.amount} {ingredient.measure}
          <Clock><AccessAlarmsSharpIcon color='primary' onClick={() => {
            setShowTimeModal(true);
          }}></AccessAlarmsSharpIcon></Clock>
          <Wrench><BuildIcon color='primary' onClick={() => {
            setShowManualModal(true);
          }}></BuildIcon></Wrench>
        </span>
        <SetTimeModal ingredient={ingredient} showTimeModal={showTimeModal} 
        setShowTimeModal={setShowTimeModal} updateIngredientTimeLine={updateIngredientTimeLine} />
        {showTimeModal ? <PageMask /> : null}
        <ManualUpdateModal showManualModal={showManualModal} setShowManualModal={setShowManualModal}
        ingredient={ingredient} updateIngredientAmount={updateIngredientAmount} />
        {showManualModal ? <PageMask /> : null}
      </div>
    );
};

const Clock = styled.button`
  cursor: pointer;
  background-color: white;
  padding: 0px;
  border: none;
`;

const Wrench = styled.button`
cursor: pointer;
background-color: white;
padding: 0px;
border: none;
`;

const PageMask = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default Ingredient;
