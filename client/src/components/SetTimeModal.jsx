import React from 'react';
import styled from 'styled-components';

const SetTimeModal = ({ ingredient, showModal, setShowModal }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div>
      <Modal>
      I use <Quantity></Quantity> {ingredient.name} every <Quantity></Quantity> <Time></Time>.
      <Example>
        Example: I use 4 {ingredient.name} every 1 week.
        </Example>
      </Modal>
    </div>
  );
}

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