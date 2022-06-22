import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"


const ProfileChangeCheck = ()=>{
    const navigate = useNavigate();
    return (
        <ProfileChangeCheckStyle>
            <h1>프로필 아이콘을 변경하시겠습니까?</h1>

            <button>예, 좋아요</button>
            <button onClick={()=>navigate(-1)}>아니요</button>
        </ProfileChangeCheckStyle>
        
    )
}

const ProfileChangeCheckStyle = styled.div`
    color: white;
`

export default ProfileChangeCheck;