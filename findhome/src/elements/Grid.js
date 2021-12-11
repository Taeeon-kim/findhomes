import React from 'react';
import styled from "styled-components"

const Grid = (props) => {

    const {flot_box,is_fix,is_btn,border,flexDirection,flexWrap, justifyContent,is_flex, width, padding, margin, bg, children, _onClick} = props

    const styles = {
        is_flex:is_flex,
        width:width,
        margin: margin,
        padding: padding,
        bg:bg,
        justifyContent:justifyContent,
        flexWrap:flexWrap,
        flexDirection:flexDirection,
        border:border,
        is_btn:is_btn,
        is_fix:is_fix,
        flot_box:flot_box,
    }

    return (
        <>
        <GridBox {...styles} onClick={_onClick}>
        {children}
        </GridBox>
        </>
    )
}

Grid.defaultProps = {
    children:null,
    is_flex: false,
    width:"100%",
    padding: false,
    margin: false,
    bg: false,
    justifyContent: false,
    flexWrap: false,
    _onClick: ()=>{},
    flexDirection: false,
    border:false,
    is_btn:false,
    is_fix:false,
    flot_box: false,
}

const GridBox = styled.div`
width:${(props) => props.width};
height :"100%";
box-sizing: border-box; 
${(props) => (props.padding ? `padding:${props.padding};`:"")}
${(props) => (props.margin ? `margin:${props.margin};`:"")}
${(props) => (props.bg ? `background-color:${props.bg};`:"")}
${(props) => props.is_flex ? `display: flex; align-items: center;`:"" }
${(props =>props.justifyContent?`justify-content:${props.justifyContent};`:"")}
${(props =>props.flexWrap?`flex-wrap:${props.flexWrap};`:"")}
${(props =>props.flexDirection?`flex-direction:${props.flexDirection};`:"")}
${(props =>props.border?`border:${props.border};`:"")}
${(props =>props.is_btn?`float: left; background-color:#ccc;
border-radius:20px; box-shadow:3px 3px 3px black; transition-duration 0.3s; &:active{margin-left:15px; margin-top:15px; box-shadow:none;}` :"")}
${(props =>props.is_fix?` position: fixed; top: 0; width:100%;  z-index: 1;`:"")}
${(props =>props.flot_box?`border-radius:20px; box-shadow:3px 3px 3px black; `:"")}
`




export default Grid