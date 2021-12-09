import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Text from "../elements/Text";
import Input from "../elements/Input";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {emailCheck, passwordCheck} from '../shared/common'

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const Signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("공백없이 다 입력해주세요");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (!passwordCheck(pwd)) {
      window.alert("패스워드형식을 맞춰주세요");
      return;
    }
    if (pwd !== pwd_check) {
      window.alert("패스워드가 일치하지않습니다.");
      return;
    }

    dispatch(userActions.loginAction(id, pwd, user_name))
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid margin="50px auto" width="250px">
          <Text bold size="50px" margin="0px 0px 0px 40px">
            회원가입
          </Text>
        </Grid>
        <Grid is_flex margin="0px auto" width="300px">
          <Text bold margin="15px 22px">
            ID:
          </Text>
          <Input
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
              setId(e.target.value);
              //  console.log(id)
            }}
          />
        </Grid>
        <Grid is_flex margin="0px auto" width="300px">
          <Text bold margin="15px 10px" width="61px">
            닉네임:
          </Text>
          <Input
            placeholder="닉네임을 입력해주세요"
            _onChange={(e) => {
              setUserName(e.target.value);
              //  console.log(user_name)
            }}
          />
        </Grid>
        <Grid is_flex margin="0px auto" width="300px">
          <Text bold margin="15px 13px" width="50px">
            PW:
          </Text>
          <Input
            placeholder="4~10자리 숫자,대소문자 입력해주세요."
            _onChange={(e) => {
              setPwd(e.target.value);
              //  console.log(pwd)
            }}
          />
        </Grid>
        <Grid is_flex margin="0px auto" width="300px">
          <Text bold margin="15px -5px" width="100px">
            PW 확인 :
          </Text>
          <Input
            placeholder="비밀번호를 한번더 확인해주세요"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
              //  console.log(pwd_check)
            }}
          />
        </Grid>
        <Grid is_flex margin="20px auto 0px auto" width="300px">
          <Button
            border
            bg="black"
            color="white"
            text="가입하기"
            width="100%"
            margin="20px auto"
            height="30px"
            _onClick ={Signup}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// SignIn.defaultProps ={

// }

export default SignUp;
