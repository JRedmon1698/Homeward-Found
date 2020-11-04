import React, { useState } from 'react';
import AccessAlarmsSharpIcon from '@material-ui/icons/AccessAlarmsSharp';
import SetTimeModal from './SetTimeModal.jsx';
import styled from 'styled-components';

const Ingredient = ({ ingredient }) => {
  const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <span>
          {ingredient.name}: {ingredient.amount} {ingredient.measure}
          <AccessAlarmsSharpIcon color='primary' onClick={() => {
            setShowModal(true);
          }}></AccessAlarmsSharpIcon>
        </span>
        <SetTimeModal ingredient={ingredient} showModal={showModal} 
        setShowModal={setShowModal} />
        {showModal ? <PageMask /> : null}
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
