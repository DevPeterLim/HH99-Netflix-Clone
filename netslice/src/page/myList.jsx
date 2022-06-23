import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import ListC from '../components/ListC';
import { useGetMyList } from '../Hooks/useGetMyList'

const MyList = () => {
  
  return (
    <Box>
      <Header/>
      <ListC/>
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


export default MyList