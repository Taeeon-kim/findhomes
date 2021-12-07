import React from "react";
import styled from "styled-components";


const Text = (props) => {

const {children, size, color, bold, margin, width} = props;
 const styles = {size, color, bold, margin, width}
    return (
        <React.Fragment>
            <P {...styles}>{children}</P>
        </React.Fragment>
    )
}

Text.defaultProps ={
 size : null ,
 bold : false, 
 color : "#000000",
 margin : null,
 width : null,
}

const P = styled.p`
    ${(props)=>(props.bold? `font-weight: 700;`: `font-weight: 400;`)};
    ${(props)=>(`color : ${props.color};`)};
    ${(props)=> (`font-size: ${props.size};`)};
    ${(props)=>(`margin : ${props.margin};`)};
    ${(props)=>(`width : ${props.width};`)};
`;


export default Text;