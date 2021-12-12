import {createAction,handleActions} from "redux-actions"
import produce from "immer" 
import axios from "axios"
import instance from "../../axios"
import moment from "moment"


// 액션 타입 지정
const SET_POST = 'SET_POST'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
// 액션 생성 함수
const setPost = createAction(SET_POST,(post_list) => ({post_list}))
const addPost = createAction(ADD_POST,(post) => ({post}))
const deletePost = createAction(DELETE_POST ,(post) => ({post}))
// 기본값 지정
const initialState = {
    list:[] 
}

const initalPost = {
   
    
    content:"",
    // img_url:"https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
    post_date: moment().format('YYYY-MM-DD'),
    title:"",
    // uid: "키값",
    // userId:"값",
    area: ""
} 


const addPostDB = (title, content, area) => {
    return function (dispatch,getState,{history}) {
        const _user = getState().user.user; // getState스토어에있는 정보가져옴
    console.log(_user);
    
    const user_info = {
      nickname: _user.user_name,
      id: _user.id,
    };
        const _post = {
            ...initalPost,
            content:content,
            title:title,
            post_date: moment().format('YYYY-MM-DD hh:mm:ss'), // 만들어지는 시점 생각
            area:area
        }
        console.log(_post)

        const TOKEN = localStorage.getItem("token");
        console.log(TOKEN);
   
            instance.post(`/api/postsTest`, {

                'title':_post.title,
                'content':_post.content,
                'date':_post.post_date,
                'area':_post.area,
                'img_url': 'https://picsum.photos/250/250'
            }, { headers: {
                "authorization" : `Bearer ${TOKEN}`
              }, }).then(function (response){
                window.alert("Ddddd");
                  console.log(response)
                // const add = {
                //     ..._post, id: response.id

                }
                    // 서버가 필요로 하는 데이터를 넘겨주고,
                // console.log(add);
              ).catch(function (error) {
                console.log(error);
                window.alert(`비밀번호 또는 아이디를 다시 확인해주세요.`);
              });
        
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
                
                let post = {
                    id:_post.postId,
                    user_name:_post.nickname,
                    content:_post.content,
                    img_url:_post.img_url,
                    post_date: _post.date,
                    title: _post.title,
                    uid:_post._id,
                    userId:_post.userId,
                    area:_post.area,

                }
                

                post_list.push(post)
            })

            console.log(post_list)

            dispatch(setPost(post_list))

        // })
        // console.log(initialState.list)
        // const a = [...initialState.list,{id: "yougnble@aa.com",
        // user_name: "youngble",
        // content:"test 내용",
        // img_url: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png'}]
        // console.log(a);



        // dispatch(setPost(initialState.list)) //나중에 필요 
        
}
            )}
}

// withdraw
const deleteDB = (postId) => {
    return function (dispatch, getState, {history}){
        console.log(postId);
        const TOKEN = localStorage.getItem("token");
        console.log(TOKEN)
        // const a = `Bearer ${TOKEN}`;
        // console.log(a.split(" "));
        instance.delete(`/api/posts/${postId}`,{postId},{ headers: {
            "authorization" : `Bearer ${TOKEN}`
          }, }).then((res) => {
            console.log(res);
            // let users = res.data
            // dispatch(deletePost(users));
        }).catch(err => {
            console.log("withdraw : 에.러", err);
        });
    };
};



// 리듀서
export default handleActions(
    {
        [SET_POST] : (state,action) => produce(state,(draft) => {
            draft.list = action.payload.post_list 
        }),// 리스트를 초기값에서 갈아끼우기
        [ADD_POST] : (state,action) => produce(state,(draft) => {
                draft.list = action.payload.post
                console.log(draft.list)
        }),
        [DELETE_POST]: (state, action) => produce(state, (draft) => {
            // draft.study.joinNum -= 1;
            // draft.join = action.payload.join
        }),

    }
,initialState)

// 액션생성자 내보냄
const actionCreators = {
    setPost,
    getMainAPI,
    addPostDB,
    addPost,
    deleteDB,
}

export {actionCreators}
