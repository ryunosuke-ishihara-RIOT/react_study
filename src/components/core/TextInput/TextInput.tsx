import React, { useState } from "react";
import styled from "styled-components";

export type Props = {
  value: string;
};

export const TextInput: React.FC<Props> = ({ value }) => {
  const [name, setName] = useState<{ value: string }>({ value: "" });

  return (
    <>
      <StyledContainer>
        <span>{value}：</span>
        <input
          value={name.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName({ value: e.target.value })
          }
        />
      </StyledContainer>
      <StyledText>私の名前は{name.value}です</StyledText>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

const StyledText = styled.span`
  margin: auto;
`;
