import React,{useState} from "react";
import styled,{css} from "styled-components";

const Modal =(props)=>{
    const [state,setState] = useState(props);
    const {value,text} = state;
    const [isOn,setIsOn] = useState(true);
    const handleOpen = ()=> setIsOn(false);
    const handleClose = () => setIsOn(true);
    return <>
    <button onClick={handleOpen}>{value}</button>
    {isOn ? (
        isOn
      ) : (
        <StyledDiv1>
          <StyledDiv2>
            <p>{text}</p>
            <button onClick={handleClose}>close</button>
          </StyledDiv2>
        </StyledDiv1>
      )}

    </>
}

const StyledDiv1 = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    align-items:center;
    justify-content:center;
`;
const StyledDiv2 = styled.div`
    width:50%;
    padding:5em;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default Modal;