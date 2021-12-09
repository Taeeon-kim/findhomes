import {createAction,handleActions} from "redux-actions"
import produce from "immer" 
import axios from "axios"


// 액션 타입 지정
const SET_POST = 'GET_POST'

// 액션 생성 함수
const setPost = createAction(SET_POST,(post_list) => ({post_list}))

// 기본값 지정
const initialState = {
    list:[] 
}

const getMainAPI = () => { 
    return function (dispatch,getState,{history}){
        const API = '3.38.169.23/api/posts'
        axios.get(API)
            .then((response) => { // 데이터를 가져온다 // .then은 앞에꺼 실행한 후 다음 동작을 하는 것이다. 
             console.log(response.data)
             
             let post_list = [] // 넘어가는 setPost는 배열이기때문에 각 데이터는 배열로 묶여야한다
            
             response.data.forEach((_post) => { // forEach로  객체 하나하나 돌게 한다.

                // let fitpost = {  // post componets의 있는 데이터와 파이어스토어에 있는 데이터가 형식이 조금 달라서 맞춰야아한다.
                //     id:fitpost.id,
                //     ...fitpost.data() 
                // }
                console.log(_post.nickname)
                let post = {
                    _id:_post._id,
                    user_name:_post.nickname,
                    contents:_post.constent,
                    img_url:_post.img_url
                }
                console.log(post)

                post_list.push(post)
            })

            console.log(post_list)

            dispatch(setPost(post_list))

        })

}
        

}



// 리듀서
export default handleActions(
    {
        [SET_POST] : (state,action) => produce(state,(draft) => {
            draft.list = action.payload.post_list // 리스트를 초기값에서 갈아끼우기
        })

    }
,initialState)

// 액션생성자 내보냄
const actionCreators = {
    setPost,
    getMainAPI
}

export {actionCreators}

