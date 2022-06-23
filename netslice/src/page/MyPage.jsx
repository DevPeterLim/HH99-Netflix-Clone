import React, { useEffect, useState } from "react";
import styled from "styled-components"
import netsliceLogo from "../netsliceLogo.png"
import mypage_profile from "../images/mypage_profile.png"
import mypage_profile1 from "../images/mypage_profile1.png"
import mypage_profile2 from "../images/mypage_profile2.png"
import mypage_profile3 from "../images/mypage_profile3.png"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChangeNickImgDB, changePwDB } from "../redux/module/userReducer";
import { LandingHeaders, Logo } from "./HomeBeforeLogin";
import { getCookie } from "../Cookie";



const MyPage = ()=> {
        const accessToken = getCookie('token');
        const initNick = useSelector(store=>store.userReducer?.nickname)
        // const initImg = useSelector(store=>store.userReducer?.userImg)
        const [value, setValue] = useState(initNick);
        const [img, setImg] = useState(mypage_profile);

        const dispatch = useDispatch();
        // const useSelector(store => store.userReducer)
        // useEffect(()=>{
        //     nickname:
        //     profileimg:
        // },)
        const navigate = useNavigate();

        const pwChangeHandler = () =>{
            dispatch(changePwDB({
                accessToken
            }))
            alert("Message 메세지가 발송됨")
            navigate('/PwChange')
        }

        let count = 0;
        let list = [mypage_profile, mypage_profile1,mypage_profile2, mypage_profile3]
        const imgChangeHandler = () =>{
            count = Math.floor(Math.random()*4)
            let idx = count
            let imgTitle = list[idx]
            setImg(imgTitle)
        }
        const saveHandler = (e) =>{
            e.preventDefault();
            console.log(value)
            const accessToken = getCookie('token');
            alert("변경된 내용을 저장하시겠습니까?")
            console.log(accessToken);   
            dispatch(ChangeNickImgDB({
                nickname: value,
                userImg: img,
                accessToken
            }))
        }
        const onChange = (e)=>{
            console.log(e.target.value);
            setValue(e.target.value);
        }
    return (
        <>
        <MyPageStyle>
            <LandingHeaders>
                <Logo>
                    <img src={netsliceLogo}/>
                </Logo>
            </LandingHeaders>
        <MyPageWrap>
            <MyPageH1>프로필 변경</MyPageH1>
            <MyPageContainer>
            <ProfileImgDiv>
                <ProfileImg src={img}></ProfileImg>
            </ProfileImgDiv>
            <ContentDiv>
            <NicknameInput type={"text"} value={value} onChange={onChange}></NicknameInput>
            <br/> 
            <button onClick={imgChangeHandler}>프로필 이미지 변경</button><br/>
            <button onClick={pwChangeHandler}>비밀번호 변경 메일 발송</button>
            <div className="restrictions">
                <h2>관람등급 설정</h2>
                <div>모든 관람등급</div>
                <div>이 프로필에서는 모든 관람등급의 콘텐츠가 표시됩니다. </div>
            </div>
                <AutoPlayDiv>
                    <h2>자동 재생 설정</h2>
                    <AutoWrap>
                    <input type={"checkbox"}></input>
                    <div>모든 디바이스에서 시리즈의 다음 화 자동 재생</div>
                    </AutoWrap>
                    <AutoWrap>
                    <input type={"checkbox"}></input>
                    <div>모든 디바이스에서 탐색 중 미리보기 자동 재생</div>
                    </AutoWrap>
                </AutoPlayDiv>
            </ContentDiv>
            </MyPageContainer>
                <SaveBtn onClick={saveHandler}>저장</SaveBtn>
                <CancelBtn onClick={()=>navigate(-1)}>취소</CancelBtn>
        </MyPageWrap>
        </MyPageStyle>
        </>
    )
}

export const NicknameInput = styled.input`
    height: 2rem;
    background-color: grey;
    color: black;
`
export const AutoWrap = styled.div`
    display: inline-flex;
`

export const AutoPlayDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-top: solid 1px grey;
    margin-top: 30px;
`

export const CancelBtn = styled.button`
    margin-top: 30px;
    width:5rem;
    height:3rem;
    background-color: transparent;
    color: grey;
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: 3px;
    cursor: pointer;
`

export const SaveBtn = styled.button`
    margin-left: 70px;
    margin-top: 30px;
    margin-right: 15px;
    width:5rem;
    height:3rem;
    background-color: white;
    color: black;
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: 3px;
    cursor: pointer;
`

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const ProfileImgDiv = styled.div`
    width: 30%;
    display: flex;
    justify-content: end;
    margin-right: 20px;
`
export const ProfileImg = styled.img`
    width: 8rem;
    height: 8rem;

`

export const MyPageContainer = styled.div`
    display: flex;
    border-top: solid 1px grey;
    border-bottom: solid 1px grey;
    padding: 20px;
`

export const MyPageWrap = styled.div`
    position: relative;
    top: 100px;
    margin: auto;
    width:800px;
`

export const MyPageH1 = styled.h1`
    color: white;
    font-size: 3.65rem;
`
export const MyPageStyle = styled.div`
    color: white;
`


export default MyPage;