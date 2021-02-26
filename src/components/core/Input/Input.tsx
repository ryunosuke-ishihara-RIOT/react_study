import React from "react";
import styled from "styled-components";

export type Props = {
  type: string;
  placeholder: string;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({ type, placeholder, onClick }) => {
  console.log();
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onClick} />
  );
};

const StyledInput = styled.input`
  width: 240px;
  height: 24px;
`;
