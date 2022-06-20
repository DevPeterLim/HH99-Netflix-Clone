import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Card from './Card';
import './CardC.css'

const CardC = (props) => {
  
  const info = props?.props;
  const [status,setStatus] = useState(false);
  const [index,setIndex] = useState(0);


  const show = ()=>{
    setStatus(true);
  }

  const hide = ()=>{
    setStatus(false);
  }

  const right = ()=>{
    if(index==4){}
    else{
      setIndex(index+1);
    }
  }

  const left = ()=>{
    if(index==0){
    }
    else{
      setIndex(index-1);
    }
  }
  //console.log(index);
  //console.log(status);
  return (
    <div className='cardC'>
      <StCol>
        
        <StHeadBox onMouseEnter={show} onMouseLeave={hide}>
          {info?<StGenre>{info[0].category}</StGenre>:<></>}
          <StHidden status={status} className='hidden'> &nbsp; 모두보기 </StHidden>
        </StHeadBox>
        <div className='carouselWrapper'>
        <StLeft className='left' onClick={left}> &#60; </StLeft>
        <StRight className='right' onClick={right}> &#62; </StRight> 
          <StCardC index={index} className='carousel'>
              {info?.map((value,index) => {
              return <Card key={index} imgUrl={value.imgUrl} category={value.category} title={value.title} />
            })}
          </StCardC>
        </div>
      </StCol>
     
    </div>
  )
}

const StCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const StLeft = styled.div`
  color:white;
  font-size: 3rem;
  cursor: pointer;
`;

const StRight = styled.div`
  color:white;
  font-size: 3rem;
  cursor: pointer;
`;

const StHidden = styled.div`
  display: ${props=>(props.status ? "inline-block":"none")};

`;

const StHeadBox = styled.div`
  display: flex;
  align-items: center;
`;

const StGenre = styled.div`
  color:white;
  font-weight: 400;
`;

const StCardC = styled.div`
  display: flex;
  transition: transform 1s;
  transform : ${(props)=>`translate(calc(-500*${props.index}px))`}
`;

export default CardC