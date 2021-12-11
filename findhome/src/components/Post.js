import React from 'react';
import styled from "styled-components"

import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Text from '../elements/Text'
import Image from '../elements/Image';
import {history} from '../redux/configureStore'
import {useDispatch} from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/user';
const Post = (props) => {
    const dispatch = useDispatch();
    return(
        <>
        <Grid margin = "2% 1%" >
            <Grid is_flex justifyContent='space-between' width = '100%' >
                <Text size = '120%' margin = '0% 5%'>{props.user_name}</Text>
                <Text size = '120%' margin = '0% 5%'>{props.post_date}</Text>
                {props.is_me && <Button padding="4px" width="auto" margin="4px" _onClick={()=>{
                        history.push(`/write/${props.uid}`)
                    }}>수정</Button> }
                    {props.is_me && <Button padding="4px" width="auto" margin="4px" _onClick={()=>{
                       dispatch(postActions.deleteDB(props.uid))
                    }}>삭제</Button> }
            </Grid>
            <Grid> 
                <Grid width = "auto" is_flex justifyContent='center'>
                    <Image src = {props.img_url}/>
                </Grid>
                <Grid is_flex width = 'auto' >
                    <Text size = '200%' margin = '5%'>{props.content}</Text>

                </Grid>
                <Grid is_flex padding = '1% 5%'>
                    <Text size = '20px'>{`댓글 ${props.comment_cnt}개`} </Text>
                </Grid>
            </Grid>
        </Grid>
        </>

    )
}

Post.defaultProps = {
    
        user_name:"작성자",
        content:"간단한 소개글입니다.",
        img_url: "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
        post_date:"2021-11-29 11:00:00",
        comment_cnt: 10,
        is_me:false,




}

export default Post;