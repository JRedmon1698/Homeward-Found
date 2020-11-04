import React, { useState } from 'react';
import styled from 'styled-components';

const ManualUpdateModal = ({
  showManualModal, setshowManualModal, ingredient
}) => {
  if (!showManualModal) {
    return null;
  }
  return (
    <div>
      <Modal>
        manual
        <Save>Save</Save> <Cancel>Cancel</Cancel>
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

const Modal = styled.div`
width: 300px;
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

export default ManualUpdateModal;
