import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Header from '../components/Header';
import Genres from '../components/Genres';
import { useGetMovie } from '../Hooks/useGetMovie';


const Genre = () => {
    const {data} = useGetMovie();
    const genre = useParams().genre;
    const movies = data?.movie.filter(value => value.category==genre);
    console.log(genre);



  return (
    <Box>
        <Header/>
          <StGenre>{genre}</StGenre>
          <StBox>
          {movies?.map((value,index) => {
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

export default Genre