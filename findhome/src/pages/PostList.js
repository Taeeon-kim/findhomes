import React from 'react';
import styled from "styled-components"

import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Text from '../elements/Text'

import Post from '../components/Post'

const PostList = () => {
    return(
        <>
        <Grid is_flex margin = '0px' >
        <Post/>
        <Post/>
        <Post/>    
        </Grid>
        </>

    )

}

export default PostList
