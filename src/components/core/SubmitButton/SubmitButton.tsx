import React from "react";
import styled from "styled-components";

export type Props = { handleLog: () => void };

export const SubmitButton: React.FC<Props> = ({ handleLog }) => {
  return <StyledButton onClick={handleLog}>ボタン</StyledButton>;
};

const StyledButton = styled.button`
  width: 200px;
  margin-top: 12px;
`;
