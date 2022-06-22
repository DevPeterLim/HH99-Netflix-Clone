import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import "./Card.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  
  const navigate = useNavigate();

  const openModal = () => {
    navigate(`/detail/${props?.id}`);
  };
  
  //console.log(props)
  return (
    <React.Fragment>
      <div className='box' onClick={openModal}>
        <img className='imgBox' src={props?.imgUrl}/>
      </div>
    </React.Fragment>
  )
}



export default Card