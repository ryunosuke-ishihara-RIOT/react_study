import React from "react";
import styled from "styled-components";

export const Input = ({ type, placeholder, onClick }) => {
  console.log();
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onClick} />
  );
};

const StyledInput = styled.input`
  width: 240px;
  height: 24px;
`;
