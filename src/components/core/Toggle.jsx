import React,{useState} from "react";
import styled from "styled-components"

const Toggle =(props) =>{
    const [state,setState] = useState(props);
    const {type,value} = state;
    const [isOn,isSetOn] = useState(true);
    const handleChange = () =>setOn(!isOn);

    return (
    <>
        <StyledButton type={type} onClick={handleChange}>{value}</StyledButton>
        {isOn ? <span>ON</span>:<span>OFF</span>}
    </>)
}

const StyledButton = styled.button
`color:red`;
export default Toggle;