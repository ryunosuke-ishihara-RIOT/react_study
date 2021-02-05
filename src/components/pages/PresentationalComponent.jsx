import React from "react";
import styled from "styled-components";

import { Input } from "../core/Input";
import { SelectBox } from "../core/SelectBox";
import { SubmitButton } from "../core/SubmitButton";
import { useSelectBox } from "../hooks/useSelectBox";
import { useSubmitButton } from "../hooks/useSubmitButton";
import { useInput } from "../hooks/useInput";

export const PresentationalComponent = () => {
  return (
    <StyledAllContainer>
      {useInput().INPUT_TAG_DATA.map(({ id, type, placeholder }) => (
        <div key={id}>
          <Input type={type} placeholder={placeholder} />
        </div>
      ))}

      <StyledSelectBox>
        <SelectBox {...useSelectBox()} />
      </StyledSelectBox>
      <SubmitButton {...useSubmitButton()}>ボタン</SubmitButton>
    </StyledAllContainer>
  );
};

const StyledAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSelectBox = styled.div`
  position: relative;
  z-index: 10000;
`;
