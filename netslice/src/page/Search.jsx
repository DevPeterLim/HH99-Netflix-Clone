import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Header from '../components/Header';
import Genres from '../components/Genres';
import { useGetMovie } from '../Hooks/useGetMovie';
import { useSelector } from 'react-redux';

const Search = () => {
    const searched = useParams().text;
    const data = useSelector(state=>state.searchReducer.search);
    console.log(data[0]);
    
  return (
    <Box>
        <Header/>
          <StGenre>"{searched}" 를 검색합니다.</StGenre>
          <StBox>
          {data?.map((value,index) => {
                    return <Genres key={index} id ={value.id} imgUrl={value.imgUrl} category={value.category} title={value.title} />
          })} 
          </StBox>
    </Box>
  )
}

const Box = styled.div`
  margin : 10rem 0 0 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StGenre = styled.div`
    margin : 0 0 2rem 0rem;
    font-size: 3rem;
    color : white;
`;

const StBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin : 0 0 0 0;
`;


export default Search