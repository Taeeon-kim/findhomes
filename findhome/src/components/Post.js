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
        <Grid margin = "2% 0%" bg = 'gray'width ="33%">
            <Grid is_flex justifyContent='space-between' width = '100%' >
                <Text size = '120%' margin = '0% 5%'>작성자</Text>
                <Text size = '120%' margin = '0% 5%'>게시글 날짜</Text>
            </Grid>
            <Grid> 
                <Grid width = "auto" is_flex justifyContent='center'>
                    <Image></Image>
                </Grid>
                <Grid is_flex width = 'auto' >
                    <Text size = '200%' margin = '5%'>간단한 소개글입니다.</Text>

                </Grid>
                <Grid is_flex padding = '3% 5%'>
                    <Text size = '120%'>댓글 수</Text>
                </Grid>
            </Grid>
        </Grid>
        </>

    )
}

export default Post