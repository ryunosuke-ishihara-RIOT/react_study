import React, { useState } from "react";
import styled from "styled-components";

export const Toggle = ({ value }) => {
  const [isSwitched, setIsSwitched] = useState(true);

  return (
    <>
      <StyledContainer>
        <StyledButton onClick={() => setIsSwitched(!isSwitched)}>
          {value}
        </StyledButton>
        <span>{isSwitched ? "ON" : "OFF"}</span>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  color: black;
`;
