import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../Cookie";

//initState
const initState = {
    email : "",
    idCheck: false,
    loading: false,
    error: null,
    isLogin : false
}

//action type
const ID_CHECK  = 'userReducer/ID_CHECK';
const SIGNUP = 'userReducer/SIGNUP';
const LOGIN = 'userReducer/LOGIN';
const LOGOUT = 'userReducer/LOGOUT';

const LOADING = 'userReducer/LOADING';
const ERROR = 'userReducer/ERROR'; 



//action creator func
const idCheck = (payload) => {
    return { type : ID_CHECK, payload}
}
const signup = (payload) => {
    return { type : SIGNUP, payload}
}
const login = (payload) => {
    return { type: LOGIN, payload}
}
const logout = (payload) => {
    return { type : LOGOUT, payload}
}

const loading = (payload) => {
    return { type : LOADING, payload}
}
const error = (payload) => {
    return { type : ERROR, payload}
}

//middlewares
export const idCheckDB = (payload) =>{
    console.log(payload);
    // const navigate = useNavigate();
    return async function(dispatch) {
        dispatch(loading(true))
        try {
            const idCheckResp = await axios({
                method : 'get',
                url : '', // URL 추가 필요 
                data : {
                    email : payload.email}})
            console.log(idCheckResp.data) // data 또는 data.result로 정보 확인
            if (idCheckResp.data === true) {
                dispatch(idCheck(idCheckResp.data))
                // navigate('/signup')  // 통신 확인 후 변경
                alert('사용 가능!')
            } else {
                dispatch(idCheck(idCheckResp.data))
                // navigate('login')
                alert('이미 가입된 회원임, 로그인하셈!')}}
        catch (error) {
            console.log(error);
            alert(error)}
        finally {
            dispatch(loading(false))}}} 

export const signupDB = (payload) => {
    console.log(payload);
    return async function(dispatch) {
        dispatch(loading(true))
        try {
            const signupResp = await axios({
                method : 'post',
                url : '',
                data : {
                    email : payload.email,
                    nickname : payload.nickname, // nickname 줄게 없음
                    password : payload.password,
                    passwordCheck : payload.passwordCheck}})
            console.log(signupResp)
            if (signupResp.data === true) {
                alert("회원가입 성공!");}}
        catch (error) {
            console.log(error);
            alert("회원가입 실패 넷슬이스에 문의하세요")}
        finally {
            dispatch(loading(false))}}}

export const loginDB = (payload) => {
    return async function(dispatch) {
        dispatch(loading(true));
        try {
            const loginResp = await axios ({
                method : 'post',
                url : '',
                data : {
                    email : payload.email,
                    password : payload.password
                } 
            })
            console.log(loginResp.hejaders.authorization)
            console.log(loginResp)
            const accessToken = loginResp.headers.authorization // 확인 필요.split(" ")[1];
            setCookie('token', accessToken, {
                path : "/", 
                expires : "after1m" // test 후 update 필요
            })
            dispatch(login(true));
            alert('로그인 성공!')
        } catch (error) {
            alert('로그인 실패');
        } finally {
            dispatch(loading(false))
        }
    }
}



//reducer
export default function userReducer (state=initState, action = {}){
    switch (action.type) {
        case ID_CHECK :
            return { ...state, idCheck: action.payload }
        case LOGIN :
            return { ...state, isLogin: true, email: action.payload }
        default:
            return state;
    }
}