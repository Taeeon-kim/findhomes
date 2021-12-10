import {createAction,handleActions} from "redux-actions"
import produce from "immer" 
import axios from "axios"
import instance from "../../axios"
import { history } from "../configureStore"


// 액션 타입 지정
const SET_POST = 'SET_POST'
const ADD_POST = 'ADD_POST'

// 액션 생성 함수
const setPost = createAction(SET_POST,(post_list) => ({post_list}))
const addPost = createAction(ADD_POST,(post) =>({post}))

// 기본값 지정
const initialState = {
    list:[ 
        {   id: "yougnble@aa.com",
            user_name: "youngble",
            contents:"test 내용",
            img_url: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png',
            title:"",
    }
        
    ] 
}

const addPosthc = (title,content) => {
    return function (dispatch, getState, {history}){

        instance.get(`/api/posts`, {title:title, content:content}).then(function (response){    // 서버가 필요로 하는 데이터를 넘겨주고,
            console.log(response.data);
})
}
}
    


const getMainAPI = () => { 
    return function (dispatch,getState,{history}){
        const API = '/api/posts'
        instance.get(API)
            .then((response) => { // 데이터를 가져온다 // .then은 앞에꺼 실행한 후 다음 동작을 하는 것이다. 
             console.log(response.data)
             
             let post_list = [] // 넘어가는 setPost는 배열이기때문에 각 데이터는 배열로 묶여야한다


             response.data.posts.forEach((_post) => { // forEach로  객체 하나하나 돌게 한다.
                // let fitpost = {  // post componets의 있는 데이터와 파이어스토어에 있는 데이터가 형식이 조금 달라서 맞춰야아한다.
                //     id:fitpost.id,
                //     ...fitpost.data() 
                // }
                console.log(_post.nickname)
                let post = {
                    _id:_post.postId,
                    user_name:_post.nickname,
                    contents:_post.content,
                    img_url:_post.img_url
                }
                console.log(post)

                post_list.push(post)
            })

            console.log(post_list)

            dispatch(setPost(post_list))

        })
//         console.log(initialState.list)
//         const a = [...initialState.list,{id: "yougnble@aa.com",
//         user_name: "youngble",
//         contents:"test 내용",
//         img_url: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png'}]
//         console.log(a);



//         dispatch(setPost(initialState.list)) //나중에 필요 
        
// }
//             )}
    }
}



// 리듀서
export default handleActions(
    {
        [SET_POST] : (state,action) => produce(state,(draft) => {
            draft.list = action.payload.post_list // 리스트를 초기값에서 갈아끼우기
        }),
        [ADD_POST] : (state,action) => produce(state,(draft) => {
            draft.list = action.payload.post 
        })

    }
,initialState)

// 액션생성자 내보냄
const actionCreators = {
    setPost,
    getMainAPI,
    addPost,
    addPosthc
}

export {actionCreators}

