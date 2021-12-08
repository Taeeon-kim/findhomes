import React from 'react';
import styled from "styled-components"
import {useSelector,useDispatch} from "react-redux"

import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Text from '../elements/Text'

import Post from '../components/Post'

const PostList = () => {
    const dispatch = useDispatch()
    // const postList = useSelector((state) => state.post.list) // state는 리덕스 스토어의 전체 데이터
    // console.log(postList)
    return(
        <>
        <Grid is_flex margin = '0px' flexWrap = 'wrap'>
            {/* {postList.map((p,idx) => {
                return <Post key = {p.id} {...p}/> // map을 돌려줌으로 key값 필요
                // {...p}에는 게시글의 모든 정보가 들어감
            })}  */}
        

        </Grid>
        </>

    )

}

export default PostList
