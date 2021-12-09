import axios from "axios";
// import { getCookie } from "../utils/cookie";

const instance = axios.create({
    // 기본적으로 우리가 바라볼 서버의 주소
    baseURL: "http://3.38.169.23",
    headers: {
    "content-type": "application/json;charset=UTF-8",
    authorization: `Bearer ${localStorage.getItem("token")}`,
    accept: "application/json",
    // Referer : "http://3.38.169.23"
    },
    });

export default instance;