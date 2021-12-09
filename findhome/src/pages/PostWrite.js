import React from 'react';
import styled from "styled-components"
import { history } from "../redux/configureStore";

import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Text from '../elements/Text'
import Image from '../elements/Image'

import Post from '../components/Post'



const PostWrite = () =>{
    return(
        <>
        <Grid is_flex  flexDirection = "column"> 
            <Grid is_flex  flexDirection = "column" border = "3px solid black" width = "80%" margin = "5% 70% 1% 70%"padding = "3%">
        <Grid is_flex  width = '45%'>
            <input type = "file" />
            </Grid>
            <Grid is_flex flex flexDirection = "column" width = "50%">
            <Grid is_flex margin = "0px 0px 1% 10%">
            <Text bold>미리보기</Text>
            </Grid>
            <Image/>
            </Grid>
            <Grid is flex width = "45%"  margin = "0% 5%">
            <Text bold>집 소개글</Text>
            <TextArea rows = {5} ></TextArea> 
            </Grid>
            </Grid>
            <Grid is_flex justifyContent = "center">
            <Button width = "7%"  
            margin = "15px 5%" 
            height = "65px"
            _onClick ={ () =>{history.replace('/')}}
             ><Text size = "20px" color = "white" >게시글 등록</Text>
             </Button>
            <Button width = "7%"  
            margin = "15px 5%" 
            height = "65px"  
            ><Text size = "20px" color = "white">취소하기</Text>
            </Button>
            </Grid>
            </Grid>
    
        </>



    )
}

const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    font-size: 25px;
`

export default PostWrite