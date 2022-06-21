import React from 'react'
import styled from 'styled-components';
import { useGetMovie } from '../Hooks/useGetMovie';
import CardC from './CardC';

const CardCC = () => {

    const {data} = useGetMovie();
    //console.log(data[0].category);
    const action = data?.filter(value => value.category=="action");
    const romance = data?.filter(value => value.category=="romance");
    const comedy = data?.filter(value => value.category=="comedy");
    //console.log(romance); 

    return (
        <StCardCC>
        <CardC props={action}/>
        <CardC props={romance}/>
        <CardC props={comedy}/>
        </StCardCC>
  )
}

const StCardCC = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CardCC