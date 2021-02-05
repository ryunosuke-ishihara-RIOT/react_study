import React from "react";
import styled from "styled-components";

export const SubmitButton = ({ handleLog }) => {
  return <StyledButton onClick={handleLog}>ボタン</StyledButton>;
};

const StyledButton = styled.button`
  width: 200px;
  margin-top: 12px;
`;
