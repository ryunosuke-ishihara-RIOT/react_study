import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ value }) => {
  const [isOn, setIsOn] = useState(true);
  const handleChange = () => setIsOn(!isOn);
  return (
    <>
      <StyledContainer>
        <StyledButton onClick={handleChange}>{value}</StyledButton>
        {isOn ? <span>ON</span> : <span>OFF</span>}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  color: black;
`;
export default Toggle;
