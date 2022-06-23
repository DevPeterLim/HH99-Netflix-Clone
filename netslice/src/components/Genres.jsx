import React from 'react'
import styled from 'styled-components';

const Genres = (props) => {
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
    height: 20rem;
    margin : 1rem 1rem 1rem 1rem;
`;

export default Genres