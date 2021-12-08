import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Text from "../elements/Text";
import Input from "../elements/Input";

const SignUp = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid margin="50px auto" width="250px">
          <Text bold size="50px"  margin="0px 0px 0px 40px">
            회원가입
          </Text>
        </Grid>
        <Grid is_flex margin="0px auto" width="300px">
          <Text bold margin="15px 22px">
            ID: 
          </Text>
          <Input placeholder="아이디를 입력해주세요" />
        </Grid>
        <Grid is_flex margin="0px auto" width="300px">
          <Text bold margin="15px 13px" width="50px">PW:</Text>
          <Input placeholder="4~10자리 숫자,대소문자 입력해주세요."/>
        </Grid>
        <Grid is_flex margin="0px auto" width="300px">
          <Text bold margin="15px -5px" width="100px">PW 확인 :</Text>
          <Input placeholder="비밀번호를 한번더 확인해주세요"/>
        </Grid>
        <Grid  is_flex margin="20px auto 0px auto" width="300px">
          <Button border bg = "black" color="white" text="가입하기" width="100%" margin="20px auto" height="30px"></Button>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
};

// SignIn.defaultProps ={

// }

export default SignUp;
