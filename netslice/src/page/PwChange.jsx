import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getCookie } from "../Cookie";
import { pwCertDB, pwChangeDB } from "../redux/module/userReducer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LandingHeaders, Logo } from "./HomeBeforeLogin";
import netsliceLogo from "../netsliceLogo.png"
import { MyPageContainer, MyPageH1, MyPageWrap } from "./MyPage";


const PwChange = ()=>{
    const navigate = useNavigate()
    const accessToken = getCookie('token');
    const dispatch = useDispatch();

    const textRef = useRef(null)
    const pwRef = useRef(null)
    const submitHandler = () =>{
        dispatch(pwCertDB({
            emailAuth: Number(textRef.current.value),
            accessToken
        }))
    }
    const submitPwHandler = () =>{
        dispatch(pwChangeDB({
            password: pwRef.current.value,
            accessToken
        }))
        navigate(-1);
    }
    
    return (
        <>
            <StyleWrap>
            <LandingHeaders>
                <Logo>
                    <img src={netsliceLogo}/>
                </Logo>
            </LandingHeaders>
            <MyPageWrap>
                <MyPageH1>PwChange 페이지</MyPageH1>
                <h2>인증 번호 입력</h2>
                <input type={"text"} ref={textRef}></input>
                <button onClick={submitHandler}>인증번호 입력</button><br/>
                <h2>비밀번호 변경</h2>
                <input type={"password"} ref={pwRef}></input>
                <button onClick={submitPwHandler}>변경하기</button>
            </MyPageWrap>
            </StyleWrap>
        </>
    )
}

export const StyleWrap = styled.div`
    color: white;
`

export default PwChange;