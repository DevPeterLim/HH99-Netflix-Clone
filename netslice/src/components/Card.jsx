import React from 'react'
import styled from 'styled-components';
import "./Card.css"

const Card = (props) => {
  //console.log(props)
  return (
    <div className='box'>
      <img className='imgBox' src={props?.imgUrl}/>
      <div className='movietext'>
        play {props?.category}
      </div>
    </div>
  )
}



export default Card