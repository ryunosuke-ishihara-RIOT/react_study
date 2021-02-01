import React from "react";
import styled from "styled-components";

export const SubmitButton = ({ button }) => {
  return <StyledButton type="button" value="送信" onClick={button} />;
};

const StyledButton = styled.input`
  width: 200px;
`;
