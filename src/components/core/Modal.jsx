import React, { useState } from "react";
import styled, { css } from "styled-components";

const Modal = (props) => {
  const [state, setState] = useState(props);
  const { value, text } = state;
  const [isOn, setIsOn] = useState(true);
  const handleOpen = () => setIsOn(false);
  const handleClose = () => setIsOn(true);
  return (
    <>
      <button onClick={handleOpen}>{value}</button>
      {isOn ? (
        isOn
      ) : (
        <StyledContainer>
          <StyledItem>
            <p>{text}</p>
            <button onClick={handleClose}>close</button>
          </StyledItem>
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledItem = styled.div`
  width: 50%;
  padding: 5em;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Modal;
