// 外部モジュール
import React, { useState } from "react";
import styled from "styled-components";

//画面固有import
import { CheckBox } from "../core/CheckBox/CheckBox";
import { TextInput } from "../core/TextInput/TextInput";
import { Toggle } from "../core/Toggle/Toggle";

type Props = {
  value: string;
  text: string;
};

export const DenselyJoined: React.FC<Props> = ({ value, text }) => {
  const [isSwitched, setIsSwitched] = useState<boolean>(true);
  const [checkId, setCheckId] = useState<string>("");
  const data = [
    { id: "1", sex: "men" },
    { id: "2", sex: "woman" },
  ];

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
              {data.map((item) => {
                return (
                  <CheckBox
                    key={item.id}
                    value={item.sex === "men" ? "男" : "女"}
                    changeId={() => setCheckId(item.id)}
                    isChecked={item.id === checkId}
                  />
                );
              })}
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
  height: 48px;
  position: relative;
`;

const StyledText = styled.p`
  color: red;
  text-align: center;
  margin: 0;
`;

const StyledButton = styled.button`
  position: absolute;
  left: 64px;
  top: 24px;
`;
