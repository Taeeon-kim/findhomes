// export const emailCheck = (email) => {
//     let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;   // ()붙이고 뒤에 *을 붙이면 n번째 반복할수있다는걸 나타냄
    
//     return _reg.test(email);
// }
// const re_nickname = /^[a-zA-Z0-9]{3,10}$/;
export const idCheck = (id) => {
    let _reg = /^[a-zA-Z0-9]{4,30}$/;  // ()붙이고 뒤에 *을 붙이면 n번째 반복할수있다는걸 나타냄
    
    return _reg.test(id);
}


export const passwordCheck = (password) => {
    let _reg = /^[a-zA-Z0-9]{4,30}$/;  // ()붙이고 뒤에 *을 붙이면 n번째 반복할수있다는걸 나타냄
    
    return _reg.test(password);
}
