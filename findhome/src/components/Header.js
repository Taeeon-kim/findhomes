import React from 'react';

import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Text from '../elements/Text';
import { history } from '../redux/configureStore';
import {useSelector, useDispatch} from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import styled from 'styled-components';

const Header = (props) => {
    const is_login =useSelector((store)=> store.user.is_login);
    const user = useSelector((store) => store.user.user)
   
    const dispatch =useDispatch();
    if(is_login){
        return (
            <Grid>
            <Container>
                 <Grid is_flex  justifyContent = "center" _onClick={()=> history.push("/")}>
                 <Text bold size= "45px" >보여줘 홈즈</Text>
                 </Grid>
            <Grid is_flex margin = 'auto 80px 0px auto' justifyContent = "flex-end" width = '30%'>
            <Text bold size= "15px" >{user.user_name}님 환영합니다</Text>
                <Button height = '30px' margin = '0px 16px' text ='로그아웃' _onClick={()=> {dispatch(userActions.logoutAction())}}></Button> 
                {/* <Button height = '30px' text ='회원가입' _onClick={()=> history.push("/sign-up")}></Button> */}
            </Grid>
            </Container>
            </Grid>
        )
    }
     return(
        
        <Grid >
            <Container>
             <Grid is_flex  justifyContent = "center" _onClick={()=> history.push("/")}>
             <Text bold size= "45px" >보여줘 홈즈</Text>
             </Grid>
             <Grid is_flex margin = 'auto 80px 0px auto' justifyContent = "flex-end" width = '20%'>
            <Button height = '30px' margin = '0px 16px' text ='로그인' _onClick={()=> history.push("/sign-in")}></Button> 
            <Button height = '30px' text ='회원가입' _onClick={()=> history.push("/sign-up")}></Button>
        </Grid>
             </Container>

        </Grid>
       

    )
} 

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #70e1f5; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #70e1f5, #ffd194); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #70e1f5, #ffd194); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
`;


export default Header


