import React, { useState } from "react";
import styled from "styled-components";

export type Props = {
  value: string;
};

export const Toggle: React.FC<Props> = ({ value }) => {
  const [isSwitched, setIsSwitched] = useState<boolean>(true);

  return (
    <>
      <StyledContainer>
        <StyledButton onClick={() => setIsSwitched(!isSwitched)}>
          {value}
        </StyledButton>
        <span>{isSwitched ? "ON" : "OFF"}</span>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  color: black;
`;
