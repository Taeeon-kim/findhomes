import React from "react";
import styled   from "styled-components";
import Text from "./Text";
import Grid from "./Grid";

const Input = (props) => {
    const {type, value, placeholder, label, _onChange, width} =props;   //InputSome 태그안에 {...props}라고 해도되는데 하다보면 props 에 InputSome에 들어가지않고 다른곳에서 쓰일수도있다. 따라서 필요없는걸 넣어줄필요없는데 다들어가게됨으로 그걸방하기위해 props안에있는걸 필요한거만 InputSome에 넣어줄것
    return(
        <React.Fragment>
            <Grid>
            {label&&<Text>{label}</Text>}
            <InputSome type={type} value={value} placeholder={placeholder} onChange={_onChange} width={width}></InputSome> 
            </Grid>
        </React.Fragment>
    )
} 

Input.defaultProps = {
    type: "text",
    value: undefined,
    placeholder: "입력해주세요.",
    label : null, 
    _onChange : () => {},
    width : null,
    
}

const InputSome = styled.input`
  border: 1px solid #212121;
  box-sizing: border-box;
  width: ${(props)=>props.width}
`;


export default Input;