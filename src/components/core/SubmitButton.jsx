import React from "react";
import styled from "styled-components";

export const SubmitButton = ({ button }) => {
  return (
    <StyledButton type="button" onClick={button}>
      ボタン
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 200px;
  margin-top: 12px;
`;
