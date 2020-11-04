import React, { useState } from 'react';
import AccessAlarmsSharpIcon from '@material-ui/icons/AccessAlarmsSharp';
import BuildIcon from '@material-ui/icons/Build';
import SetTimeModal from './SetTimeModal.jsx';
import styled from 'styled-components';

const Ingredient = ({ ingredient, updateIngredientTimeLine }) => {
  const [showTimeModal, setShowTimeModal] = useState(false);

    return (
      <div>
        <span>
          {ingredient.name}: {ingredient.amount} {ingredient.measure}
          <AccessAlarmsSharpIcon color='primary' onClick={() => {
            setShowTimeModal(true);
          }}></AccessAlarmsSharpIcon>
          <BuildIcon color='primary' onClick={() => {

          }}></BuildIcon>
        </span>
        <SetTimeModal ingredient={ingredient} showTimeModal={showTimeModal} 
        setShowTimeModal={setShowTimeModal} updateIngredientTimeLine={updateIngredientTimeLine} />
        {showTimeModal ? <PageMask /> : null}
      </div>
    )
}

const PageMask = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default Ingredient;
