import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../Cookie";


//initState
const initState = {
    email : "",
    nickname : "nickname1", // 광민님이랑 논의 필요
    idCheck: null,
    loading: false,
    error: null,
    isLogin : false,
    isMailCheck : null,
    userImg: ""
}

//action type
const ID_CHECK  = 'userReducer/ID_CHECK';
const SIGNUP = 'userReducer/SIGNUP';
const LOGIN = 'userReducer/LOGIN';
const LOGOUT = 'userReducer/LOGOUT';
const MAIL_TEMP = 'userReducer/MAIL_TEMP';
const NICKIMG_CHANGE = 'userReducer/NICKIMG_CHANGE';

const LOADING = 'userReducer/LOADING';
const ERROR = 'userReducer/ERROR'; 

//action creator func
export const idCheck = (payload) => {
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
export const mailtemp = (payload) => {
    return { type : MAIL_TEMP, payload}
}
const nickimg = (payload) => {
    return { type : NICKIMG_CHANGE, payload}
}

//middlewares
export const idCheckDB = (payload) =>{
    return async function(dispatch) {
        dispatch(loading(true))
        console.log(payload.email)
        try {
            const idCheckResp = await axios ({
                method : 'post',
                url : 'http://15.164.50.132:8000/user/idCheck',
                data : {
                    email : payload.email }})
            console.log(idCheckResp) // data 또는 data.result로 정보 확인
            if (idCheckResp.status === 200){
                if (idCheckResp.data.result === true) {
                    dispatch(idCheck(idCheckResp.data.result))
                    alert('사용 가능!')
                } else if (idCheckResp.data.result === false){
                    dispatch(idCheck(idCheckResp.data.result))
                    alert('이미 가입된 회원임?!')
                } else {
                    alert("잉?")}}}
        catch (error) {
            console.log(error);
            alert(error)
        }
        finally {
            console.log("finally finished")
            dispatch(loading(false))
        }}}

export const signupDB = (payload) => {
    console.log(payload);
    return async function(dispatch) {
        dispatch(loading(true))
        try {
            const signupResp = await axios ({
                method : 'post',
                url : 'http://15.164.50.132:8000/user/signup',
                data : {
                    email : payload.email,
                    password : payload.password}})
            console.log(signupResp.data)
            const accessToken = signupResp.data.token; // 확인 필요.split(" ")[1];
            console.log(accessToken);
            setCookie('token', accessToken, {
                path : "/", 
                // expires : "after180m" // test 후 update 필요
            })
            if (signupResp.data === true) {
                alert("회원가입 성공!");}}

        catch (error) {
            console.log(error);
            alert("회원가입 실패 같은 오류가 반복될시 넷슬라이스에 문의하세요")}
        finally {
            dispatch(loading(false))}}}

export const loginDB = (payload) => {
    return async function(dispatch) {
        dispatch(loading(true));
        try {
            const loginResp = await axios ({
                method : 'post',
                url : 'http://15.164.50.132:8000/user/login',
                data : {
                    email : payload.email,
                    password : payload.password
                } 
            })
            console.log(loginResp.data.token)
            console.log(loginResp)
            if (loginResp.data.result === true) {
                alert('로그인 성공!')
                const accessToken = loginResp.data.token; // 확인 필요.split(" ")[1];
                console.log(accessToken);
                setCookie('token', accessToken, {
                    path : "/", 
                    // expires : "after180m" // test 후 update 필요
                })
                dispatch(login(true));
            } else if (loginResp.data.result === false){
                dispatch(login(false))
                alert('비밀번호를 확인')
            }
        } catch (error) {
            alert('로그인 실패');
            console.log(error);
        } finally {
            dispatch(loading(false))
        }
    }
}
export const ChangeNickImgDB = (payload) => {
    return async function(dispatch) {
        dispatch(loading(true));
        try {
            console.log(payload.accessToken)
            const nickImgResp = await axios ({
                method : "patch",
                url : 'http://15.164.50.132:8000/user/mypage',
                data : {
                    userImg: payload.userImg,
                    nickname: payload.nickname
                },
                headers:{
                    Authorization: `${payload.accessToken}`
                }
            })
            console.log(nickImgResp)
            if (nickImgResp.status === 200) {
                alert("변경 성공")
                dispatch(nickimg(nickImgResp.data))
            } 
            else {
                alert("변경 내역이 없습니다. ")
            }
        } catch (error) {
            alert('변경 실패');
            console.log(error)
        } finally {
            dispatch(loading(false))
        }
    }
}
export const changePwDB = (payload) => {
    return async function(dispatch) {
        dispatch(loading(true));
        try {
            const pwChangeResp = await axios ({
                method: "post",
                url : 'http://15.164.50.132:8000/user/emailAuth',
                // data : {} // post 인데 data가 없나요?
                headers:{
                    Authorization: `${payload.accessToken}`
                }
            })
            console.log(pwChangeResp)
            if (pwChangeResp.status === 200){
                alert("메일 발송됨")
            }
        } catch (error){
            console.log(error)
        } finally {
            dispatch(loading(false))
        }
    }
}

export const pwCertDB = (payload) => {
    return async function(dispatch) {
        dispatch(loading(true));
        try{
            const pwCertResp = await axios ({
                method: "post",
                url : 'http://15.164.50.132:8000/user/checkEmailAuth',
                data: {
                    emailAuth : payload.emailAuth
                },
                headers:{
                    Authorization: `${payload.accessToken}`
                }})
            console.log(pwCertResp)
            if (pwCertResp.status === 200){
                alert("확인")
            }
        } catch (error){
            console.log(error)
        } finally {
            dispatch(loading(false))
        }
    }
}
export const pwChangeDB = (payload) => {
    return async function(dispatch) {
        dispatch(loading(true));
        try{
            const pwChangeResp = await axios ({
                method: "patch",
                url: "http://15.164.50.132:8000/user/changePassword",
                data:{
                    password: payload.password
                },
                headers:{
                    Authorization: `${payload.accessToken}`
                }})
                console.log(pwChangeResp)
                if (pwChangeResp.status === 200){
                    alert("변경됨")
                }
        } catch (error){
            console.log(error)
        } finally {
            dispatch(loading(false))
        }
    }
}

//reducer
export default function userReducer (state=initState, action = {}){
    switch (action.type) {
        case ID_CHECK :
            console.log(action.payload)
            return { ...state, idCheck: action.payload }
        case LOGIN :
            return { ...state, isLogin: true, email: action.payload }
        case MAIL_TEMP :
            return { ...state, email: action.payload}
        case NICKIMG_CHANGE :
            return { ...state, nickname: action.payload.nickname, userImg: action.payload.userImg}
        default:
            return state;
    }
}