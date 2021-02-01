import React from "react";
import styled from "styled-components";

export const Input = ({ type, placeholder, TextInput }) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={TextInput.handleChange}
      />
    </>
  );
};

const StyledInput = styled.input`
  width: 250px;
  height: 25px;
`;
