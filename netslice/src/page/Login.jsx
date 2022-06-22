import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginDB } from "../redux/module/userReducer";
import netsliceLogo from "../netsliceLogo.png"
import styled from "styled-components"
import { MainJumbotron } from "./HomeBeforeLogin";
import { MainGradient } from "./HomeBeforeLogin";
import { idCheck } from "../redux/module/userReducer";
import { useNavigate } from "react-router-dom";

const Login = ()=> {
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(idCheck(null))})
    const mailInfo = useSelector(store => store?.userReducer.email);
    const isLogin = useSelector(store => store?.userReducer.isLogin)
    useEffect(() => { 
        ( isLogin === true ) ? navigate('/main') : navigate('/login')
      }, [isLogin]);

    const [value, setValue] = useState(mailInfo?.email); 

        // ( userInfo === undefined ) ? console.log(userInfo) : (userInfo === true) ? navigate('/signup') : navigate('/login')
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const pwRef = useRef(null);

    const loginHandler = async (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(pwRef.current.value);
        dispatch(loginDB({
            email : emailRef.current.value,
            password : pwRef.current.value
        }));
    }

    const onChange = (e) =>{
        setValue(e.target.value);
    }
    return (
        <>
        <img src={netsliceLogo}/>
        <MainJumbotron>
            <MainGradient>
                <LoginWrap>
                    <LoginForm>
                    <LoginH1>로그인</LoginH1>
                    <LoginInput type={'email'} placeholder={"이메일 주소 또는 전화번호"} ref={emailRef} value={value} onChange={onChange}></LoginInput><br/>
                    <LoginInput type={'password'} placeholder={"비밀번호"} ref={pwRef}></LoginInput><br/>
                    <LoginBtn onClick={loginHandler}>로그인</LoginBtn>
                    <input type={'checkbox'} id={"rememberMe"}/>
                    <label htmlFor={'rememberMe'}>로그인 정보저장</label>
                    </LoginForm>
                </LoginWrap>
            </MainGradient>
        </MainJumbotron>
        </>
    )
}

export const LoginWrap = styled.div`
    color: white;
    background-color: rgba(0,0,0,.75);
    min-height: 660px;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    padding: 70px;
    border-radius: 4px;
` 
export const LoginForm = styled.form`
    display: grid;
    flex-direction: column;
`
export const LoginH1 = styled.h1`
    font-size: 32px;
`
export const LoginInput = styled.input`
    height: 50px
`

export const LoginBtn = styled.button`
    font-size: 18px;
    padding: 16px 20px;
    min-height: 37px;
    color: white;
    background-color: #e50914;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    font-weight: 1000;
`



export default Login;