import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginDB } from "../redux/module/userReducer";
import netsliceLogo from "../netsliceLogo.png"
import styled from "styled-components"
import { LandingHeaders, Logo, MainJumbotron, MainGradient } from "./HomeBeforeLogin";
import { idCheck } from "../redux/module/userReducer";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../Cookie";

const Login = ()=> {
    const navigate = useNavigate();
    const accessToken = getCookie('token');
    useEffect(()=>{
        if(accessToken){
            navigate('/main')
    } dispatch(idCheck(null))})
        
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
        <MainJumbotron>
            <MainGradient>
                <LandingHeaders>
                    <Logo onClick={()=>navigate('/')} style={{cursor:"pointer"}}>
                    <img src={netsliceLogo}/>
                    </Logo>
                </LandingHeaders>
                <LoginWrap>
                <LoginForm>
                    <LoginH1>로그인</LoginH1>
                    <LoginInput type={'email'} placeholder={"이메일 주소 또는 전화번호"} ref={emailRef} value={value} onChange={onChange}></LoginInput><br/>
                    <LoginInput type={'password'} placeholder={"비밀번호"} ref={pwRef}></LoginInput><br/>
                    <LoginBtn onClick={loginHandler}>로그인</LoginBtn>
                    <LoginUnderWrap>
                        <LoginUnderInput type={'checkbox'} id={"rememberMe"}></LoginUnderInput>
                        <LoginUnderLabel htmlFor={'rememberMe'} style={{fontSize:"13px"}}>로그인 정보저장</LoginUnderLabel>
                        <LoginUnderHelpSpan>도움이 필요하신가요?</LoginUnderHelpSpan>
                    </LoginUnderWrap>
                </LoginForm>
                    <LoginFooter>
                        <LoginFooterDiv>Netflix 회원이 아닌가요?</LoginFooterDiv>
                        <LoginFooterAtag onClick={()=>navigate('/signup')}>지금 가입하세요.</LoginFooterAtag>
                    </LoginFooter>
                </LoginWrap>
            </MainGradient>
        </MainJumbotron>
        </>
    )
}

export const LoginFooter = styled.div`
    margin-top: 40px;
    display: flex;
`

export const LoginFooterDiv = styled.div`
    color: #737373;
`
export const LoginFooterAtag = styled.a`
    text-decoration: none;
    margin-left: 10px;
    cursor: pointer;
`

export const LoginUnderWrap = styled.div`
    display:inline-flex;
    color: #b3b3b3;
    align-items: center;
    margin-top: 5px;
`
export const LoginUnderInput = styled.input`
    display:inline;
`
export const LoginUnderLabel = styled.label`
    display:flex;
    font-size:13px;
    width: 50%;
    justify-content: flex-start;
`
export const LoginUnderHelpSpan = styled.span`
    margin-left: 4px;
    font-size: 13px;
    width: 40%;
    display: flex;
    justify-content: flex-end;
`

export const LoginWrap = styled.div`
    position: relative;
    top: 90px;
    color: white;
    background-color: rgba(0,0,0,.75);
    min-height: 500px;
    width: 360px;
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