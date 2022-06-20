import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo.png';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import Search from './SearchModal';

const Header = () => {

    const navigate = useNavigate();
    const [isSearching,setIsSearching] = useState(false);

    const moveHome = () => {
        navigate("/main");
    }

    const moveMyList = () => {
        navigate("/mylist")
    }

    const search = () => {
        setIsSearching(true);
    }

    const searchOver = () =>{
        setIsSearching(false);
    }

  return (
    <StBox>
        <StLogo src={logo}/>
        <StLeft>
            <StButtonL onClick={moveHome}>홈</StButtonL>
            <StButtonL onClick={moveMyList}>내가 찜한 콘텐츠</StButtonL>
        </StLeft>
        <StRight>
            {isSearching?<StSearchBox><StSearchButton onClick={searchOver}>검색</StSearchButton><StSearchInput></StSearchInput></StSearchBox>:<StSearchButton onClick={search}>검색</StSearchButton>}
            <StButtonR>마이페이지</StButtonR>
        </StRight>
    </StBox>
  )
}

const StSearchBox =styled.div`
    display: flex;
    align-items: center;
`;

const StLeft = styled.div`
    display: flex;
    width : 30vw;
`;

const StRight = styled.div`
    display: flex;
    width : 50vw;
    justify-content: end;
    align-items: center;
`;

const StButtonR = styled.div`
    margin : 1rem 3rem 1rem 1rem;
    background-color:none;
    cursor: pointer;
`;

const StSearchInput = styled.input`
    height : 1.3rem;
`;

const StSearchButton = styled.div`
    margin : 1rem 1rem 1rem 1rem;
    background-color:none;
    cursor: pointer;
`;

const StButtonL = styled.div`
    margin : 1rem 1rem 1rem 1rem;
    background-color:none;
    cursor: pointer;
`;

const StLogo = styled.img`
    width :6rem;
    height :2.1rem;
    margin : 0 2rem 0 4rem;
`;

const StBox = styled.div`
    width:100vw;
    height:5rem;
    display: flex;
    align-items: center;
    position:fixed;
    top:0;
    left: 0;
    right:0;
    color:white;
`;

export default Header