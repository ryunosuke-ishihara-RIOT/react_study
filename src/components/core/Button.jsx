import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  const [state, setState] = useState(props);
  const { value, isDisabled } = state;
  const handleAlert = () => window.alert("木村うんこ");

  return (
    <>
      <StyledButton isDisabled={isDisabled} onClick={handleAlert}>
        {value}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;

export default Button;
