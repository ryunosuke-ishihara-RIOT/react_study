import React from "react";
import styled, { css } from "styled-components";

export const Button = ({ value, ...props }) => {
  return <StyledButton {...props}>{value}</StyledButton>;
};

const StyledButton = styled.button`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;
