import React, { useState } from "react";
import styled from "styled-components";

export const Modal = ({ value, text }) => {
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <>
      <button onClick={() => setIsSwitched(!isSwitched)}>{value}</button>
      {isSwitched && (
        <StyledContainer>
          <StyledItem>
            <p>{text}</p>
            <button onClick={() => setIsSwitched(!isSwitched)}>close</button>
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
