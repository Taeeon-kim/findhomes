import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Image from "../elements/Image";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");

  const texTtitle = (e) => {
    setTitle(e.target.value);
  };
  const textContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    // let post = {
    //     title:title,
    //     contents:contents
    // }
    // console.log()
    dispatch(postActions.addPosthc(title, contents));
  };

  return (
    <>
      <Grid is_flex flexDirection="column">
        <Grid
          is_flex
          flexDirection="column"
          border="3px solid black"
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
              title
            </Text>
            <TextArea onChange={texTtitle} rows={2}></TextArea>
            <Text bold size="25px">
              content
            </Text>
            <TextArea onChange={textContents} rows={5}></TextArea>
          </Grid>
        </Grid>
        <Grid is_flex justifyContent="center">
          <Button width="7%" margin="15px 5%" height="65px" _onClick={addPost}>
            <Text size="20px" color="white">
              게시글 등록
            </Text>
          </Button>
          <Button width="7%" margin="15px 5%" height="65px">
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
