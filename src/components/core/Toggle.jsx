import React,{useState} from "react";
import Styled from "styled-components"

const Toggle =(props) =>{
    const[state,setState] = useState(props);
    const{type,value} = state;

    return (<>
    <StyledButton type={type}>{value}</StyledButton>
    <span>ON</span>
    </>)
}

const StyledButton = Styled.button
`color:red`;
export default Toggle;