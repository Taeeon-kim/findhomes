import React from 'react';
import Post from '../components/Post';
import Text from '../elements/Text';
import post from '../redux/modules/post';
import {useSelector} from 'react-redux';
const Detail = (props) => {
const post_list= useSelector((store) => store.post.list);   // 인자 store 는 임의로 정해줘도된다 configureStore.js 에 rootreducer 안에 post 의 key:value 값을 가져오는데 이때 전체 데이터 이름은 정해진게 없기때문이다.
const user_list= useSelector((store) => store.user);
const id = props.match.params.id;
console.log(id);
console.log(post_list);
console.log(user_list.user);
    return (
        <React.Fragment>
            {/* <Text>테스트</Text> */}
            <Post></Post>

        </React.Fragment>
    );
}


Detail.defaultProps={

}

export default Detail;