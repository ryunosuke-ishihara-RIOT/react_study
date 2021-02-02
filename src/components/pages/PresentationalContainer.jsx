import { Input } from "../core/Input";
import { SelectBox } from "../core/SelectBox";
import { SubmitButton } from "../core/SubmitButton";
import { useSelectBox } from "../hooks/useSelectBox";
import { useSubmitButton } from "../hooks/useSubmitButton";
import React from "react";
import styled from "styled-components";

export const PresentationalContainer = () => {
  const {
    selectedValue,
    isOpen,
    handleChange,
    handleOnClickChange,
  } = useSelectBox();

  const { handleLog } = useSubmitButton();

  const data = [
    { id: "1", type: "text", placeholder: "名前" },
    { id: "2", type: "number", placeholder: "年齢" },
  ];

  const optionList = [
    { id: "1", name: "石原" },
    { id: "2", name: "木村" },
    { id: "3", name: "村山" },
    { id: "4", name: "下野" },
  ];
  return (
    <StyledAllContainer>
      {data.map(({ id, type, placeholder }) => (
        <div key={id}>
          <Input type={type} placeholder={placeholder} />
        </div>
      ))}

      <StyledSelectBox>
        <SelectBox
          optionList={optionList}
          selectedValue={selectedValue}
          selectBox={{
            isOpen = {isOpen},
            handleChange= {handleChange},
            handleOnClickChange={handleOnClickChange}
          }}
        />
      </StyledSelectBox>
      <SubmitButton button={handleLog}>ボタン</SubmitButton>
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
