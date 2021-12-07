import React from 'react';

import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Text from '../elements/Text'

const Header = (props) => {
    return(
        <>
        <Grid>
             <Grid is_flex  justifyContent = "center">
             <Text bold size= "45px">보여줘 홈즈</Text>
             </Grid>
        <Grid is_flex margin = 'auto 80px 0px auto' justifyContent = "flex-end" width = '20%'>
            <Button height = '30px' margin = '0px 16px' text ='로그인' ></Button> 
            <Button height = '30px' text ='회원가입'></Button>
        </Grid>
        </Grid>
        </>

    )
} 

export default Header


