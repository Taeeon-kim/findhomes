import React from 'react'
import styled from "styled-components"

const Image = (props) => {
    const {src, size} = props

    const styles = { // style끼리 구분하는게 편해서
        src : src,
        size: size,
    }

        return(
            <>
            <OutBox>
              <InBox {...styles}/>  
            </OutBox>
            </>

        )
    }

Image.defaultProps = {
    shape : "rectangle",
    src: "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
    size : 40,
}

const OutBox = styled.div`
    width: 100%;
    min-width: 250px;
`
const InBox= styled.div`
position: relative; // 상대적인 포지션션
padding-top: 75%; // 75%를 주는 이유는 넓이가 100%이기 때문에 4:3비율을 맟추기 위해
overflow: hidden; // 이 박스 영역을 벗어나면 숨겨버린다.
background-image : url("${(props) => props.src}");
background-size: cover ;
`



export default Image
