import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo.png';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useRef } from 'react';
import Search from './SearchModal';
import apis from '../api/main';
import { useGetSearch } from '../Hooks/useGetSearch';
import netslice from '../netsliceLogo.png'
import searchLogo from '../searchLogo.png'

const Header = () => {

    const navigate = useNavigate();
    const [isSearching,setIsSearching] = useState(0);
  //  const [srch,setSrch] = useState("");
    const search = useRef(null);
    const moveHome = () => {
        navigate("/main");
    }

    const moveMyList = () => {
        navigate("/mylist")
    }

    const searching = () => {
        if(isSearching==0){
            setIsSearching(isSearching+1)
        }
        else{
            setIsSearching(isSearching-1)
            
        }
    }
   

    

  return (
    <StBox>
        <StLogo onClick={moveHome} src={netslice}/>
        <StLeft>
            <StButtonL onClick={moveHome}>홈</StButtonL>
            <StButtonL onClick={moveMyList}>내가 찜한 콘텐츠</StButtonL>
        </StLeft>
        <StRight>
            <StSBox click={isSearching}>
                <StSearchBox click={isSearching}>
                    <StSearchImg click={isSearching} src={searchLogo} onClick={searching}/>
                    <StSearchInput click={isSearching} placeholder='제목으로 검색' ref ={search}></StSearchInput>
                    <StButton></StButton>
                </StSearchBox>
            </StSBox>
            <StButtonR onClick={moveMyList}>마이페이지</StButtonR>
        </StRight>
    </StBox>
  )
}

const StButton = styled.button``;

const StSBox = styled.div`
    width: 14rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: end;
`;

const StSearchBox =styled.div`
    width : 12.5rem;
    display: flex;
    align-items: center;
    transition : transform 1s ease-in-out;
    transform : ${props=>props.click==1?`translate(0rem)`:`translate(10rem)`};
    border:${props=>props.click==1?`1px solid white`:`none`} 
`;

/* ${(props)=>`translate(calc(-500*${props.index}px))`} */

const StLeft = styled.div`
    display: flex;
    width : 50vw;
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
    width: 8.8rem;
    height : 2rem;
    border:none;
    background-color: #141414;
    transition: transform 1s ease-in-out;
    outline: none;
    color:white;
    font-size:1rem;
`;

const StSearchImg = styled.img`
    width : 1rem;
    height : 1rem;
    margin : 1rem 1rem 1rem 1rem;
    background-color:none;
    transition: transform 1s ease-in-out;
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
    cursor: pointer;
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