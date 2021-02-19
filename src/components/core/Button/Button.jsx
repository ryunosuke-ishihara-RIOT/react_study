import React from "react";
import styled, { css } from "styled-components";

export const Button = ({ onClick, value, isDisabled }) => {
  return (
    <>
      <StyledButton isDisabled={isDisabled} onClick={onClick}>
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
