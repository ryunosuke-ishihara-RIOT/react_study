import React from "react";
import styled from "styled-components";

export type Props = {
  isOpen: boolean;
  OPTION_NAME_LIST: {
    id: string;
    name: string;
  }[];
  selectedValue: {
    id: string;
    name: string;
  };
  handleChange: () => void;
  onItemBtn: (key: string, value: string) => void;
};

export const SelectBox: React.FC<Props> = ({
  isOpen,
  OPTION_NAME_LIST,
  selectedValue,
  handleChange,
  onItemBtn,
}) => {
  return (
    <>
      <StyledSelect onClick={handleChange}>{selectedValue.name}</StyledSelect>
      {isOpen && (
        <StyledLists>
          {OPTION_NAME_LIST.map((OPTION_NAME_LIST, id) => (
            <StyledItem
              key={id}
              onClick={() => {
                onItemBtn(OPTION_NAME_LIST.id, OPTION_NAME_LIST.name);
              }}
            >
              <span>{OPTION_NAME_LIST.name}</span>
            </StyledItem>
          ))}
        </StyledLists>
      )}
    </>
  );
};

const StyledSelect = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
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
  border: 1px solid rgba(0, 0, 0, 0.5);
  list-style-type: none;
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
