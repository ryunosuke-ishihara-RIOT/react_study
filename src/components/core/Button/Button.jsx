import React from "react";
import styled, { css } from "styled-components";

export const Button = ({ value, isDisabled, onClick }) => {
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
