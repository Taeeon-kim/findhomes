import React from 'react';
import styled from "styled-components"

import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Text from '../elements/Text'
import Image from '../elements/Image'

import Post from '../components/Post'



const PostWrite = () =>{
    return(
        <>
        
        <Grid >
        < Grid is_flex width = '50%'>
        <Text bold size = '20px'>게시글 작성</Text>
            <Image/>
            </Grid>
            <Grid is flex >
            <input type = "file"/>
            </Grid>
        
        </Grid>
        </>



    )
}

export default PostWrite