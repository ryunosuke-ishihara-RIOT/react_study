import React, { useState } from "react";
import styled from "styled-components";

const TextInput = ({ value }) => {
  const [name, setName] = useState({ value: "" });

  return (
    <>
      <StyledContainer>
        <span>{value}：</span>
        <input
          value={name.value}
          onChange={(e) => setName({ value: e.target.value })}
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

export default TextInput;
