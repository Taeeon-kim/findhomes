import React from 'react';
import styled from "styled-components"

const Grid = (props) => {

    const {border,flexDirection,flexWrap, justifyContent,is_flex, width, padding, margin, bg, children, _onClick} = props

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
`


export default Grid