import React from "react";
import Post from "../components/Post";
import Text from "../elements/Text";
import post from "../redux/modules/post";
import { useSelector } from "react-redux";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
const PostDetail = (props) => {
  const post_list = useSelector((store) => store.post.list); // 인자 store 는 임의로 정해줘도된다 configureStore.js 에 rootreducer 안에 post 의 key:value 값을 가져오는데 이때 전체 데이터 이름은 정해진게 없기때문이다.
  const user_info = useSelector((store) => store.user);
    console.log(post_list);
  console.log(user_info.is_login);
  const params_uid = props.match.params.uid;
  const is_login = user_info.is_login;

  const post_idx = post_list.findIndex((p) => p.uid === params_uid); //findIndex 는 인자가 객체로 이루워진 배열일때 쓴다.
  const post = post_list[post_idx];
  React.useEffect(() => {

    if(post){
       return; 
    }
    // dispatch(postActions.getOnePostFB(id));
    
}, []);

  return (
    <React.Fragment>
      {post ? (
        is_login ? (
         <Grid padding="300px 300px"> <Post position detail {...post} is_me={post.userId === user_info.user.uid}></Post></Grid>
        ) : (
            <Grid padding="300px 300px"> <Post position detail {...post}></Post></Grid>
        )
      ) :null}
    </React.Fragment>
  );
};

export default PostDetail;
