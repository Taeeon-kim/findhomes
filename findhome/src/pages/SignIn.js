import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Text from "../elements/Text";
import Input from "../elements/Input";

import {useDispatch} from "react-redux"
import {actionCreators as userActions} from '../redux/modules/user'

const SignIn = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
    const login =()=>{
        // dispatch(userActions.loginAction(id,pwd))
        dispatch(userActions.loginAction(id,pwd))
    }
  return (
    <React.Fragment>
      <Grid  flot_box bg = "white"border = "1px solid black" is_flex margin = "400px auto auto auto" justifyContent="center"  flexDirection = "column" width = "30%" padding = "50px 50px 100px 50px " >
        <Grid  width="100px" >
          <Text bold size="50px">
            Login
          </Text>
        </Grid>
        <Grid is_flex  width="230px">
          <Text bold margin="15px 3px">
            ID: 
          </Text>
          <Input
            _onChange={(e) => {
                setId(e.target.value)
            }}
          />
        </Grid>
        <Grid is_flex margin="0px auto" width="230px">
          <Text bold margin="15px 0px" >PW:</Text>
          <Input _onChange={(e) => {
                setPwd(e.target.value)
            }} type="password"/>
        </Grid>
        <Grid  is_flex margin="20px auto 0px auto" width="250px">
          <Button border bg = "black" color="white" text="로그인" width="100%" margin="20px auto" height="30px" _onClick={()=>{
              login();
          }}></Button>
        </Grid>
        {/* <Grid  is_flex margin="0px auto" width="250px">
          <Button border bg = "black" color="white" text="회원가입" width="100%" margin="20px auto" height="30px"></Button>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

// SignIn.defaultProps ={

// }

export default SignIn;
