import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../core/CheckBox";
import TextInput from "../core/TextInput";
import Toggle from "../core/Toggle";

const DenselyJoined = ({ value, text }) => {
  const [isSwitched, setIsSwitched] = useState(true);

  return (
    <>
      <button onClick={() => setIsSwitched(!isSwitched)}>{value}</button>
      {isSwitched ? (
        isSwitched
      ) : (
        <StyledContainer>
          <StyledContent>
            <TextInput value="名前" />
            <StyledWrapper>
              <CheckBox type="checkbox" sex="men" value="男" />
              <CheckBox type="checkbox" sex="women" value="女" />
            </StyledWrapper>
            <Toggle value="Toggle Button" />
            <StyledItem>
              <StyledText>{text}</StyledText>
              <StyledButton onClick={() => setIsSwitched(!isSwitched)}>
                CLOSE
              </StyledButton>
            </StyledItem>
          </StyledContent>
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  background-color: white;
  display: flex;
  padding: 5px;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledItem = styled.div`
  background-color: white;
  height: 50px;
  position: relative;
`;

const StyledText = styled.p`
  color: red;
  text-align: center;
  margin: 0;
`;

const StyledButton = styled.button`
  position: absolute;
  left: 60px;
  top: 25px;
`;
export default DenselyJoined;
