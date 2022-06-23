import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import netsliceLogo from "../netsliceLogo.png"
import { idCheck, idCheckDB } from "../redux/module/userReducer";
import { mailtemp } from "../redux/module/userReducer";
import { useDispatch, useSelector } from "react-redux";
import KorLarge from "../images/KorLarge.jpg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../Cookie";

const HomeBeforeLogin = () => {
    const navigate = useNavigate();
    const accessToken = getCookie('token');
    useEffect(()=>{
        if(accessToken){
            navigate('/main')}
        })
    const idCheckInfo = useSelector(store => store.userReducer.idCheck);
    const emailRef = useRef(null);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
        const email = emailRef?.current?.value
        dispatch(idCheckDB({
            email: email}))
        dispatch(mailtemp({
            email: email}))
    }

    useEffect(() => {
        console.log(idCheckInfo);
        if (idCheckInfo === undefined){
            console.log(idCheckInfo)
        } else if(idCheckInfo === true){
            navigate('/signup')
            console.log(idCheckInfo)
        } else if(idCheckInfo === false){
            navigate('/login')
            console.log(idCheckInfo)
        }
        // ( idCheckInfo === undefined ) ? console.log(idCheckInfo) : (idCheckInfo === true) ? navigate('/signup') : navigate('/login')
      }, [idCheckInfo]);

    return (
        <>
            <MainJumbotron>
                <MainGradient>
                <LandingHeaders>
                    <Logo>
                        <img src={netsliceLogo}/>
                    </Logo>
                        <LangLoginBtnWrap>
                            <select>
                                <option>한국어</option>
                                <option>English</option>
                            </select>
                        <LoginBtn onClick={()=>navigate('login')}>로그인</LoginBtn>
                        </LangLoginBtnWrap>
                </LandingHeaders>
                <Landingbody>
                    <LandingTitle>영화와 시리즈를 무제한으로.</LandingTitle>
                    <LandingSubtitle>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</LandingSubtitle>
                    <LandingSubText>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</LandingSubText>
                    <LandingFormDiv>
                        <LandingForm>
                            <LandingFormInput className="emailCheck" type={'email'} ref={emailRef} placeholder={"이메일 주소"}></LandingFormInput>
                            <LandingFormBtn onClick={submitHandler}>시작하기</LandingFormBtn>
                        </LandingForm>
                    </LandingFormDiv>
                </Landingbody>
                </MainGradient>
            </MainJumbotron>
        </>
    )
}

export const MainJumbotron = styled.div`
    color: white;
    background: url(${KorLarge}) center no-repeat;
    background-size: cover;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100%;
    height: 100vh;
`

export const MainGradient = styled.div`
    width: 100%;
    z-index: 1;
    height: 100vh;
    background: rgba(0,0,0,0.7);
`

export const LandingHeaders = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 1000;
    min-width: 600px;
    /* background-color: red; */
`
export const Logo = styled.span`
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
    background-image: url(${netsliceLogo});
    background-repeat: no-repeat;
    z-index: 100;
`
export const LangLoginBtnWrap = styled.div`
    /* position: fixed; */
    right: 20px;
    top: 20px;
    min-width: 200px;
    margin-right: 20px;
    margin-top: 10px;
    /* background-color: #e50914; */
`
export const LoginBtn = styled.a`
    background-color: #e50914;
    padding: 7px 17px;
    border-radius: 5px;
    margin-left: 20px;
    white-space: nowrap;
    cursor: pointer;
`
export const Landingbody = styled.div`    
    position: relative;
    top: 30%;
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 20px;
    z-index: 200;
`
export const LandingTitle = styled.h2`
    font-size: 4rem;
    margin-bottom: 30px;
`
export const LandingSubtitle = styled.h5`
    font-size: 1.625rem;
`
export const LandingSubText = styled.p`
    font-size: 1.2rem;
`
export const LandingFormDiv = styled.div`
    padding: 10px;
    margin: auto;
    /* position: relative; */
    /* background-color: red; */
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
`

const LandingForm = styled.form`
    display:flex;
    align-items: center;
    justify-content: center;
`

export const LandingFormInput = styled.input`
    outline-width: 0;
    height:60px;
    width: 30%;
    max-width: 600px;
    min-width: 450px;
    border: none;
    margin: 0 auto;
    align-self: center;
    justify-items: center;
    align-items: center;
`
export const LandingFormBtn = styled.button`
    align-items: center;
    margin: 0;
    padding: 16px 20px;
    height: 60px;
    min-width: 74px;
    font-size: 1.625rem;
    color: #fff;
    background-color: #e50914;
    border: none;
    cursor: pointer;
` 

export default HomeBeforeLogin;
