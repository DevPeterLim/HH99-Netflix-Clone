import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginDB } from "../redux/module/userReducer";
import netsliceLogo from "/Users/peterlim/Documents/git_folder/netflix_clone/netslice/src/netsliceLogo.png"


const Login = ()=> {
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const pwRef = useRef(null);
    const loginHandler = async () => {
        console.log(emailRef.current.value);
        console.log(pwRef.current.value);
        dispatch(loginDB({
            email : emailRef.current.value,
            password : pwRef.current.value
        }));
    }
    return (
        <>
        <img src={netsliceLogo}/>
        <h2>로그인</h2>
        <input type={'email'} placeholder={"이메일 주소 또는 전화번호"} ref={emailRef}></input>
        <input type={'password'} placeholder={"비밀번호"} ref={pwRef}></input>
        <button onClick={loginHandler}>로그인</button>
        <input type={'checkbox'} id={"rememberMe"}/>
        <label htmlFor={'rememberMe'}>로그인 정보저장</label>
        </>
    )
}

export default Login;