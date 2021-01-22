import React, { useState } from "react";
import styled from "styled-components";

const TextInput = ({ value }) => {
  const [name, setName] = useState({ name: "" });
  const handleChange = (e) => setName({ name: e.target.value });

  return (
    <>
      <StyledContainer>
        <span>{value}：</span>
        <input value={name.name} onChange={handleChange} />
      </StyledContainer>
      <Styledspan>私の名前は{name.name}です</Styledspan>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

const Styledspan = styled.span`
  margin: auto;
`;

export default TextInput;
