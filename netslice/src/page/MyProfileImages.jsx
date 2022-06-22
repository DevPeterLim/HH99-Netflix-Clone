import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import mypage_profile from "../images/mypage_profile.png"
import mypage_profile1 from "../images/mypage_profile1.png"
import mypage_profile2 from "../images/mypage_profile2.png"
import mypage_profile3 from "../images/mypage_profile3.png"


const MyProfileImages = () => {
    const navigate = useNavigate();
    const userInfo = useSelector(store => store.userReducer)
    return (
        <>
        <ProfileStyle>
            <button onClick={()=>navigate(-1)}>뒤로가기</button>
            <h1>프로필 변경</h1>
            <h2>프로필 아이콘을 선택하세요</h2>
            <span>Nickname</span>
            <img src={mypage_profile}></img>
            <h2>대표 아이콘</h2>
            <div>
                <img src={mypage_profile1} onClick={()=>navigate('ChangeCheck')} style={{cursor:"pointer"}}/>
                <img src={mypage_profile2}/>
                <img src={mypage_profile3}/>
            </div>
        </ProfileStyle>
        </>
    );
}

export const ProfileStyle = styled.div`
    color: white;
`


export default MyProfileImages;