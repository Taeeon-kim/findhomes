import React from 'react';
import styled from "styled-components"

const Button = (props) => {
    const {width,height,text, margin,children, _onClick} = props

    return(
        <>
        <BtnBox  
        width = {width}
        height = {height}
        margin = {margin} 
        onClick = {_onClick}>
        {text?text:children}</BtnBox>
        </>

    )
}

Button.defaultProps = {
        _onClick :() => {},
        margin: 'false',
        text: 'false',
        children: null,
        width: 'false',
        height: 'false',

}

const BtnBox = styled.button`
width: 100%;
${(props) =>(props.margin ?`margin:${props.margin};`:"")}
${(props) =>(props.width?`width:${props.width};`:"") }
${(props) =>(props.height?`height:${props.height};`:"") }
border : none;
`
export default Button

