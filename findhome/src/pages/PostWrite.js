import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Image from "../elements/Image";

const PostWrite = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list)
  const post_id = props.match.params.uid;
  const is_edit = post_id ? true : false;
  console.log(post_id)
  let _post = is_edit ? post_list.find((p) => p.uid === post_id) : null;
  console.log(_post)
  const [content, setContents] = React.useState(_post?_post.content:"");
  const [title, setTitle] = React.useState(_post?_post.title:"");
  const [area, setArea] = React.useState(_post?_post.area:"");
  console.log(content, title, area)
  const textTitle = (e) => {
    setTitle(e.target.value);
  };
  const textContents = (e) => {
    setContents(e.target.value);
  };
  const textArea = (e) => {
    setArea(e.target.value);
    console.log(e.target.value);
  };
  
//   React.useEffect(() => {
//     if (is_edit && !_post) {
//       console.log("포스트 정보가 없어요.");
//       history.push("/");
//     }

//     if(is_edit){
//         dispatch(imageActions.setPreview(_post.image_url));
//            }
//   }, []);

  const addPost = () => {
   
    dispatch(postActions.addPostDB(title, content, area));
  };
  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          잠시만요!
        </Text>
        <Text size="16px">로그인후에만 글 쓰기 가능</Text>
        <Button
          _onClick={() => {
            history.replace("/sign-in");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }
  return (
    <>
      <Grid  padding = "200px"is_flex flexDirection="column">
        <Grid flot_box
          is_flex
          flexDirection="column"
          border="1px solid black"
          width="80%"
          margin="5% 70% 1% 70%"
          padding="1%"
        >
          <Grid is_flex width="46%">
            <UploadInput type="file" />
          </Grid>
          <Grid is_flex flex flexDirection="column" width="50%">
            <Grid is_flex margin="0px 0px 1% 10%">
              <Text bold>미리보기</Text>
            </Grid>
            <Image />
          </Grid>
          <Grid is flex width="45%" margin="0% 5%">
          
            <Text bold size="25px">
              area
            </Text>
            <Input value={area}  _onChange={textArea} width="20%"></Input>
            <Text bold size="25px">
              title
            </Text>
            <Input value={title}  _onChange={textTitle} width="100%"></Input>
            <Text bold size="25px">
              content
            </Text>
            <Input multiLine value={content}  _onChange={textContents}></Input>
          </Grid>
        </Grid>
        <Grid is_flex justifyContent="center">
          <Button width="7%" margin="15px 5%" height="65px" _onClick={addPost}>
            <Text size="20px" color="white">
              게시글 등록
            </Text>
          </Button>
          <Button width="7%" margin="15px 5%" height="65px" _onClick={()=>history.push('/')}> 
            <Text size="20px" color="white">
              취소하기
            </Text>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const UploadInput = styled.input`
  width: 100%;
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  font-size: 25px;
`;

export default PostWrite;
