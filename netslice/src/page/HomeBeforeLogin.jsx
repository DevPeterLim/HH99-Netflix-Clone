import React, { useRef } from "react";
import styled from "styled-components"
import netsliceLogo from "/Users/peterlim/Documents/git_folder/netflix_clone/netslice/src/netsliceLogo.png"
import { idCheckDB } from "../redux/module/userReducer";
import { useDispatch } from "react-redux";

const HomeBeforeLogin = () => {
    const emailRef = useRef(null);
    const dispatch = useDispatch()

    const submitHandler = () =>{
        console.log(emailRef.current.value)
        const email = emailRef?.current?.value
        dispatch(idCheckDB({email}))    
    }
    return (
        <>
            <MainJumbotron>
                <img src={netsliceLogo}/>
                <select>
                    <option>한국어</option>
                    <option>English</option>
                </select>
                <button>로그인</button>
                <div>영화와 시리즈를 무제한으로.
                    다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
                    시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</div>
                <input className="emailCheck" type={"email"} ref={emailRef}></input>
                <button onClick={submitHandler}>시작하기</button>
            </MainJumbotron>
        </>
    )
}

export const MainJumbotron = styled.div`
    
` 


export default HomeBeforeLogin;
