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
    <div>
        <Header/>
        <StBox>
        {movies?.map((value,index) => {
                  return <Genres key={index} id ={value.id} imgUrl={value.imgUrl} category={value.category} title={value.title} />
        })}
        </StBox>
    </div>
  )
}

const StBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin : 10rem 0 0 0;
`;

export default Genre