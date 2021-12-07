import React from 'react';
import styled from "styled-components"

import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Text from '../elements/Text'
import Image from '../elements/Image';

const Post = () => {
    return(
        <>
        <Grid margin = "50px 50px" bg = 'gray'width ="33%">
            <Grid margin = '0px'is_flex justifyContent='space-between' width = '100%' >
                <Text size = '20px' margin = '3px 5%'>작성자</Text>
                <Text size = '20px' margin = '3px 5%'>게시글 날짜</Text>
            </Grid>
            <Grid> 
                <Grid width = "auto" is_flex justifyContent='center'>
                    <Image></Image>
                </Grid>
                <Grid is_flex width = 'auto' >
                    <Text size = '25px' margin = '20px'>간단한 소개글입니다.</Text>

                </Grid>
                <Grid is_flex padding = '20px'>
                    <Text size = '20px'>댓글 수</Text>
                </Grid>
            </Grid>
        </Grid>
        </>

    )
}

export default Post