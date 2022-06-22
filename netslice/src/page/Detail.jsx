import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGetMovie } from '../Hooks/useGetMovie'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { useGetDetail } from '../Hooks/useGetDetail'
import Header from '../components/Header'
import apis from '../api/main'
import { useGetLike } from '../Hooks/useGetLike'
import { putLike, putList } from '../redux/module/likeReducer'


const Detail = () => {

    const movieId = useParams().id;
    const dispatch = useDispatch();
    const {data:detail} =useGetDetail({movieId});
    console.log(detail?.isList);
    const info = detail?.detail
    // const islike = data?.likes[Number(movieId)-1];
    const islike = detail?.isLike;
    const islist = detail?.isList;

   
    const like=() => {
        dispatch(putLike({
            like : true,
            movieId : info?.id,
        }))
    }

    const likex=() => {
        dispatch(putLike({
            like : false
        }))
    }

    const list = () =>{
        dispatch(putList({
            like : true
        }))
    }

    const listx =() =>{
        dispatch(putList({
            like : false
        }))
    }

  return (
    <StBox>
            <Header/>
            <StContent>
                <StVideo muted autoPlay loop src={info?.videoUrl}></StVideo>
                <StTitle>{info?.title}</StTitle>
                <StLikeBox>
                    {/* <StLike onClick={like}/> */}
                     {islike?<StLike onClick={likex}>좋아요 취소</StLike>:<StLike onClick={like}>좋아요</StLike>}
                     {islist?<StLike onClick={listx}>찜하기 취소</StLike>:<StLike onClick={list}>찜하기</StLike>}
                </StLikeBox>
                <StOutBox>
                    <StInBox>
                        <StText>{info?.content}</StText>
                    </StInBox>
                    <StInBox>
                        <StGenre><strong>장르</strong> : {info?.category}</StGenre>
                        <br/>
                        <StActor><strong>출연진</strong> : {info?.actor}</StActor>
                        <br/>
                        <StDirector><strong>감독</strong> : {info?.director}</StDirector>
                    </StInBox>
                </StOutBox>
            </StContent>
    </StBox>
  )
}

const StLike = styled.button`
    width :10rem;
    height:1rem;
`;

const StLikeBox = styled.div`

`;


const StOutBox = styled.div`
    display: flex;
    margin : 2rem 0 0 0 ;
`;

const StInBox = styled.div`
    display:flex;
    flex-direction: column;
    margin : 0 1rem 3rem 1rem;
`;

const StTitle = styled.div`
    font-size : 2rem;
    font-weight: 600;
    color : white;
    width:100%;
    margin : 0 0 0 2.3rem;
    
`;

const StVideo = styled.video`
    position: relative;
    border-radius: 0.5rem;
`;

const StImg = styled.div`
    width : 60vw;
    height : 70vh;
`;

const StActor = styled.div`
    color : white;
`;

const StGenre = styled.div`
    color : white;
`;

const StDirector = styled.div`
    color : white;
`;

const StText = styled.div`
    width : 35rem;
    color : white;
`;

const StContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color : #242323;
    margin : auto 0 auto 0;
    width:60rem;
    border-radius: 1rem;
`;


const StBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
`;

export default Detail