import React from "react";
import styled from "styled-components"
import netsliceLogo from "../netsliceLogo.png"
import mypage_profile from "../images/mypage_profile.png"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const MyPage = ()=> {
        // useSelector(store => store.userReducer)
        const navigate = useNavigate();

        const pwChangeHandler = () =>{
            alert("Message 메세지가 발송됨")
            navigate('/PwChange')
        }

    return (
        <>
        <MyPageStyle>
        <img src={netsliceLogo}/>
        <MyPageH1>프로필 변경</MyPageH1>
        <img src={mypage_profile}></img>
        <button onClick={()=>navigate('images')}>프로필 이미지 변경</button>
        <input type={"text"} placeholder={"닉네임"}></input><br/> 
        <button onClick={pwChangeHandler}>비밀번호 변경 메일 발송</button>
        <div className="restrictions">
            <h2>관람등급 설정:</h2>
            <div>모든 관람등급</div>
            <div>이 프로필에서는 모든 관람등급의 콘텐츠가 표시됩니다. </div>
            <button>수정</button>
        </div>
        <div className="auto-play">
            <h2>자동 재생 설정</h2>
            <input type={"checkbox"}></input>
            <div>모든 디바이스에서 시리즈의 다음 화 자동 재생</div>
            <input type={"checkbox"}></input>
            <div>모든 디바이스에서 탐색 중 미리보기 자동 재생</div>
        </div>
        <div className="footer">
            <button>저장</button>
            <button>취소</button>
        </div>
        </MyPageStyle>
        </>
    )
}

export const MyPageH1 = styled.h1`
    color: white;
    font-size: 3.25rem;
`
export const MyPageStyle = styled.div`
    color: white;
`


export default MyPage;