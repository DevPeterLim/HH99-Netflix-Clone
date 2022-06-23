import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGetMovie } from '../Hooks/useGetMovie'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { useGetDetail } from '../Hooks/useGetDetail'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import { putLike, putList } from '../redux/module/likeReducer'
import { useQueryClient } from 'react-query'


const Detail = () => {

    const queryClient = useQueryClient(); 
    const navigate = useNavigate();
    const movieId = useParams().id; 
    const dispatch = useDispatch();
    const {data:detail} =useGetDetail({movieId});
    console.log(detail);
    const info = detail?.detail
    // const islike = data?.likes[Number(movieId)-1];
    const islike = detail?.isLike;
    const islist = detail?.isList;

    console.log("db : " +islike);

    // const [isLike,setIsLike] = useState(detail?.isLike);
    // const [isList,setIsList] = useState(detail?.isList);

    //console.log("front : " + isLike)
    const like=() => {
       // setIsLike(true)
        queryClient.invalidateQueries()
        dispatch(putLike({
            isLike : true,
            movieId : info?.id,
        }))
    }

    const likex=() => {
      //  setIsLike(false)
        queryClient.invalidateQueries()
        dispatch(putLike({
            isLike : false,
            movieId : info?.id,
        }))
    }

    const list = () =>{
      //  setIsList(true)
        queryClient.invalidateQueries()
        dispatch(putList({
            isList : true,
            movieId : info?.id,
        }))
    }

    const listx =() =>{
       // setIsList(false);
        queryClient.invalidateQueries()
        dispatch(putList({
            isList : false,
            movieId : info?.id,
        }))
    }

    const gomain= ()=>{
        navigate('/main');
    }


  return (
    <StBox>
            <Header/>
            <StContent>
                {/* <Sthead>
                    <StCancel onClick={gomain}>X</StCancel>
                </Sthead> */}
                <StVideo muted autoPlay loop src={info?.videoUrl}>
                </StVideo>
                <StUpBox>
                    <StTitle>{info?.title}</StTitle>
                    <StLikeBox>
                        {islike?
                        <StLike onClick={likex}>좋아요 취소</StLike>:
                        <StLike onClick={like}>좋아요</StLike>}
                        {islist?<StList onClick={listx}>찜하기 취소</StList>:
                        <StList onClick={list}>찜하기</StList>}
                    </StLikeBox>
                </StUpBox>
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
const Sthead = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;

const StUpBox = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
`;

const StList = styled.button`
    width :10rem;
    height:2rem;
    margin : 0 0 0 1rem;
    cursor: pointer;
`;

const StLike = styled.button`
    width :10rem;
    height:2rem;
    cursor: pointer;
`;

const StLikeBox = styled.div`
    display:flex;
    margin : 1rem 0 0 4.5rem;
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
    margin : 0 0 0 4.5rem;
    
`;

const StVideo = styled.video`
    position: relative;
    border-radius: 0.5rem;
`;

const StCancel = styled.button`
    width: 1.5rem;
    height:1.5rem;
    background-color: #242323;
    border: none;
    color:white;
    margin : 0 0.7rem 0 0;
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
    margin : 5rem 0 0 0;
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