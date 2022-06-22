import React from 'react'
import styled from 'styled-components';
import { useGetMovie } from '../Hooks/useGetMovie';
import { useGetVideo } from '../Hooks/useGetVideo';
import CardC from './CardC';

const CardCC = () => {

    const {data} = useGetMovie();
  
   
    //console.log(data[0].category);
    const action = data?.movie.filter(value => value.category=="액션");
    const romance = data?.movie.filter(value => value.category=="멜로/로맨스");
    const comedy = data?.movie.filter(value => value.category=="코미디");
    const horror = data?.movie.filter(value => value.category=="공포");
    const sf = data?.movie.filter(value => value.category=="SF");
    const drama = data?.movie.filter(value => value.category=="드라마");


    return (
        <StCardCC>
        <CardC props={action}/>
        <CardC props={romance}/>
        <CardC props={comedy}/>
        <CardC props={horror}/>
        <CardC props={sf}/>
        <CardC props={drama}/> 
        </StCardCC>
  )
}

const StCardCC = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CardCC