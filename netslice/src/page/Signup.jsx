import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { signupDB } from "../redux/module/userReducer";
import netsliceLogo from "../netsliceLogo.png"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { idCheck } from "../redux/module/userReducer";
import { getCookie } from "../Cookie";
import { LandingHeaders, Logo, MainGradient, MainJumbotron } from "./HomeBeforeLogin";
import { LoginBtn, LoginFooter, LoginFooterAtag, LoginFooterDiv, LoginForm, LoginH1, LoginInput, LoginUnderHelpSpan, LoginUnderInput, LoginUnderLabel, LoginUnderWrap, LoginWrap } from "./Login";


const Signup = () => {
    const navigate = useNavigate();
    const accessToken = getCookie('token');
    // useEffect(()=>{
    //     if(accessToken){
    //         navigate('/main')
    //     }});

    useEffect(()=>{
        dispatch(idCheck(null))})
    const emailRef = useRef(null);
    const pwRef = useRef(null);
    const dispatch = useDispatch();

    const signupHandler = () =>{
        console.log(emailRef, pwRef);
        dispatch(signupDB({
            email: emailRef.current.value,
            // nickname: "nickname12",
            password: pwRef.current.value,
            // passwordCheck: pwRef.current.value
        }))
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
                    <LoginH1>회원가입</LoginH1>
                    <LoginInput type={"email"} ref={emailRef}></LoginInput><br/>
                    <LoginInput type={"password"} ref={pwRef}></LoginInput><br/>
                    <LoginBtn onClick={signupHandler}>동의하고 계속</LoginBtn>
                    <LoginUnderWrap>
                        <LoginUnderInput type={"checkbox"} id={"personalData"}></LoginUnderInput>
                        <LoginUnderLabel htmlFor={'rememberMe'} style={{fontSize:"13px"}}>로그인 정보저장</LoginUnderLabel>
                        <LoginUnderHelpSpan>도움이 필요하신가요?</LoginUnderHelpSpan>
                    </LoginUnderWrap>
                </LoginForm>
                    <LoginFooter>
                        <LoginFooterDiv>Netflix 회원이신가요?</LoginFooterDiv>
                        <LoginFooterAtag onClick={()=>navigate('/login')}>로그인 하러가기</LoginFooterAtag>
                    </LoginFooter>
                </LoginWrap>
            </MainGradient>
        </MainJumbotron>
        
        </>
    )
}

export const SignupWrap = styled.div`
    color: white;
` 

export default Signup;