import React from "react";
import styled from "styled-components";

export const Input = ({ type, placeholder }) => {
  return (
    <>
      <StyledInput type={type} placeholder={placeholder} />
    </>
  );
};

const StyledInput = styled.input`
  width: 240px;
  height: 24px;
`;
