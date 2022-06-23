import React from 'react'
import styled from 'styled-components';
import { useGetMyList } from '../Hooks/useGetMyList'

const List = (props) => {

    const {data} = useGetMyList();
  return (
    <StImgBox >
        <StImg src={props?.imgUrl}/>
    </StImgBox>
  )
}

const StImg = styled.img`
    width : 15rem;
    height: 20rem;
    border-radius: 0.5rem;
`;


const StImgBox = styled.div`
    height: 50rem;
    margin : 0 1rem 0 1rem;
`;

export default List