import React from "react";
import styled from "styled-components";

export const SelectBox = ({ selectedValue, optionList, selectBox }) => {
  return (
    <>
      <StyledSelect onClick={selectBox.handleChange}>
        {selectedValue.name}
      </StyledSelect>
      {selectBox.isOpen && (
        <StyledLists>
          {optionList.map((optionList, idx) => (
            <StyledItem
              key={idx}
              onClick={() => {
                selectBox.handleOnClickChange(optionList.id, optionList.name);
              }}
            >
              <span>{optionList.name}</span>
            </StyledItem>
          ))}
        </StyledLists>
      )}
    </>
  );
};

const StyledSelect = styled.div`
  border: 0.1mm solid rgba(0, 0, 0, 0.5);
  width: 240px;
  height: 24px;
`;

const StyledLists = styled.ul`
  position: absolute;
  padding: 0;
  margin: 12px auto;
  background-color: #62ffff;
`;

const StyledItem = styled.li`
  border: 0.1mm solid rgba(0, 0, 0, 0.5);
  list-style: none;
  width: 240px;
  height: 24px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }

  & + li {
    border-top: none;
  }
`;
