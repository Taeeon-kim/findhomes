import React from 'react';

import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Text from '../elements/Text';
import { history } from '../redux/configureStore';
import {useSelector, useDispatch} from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Header = (props) => {
    const is_login =useSelector((store)=> store.user.is_login);
    const dispatch =useDispatch();
    if(is_login){
        return (<>
            <Grid>
                 <Grid is_flex  justifyContent = "center" _onClick={()=> history.push("/")}>
                 <Text bold size= "45px" >보여줘 홈즈</Text>
                 </Grid>
            <Grid is_flex margin = 'auto 80px 0px auto' justifyContent = "flex-end" width = '20%'>
                <Button height = '30px' margin = '0px 16px' text ='로그아웃' _onClick={()=> {dispatch(userActions.logoutAction())}}></Button> 
                {/* <Button height = '30px' text ='회원가입' _onClick={()=> history.push("/sign-up")}></Button> */}
            </Grid>
            </Grid>
            </>)
    }
     return(
        <>
        <Grid>
             <Grid is_flex  justifyContent = "center" _onClick={()=> history.push("/")}>
             <Text bold size= "45px" >보여줘 홈즈</Text>
             </Grid>
        <Grid is_flex margin = 'auto 80px 0px auto' justifyContent = "flex-end" width = '20%'>
            <Button height = '30px' margin = '0px 16px' text ='로그인' _onClick={()=> history.push("/sign-in")}></Button> 
            <Button height = '30px' text ='회원가입' _onClick={()=> history.push("/sign-up")}></Button>
        </Grid>
        </Grid>
        </>

    )
} 

export default Header


