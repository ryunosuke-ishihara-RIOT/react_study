import { Input } from "../core/Input";
import { SelectBox } from "../core/SelectBox";
import { SubmitButton } from "../core/SubmitButton";
import { useInput } from "../hooks/useInput";
import { useSelectBox } from "../hooks/useSelectBox";
import { useSubmitButton } from "../hooks/useSubmitButton";
import React from "react";
import styled from "styled-components";

export const PresentationalContainer = () => {
  const { text, handelChange } = useInput();
  const {
    selectedValue,
    isOpen,
    handleChange,
    handleOnClickChange,
  } = useSelectBox();

  const { handleExhale } = useSubmitButton();
  const data = [
    { type: "text", placeholder: "名前" },
    {
      type: "number",
      placeholder: "年齢",
    },
  ];

  const optionList = [
    { id: 1, name: "石原" },
    { id: 2, name: "木村" },
    { id: 3, name: "村山" },
    { id: 4, name: "下野" },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <StyledContainer>
            <Input
              type={item.type}
              placeholder={item.placeholder}
              pattern={item.pattern}
              TextInput={{ text, handelChange }}
            />
          </StyledContainer>
        );
      })}

      <SelectBox
        optionList={optionList}
        selectedValue={selectedValue}
        selectBox={{
          isOpen,
          handleChange,
          handleOnClickChange,
        }}
      />

      <StyleButton>
        <SubmitButton button={handleExhale} />
      </StyleButton>
    </>
  );
};

const StyledContainer = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const StyleButton = styled.div`
  position: absolute;
  top: 20%;
  left: 32%;
`;
