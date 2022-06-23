import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Genres = (props) => {

  const navigate = useNavigate();

  const openModal = () => {
    navigate(`/detail/${props?.id}`);
  };

  return (
    <StImgBox onClick={openModal}>
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
    cursor: pointer;
`;

export default Genres