import { createAction, handleActions } from "redux-actions"; //액션을 편하게 만들어주는것, reducer을 편하게 만들어주는것(switch case 없이)
import { produce } from "immer"; //불변성을 위해 produce 가져옴
import { setCookie, deleteCookie, getCookie } from "../../Cookie";
import axios from "axios";
import instance from "../../axios";
import { passwordCheck } from "../../shared/common";

//actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SIGN_UP = "SIGN_UP"

//action creators
//여기서 createAction 을 이용해서 만든다.

const logIn = createAction(LOG_IN, (user) => ({ user })); //첫번째 인자로 액션타입을 넘겨주고 화살표함수로 우리가 쓰고 가져올 데이터를 넣어줌
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
// const signUp = createAction(SIGN_UP, (user)=>({user}));

//initial State
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions

const loginAction = (id, password) => {
  return function (dispatch, getState, { history }) {
    // console.log(history);
    //         axios.get(`http://3.38.169.23/api/posts`, {id:id, password:password}, // 서버가 필요로 하는 데이터를 넘겨주고,
    //         {headers:{"content-type": "applicaton/json;charset=UTF-8",
    //         accept: "application/json",
    //         // Authorization: `bearer ${getCookie("user")}`
    //     }, // 내가가진토큰도 보내줘서 누가 요청했는 지 알려준다 (config에서 해요)
    //  withCredentials: true,
    // }
    instance
      .post(`/api/sign-in`, { id: id, password: password })
      .then(function (response) {
        // 서버가 필요로 하는 데이터를 넘겨주고,
        console.log(response.data);

        localStorage.setItem("token", response.data.token);
        const TOKEN = localStorage.getItem("token");
        instance
          .get(`/api/users/me`, {
            headers: {
              authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(function (response) {
            console.log(response.data.users.nickname);
        
            const users = response.data.users;
            localStorage.setItem("nickname", users.nickname);
            dispatch(
              logIn({
                user_name: users.nickname,
                id: users.id,
                uid: users.userId,
              })
            );
            window.alert(`${users.nickname}님 환영합니다.`);
            history.push("/");
          });
      })
      .catch(function (error) {
        console.log(error);
        window.alert(`비밀번호 또는 아이디를 다시 확인해주세요.`);
      });
  };
};

const logoutAction = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    localStorage.removeItem("nickname");
    dispatch(logOut());
    window.alert(`나중에 또 집보러오세요:)`);
    history.replace('/')
  };
};

const signupAction = (id, password, password_confirm, nickname) => {
    return function (dispatch, getState, {history}) {
//  console.log(id, password, password_confirm,nickname);
  instance.post("/api/sign-up",{
      id,
     password,
    password_confirm,
      nickname
  }).then(function (response){
      window.alert('가입을 축하드립니다.');
    //   console.log(response);
    //   dispatch(signUp({id, password, password_confirm, nickname}))
      history.push("/sign-in");
  })

 
    }
}


const loginCheckAction = () => {
  return function (dispatch, getState, {history}){
    const TOKEN = localStorage.getItem("token");
    if(TOKEN){
        instance
          .get(`/api/users/me`, {
            headers: {
              authorization: `Bearer ${TOKEN}`,
            },
          })
          .then(function (response) {
            console.log(response.data.users.nickname);
        
            const users = response.data.users;
            localStorage.setItem("nickname", users.nickname);
            dispatch(
              logIn({
                user_name: users.nickname,
                id: users.id,
                uid: users.userId,
              })
            );
            // window.alert(`${users.nickname}님 환영합니다.`);
            // history.push("/");
          });
        } 
  }
}

export default handleActions(
  {
    [LOG_IN]: ( state, action //state가 있을거고 받아온 action 값이 있을것이다 그걸 가져와 쓰기위해 넘겨줌
    ) =>
      produce(state, (draft) => {
        //immer 라는건 A 를 불변성을 유지하면서 값을 바꿀때 알아서 불변성 유지해줌. state 원본값을 draft로 복사해줘서 넘겨준다.
        console.log(draft.user); //초기값 null
        draft.user = action.payload.user; //그전엔 state.user = 이라고 할텐데 복사했기때문에 draft.user 로 쓴다. action으로 넘어온걸 payload안에 담겨서 쓴다
        draft.is_login = true;
        console.log(draft.user);
        setCookie("is_login", "success");
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    // [SIGN_UP] : (state, action) => produce(state, (draft)=> {}),  
  },

  initialState
); // 두번째 인자로는 초기 state 값으로 initial 값을 넣어줌 (initialState)

//액션생성함수만든것 export 해서 쓸수있게해줌
//action creator export

const actionCreators = {
  logIn,
  logOut,
  getUser,
  loginAction,
  logoutAction,
  signupAction,
  loginCheckAction,
};

export { actionCreators };
