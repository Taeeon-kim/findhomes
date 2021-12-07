import { noConflict } from 'lodash';
import { normalizeUnits } from 'moment';
import React from 'react';
import styled from "styled-components"

const Button = (props) => {
    const {width,height,text, margin,children, _onClick, bg, color, border} = props
    const styles = {width,height,text, margin, bg, color, border}
    return(
        <>
        <BtnBox  
        {...styles}
        onClick = {_onClick}>
        {text?text:children}</BtnBox>
        </>

    )
}

Button.defaultProps = {
        _onClick :() => {},
        margin: false,
        text: false,
        children: null,
        width: null,
        height: "",
        bg : "#444444",
        color: "ffffff",
        border: false, 

}

const BtnBox = styled.button`
width: ${(props) => props.width};
${(props) =>(props.margin ?`margin:${props.margin};`:"")}
${(props) =>(props.width?`width:${props.width};`:"") }
${(props) =>(props.height?`height:${props.height};`:"") }
/* border : 1px solid block; */
${(props) =>(props.border?`border : 1px solid #000000;`:`border : none;`) }
background-color: ${(props) => props.bg};
color: ${(props) => props.color};
`
export default Button

