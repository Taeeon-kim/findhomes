import {createAction,handleActions} from "redux-actions"
import produce from "immer" 


// 액션 타입 지정
const SET_POST = 'GET_POST'

// 액션 생성 함수
const getPost = createAction(SET_POST,(postList) => ({postList}))

// 기본값 지정
const initialState = {
    list:[] 
}

// const getMainAPI = () => { 
//     return function (dispatch,getState,{history}){

        
//         postDB.get().then((docs) => { // 데이터를 가져온다 // .then은 앞에꺼 실행한 후 다음 동작을 하는 것이다. 
//              let post_list = [] // 넘어가는 setPost는 배열이기때문에 각 데이터는 배열로 묶여야한다
//             docs.forEach((doc) => { // forEach로  객체 하나하나 돌게 한다.

//                 let _post = {  // post componets의 있는 데이터와 파이어스토어에 있는 데이터가 형식이 조금 달라서 맞춰야아한다.
//                     id:doc.id,
//                     ...doc.data() 
//                 }
//                 let post = {
//                     id:doc.id,
//                     user_info:{
//                         user_name: _post.user_name,
//                         user_profile:_post.user_profile,
//                         user_id: _post.user_id,
//                     },
//                     image_url:_post.image_url,
//                     contents: _post.contents,
//                     insert_dt: _post.insert_dt,
//                     like_cnt: _post.like_cnt,


//                 }

//                 post_list.push(post)
//             })

//             console.log(post_list)

//             dispatch(setPost(post_list))

//         })
//     }
// }


// 리듀서
export default handleActions(
    {
        [SET_POST] : (state,action) => produce(state,(draft) => {

        })

    }
,initialState)

// 액션생성자 내보냄
const actionCreators = {
    getPost,
}

export {actionCreators}

