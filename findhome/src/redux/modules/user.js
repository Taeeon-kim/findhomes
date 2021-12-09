import {createAction, handleActions} from "redux-actions";  //액션을 편하게 만들어주는것, reducer을 편하게 만들어주는것(switch case 없이)
import { produce } from "immer";  //불변성을 위해 produce 가져옴
import { setCookie, deleteCookie, getCookie } from "../../Cookie";
// import axios from "axios";
import instance from "../../axios"

//actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

//action creators
//여기서 createAction 을 이용해서 만든다.

const logIn = createAction(LOG_IN, (user)=>({user})) //첫번째 인자로 액션타입을 넘겨주고 화살표함수로 우리가 쓰고 가져올 데이터를 넣어줌
const logOut = createAction(LOG_OUT, (user)=>({user})) 
const getUser = createAction(GET_USER, (user)=>({user})) 

//initial State
const initialState ={
    user: 'youngble',
    is_login: false,

}

//middleware actions

const loginAction = (id,password) => {
    return function (dispatch, getState, {history}){
        // console.log(history);
      
        instance.post(`/api/posts`, {id:id, password:password}).then(function (response){    // 서버가 필요로 하는 데이터를 넘겨주고,
            console.log(response);
            
        dispatch(logIn({user_name: id, user_profile: '', id:id, uid: "dfhef"}));
        history.push('/');
        }).catch(function (error) {
            console.log(error);
          });
       
    }
}


export default handleActions({
    [LOG_IN] : (state,action) =>       //state가 있을거고 받아온 action 값이 있을것이다 그걸 가져와 쓰기위해 넘겨줌
        produce(state, (draft)=>{ //immer 라는건 A 를 불변성을 유지하면서 값을 바꿀때 알아서 불변성 유지해줌. state 원본값을 draft로 복사해줘서 넘겨준다. 
           console.log(draft.user) //초기값 null
            draft.user = action.payload.user;          //그전엔 state.user = 이라고 할텐데 복사했기때문에 draft.user 로 쓴다. action으로 넘어온걸 payload안에 담겨서 쓴다
            draft.is_login = true;
            console.log(draft.user)
            setCookie("is_login","success");
        })  
    ,
    [LOG_OUT] : (state,action) => produce(state, (draft)=>{deleteCookie()}),
    [GET_USER] : (state,action) => produce(state, (draft)=>{}),
    
    
 }
    
    
    , initialState)   // 두번째 인자로는 초기 state 값으로 initial 값을 넣어줌 (initialState)


    //액션생성함수만든것 export 해서 쓸수있게해줌
    //action creator export

    const actionCreators = {
        logIn,
        logOut,
        getUser,
        loginAction,
    };

    export {actionCreators}