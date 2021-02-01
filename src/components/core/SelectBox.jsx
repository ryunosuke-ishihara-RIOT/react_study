import React from "react";
import styled from "styled-components";

export const SelectBox = ({ selectedValue, optionList, selectBox }) => {
  return (
    <>
      <StyledContainer>
        <StyledSelect onClick={selectBox.handleChange}>
          {selectedValue.name}
        </StyledSelect>
        {selectBox.isOpen && (
          <StyledLists>
            {optionList.map((optionList) => (
              <Styleditem
                key={optionList.id}
                onClick={() => {
                  selectBox.handleOnClickChange(optionList.id, optionList.name);
                }}
              >
                {optionList.name}
              </Styleditem>
            ))}
          </StyledLists>
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.div`
  border: 0.1mm solid rgba(0, 0, 0, 0.5);
  width: 253px;
  height: 28px;
  margin: auto;
`;

const StyledLists = styled.ul`
  padding: 0;
  margin: 10px auto;
  background-color: rgba(0, 100, 100, 1);
  z-index: 10;
`;

const Styleditem = styled.li`
  border: 0.1mm solid rgba(0, 0, 0, 0.5);
  list-style: none;
  width: 253px;
  height: 28px;
  padding: 0;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }

  & + li {
    border-top: none;
  }
`;
