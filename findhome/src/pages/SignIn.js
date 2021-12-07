import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Text from "../elements/Text";
import Input from "../elements/Input";

const SignIn = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid margin="50px auto" width="100px">
          <Text bold size="50px" justifyContent margin="0px">
            Login
          </Text>
        </Grid>
        <Grid is_flex margin="0px auto" width="230px">
          <Text bold margin="15px 3px">
            ID: 
          </Text>
          <Input
            _onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </Grid>
        <Grid is_flex margin="0px auto" width="230px">
          <Text bold margin="15px 0px">PW:</Text>
          <Input />
        </Grid>
        <Grid  is_flex margin="20px auto 0px auto" width="250px">
          <Button border bg = "black" color="white" text="로그인" width="100%" margin="20px auto" height="30px"></Button>
        </Grid>
        <Grid  is_flex margin="0px auto" width="250px">
          <Button border bg = "black" color="white" text="회원가입" width="100%" margin="20px auto" height="30px"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// SignIn.defaultProps ={

// }

export default SignIn;
