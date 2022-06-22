import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Card from './Card';
import './CardC.css'
import Modal from './Modal/Modal';
import ModalPortal from './Modal/modalpotal';

const CardC = (props) => {
  
  const info = props?.props;
  const [status,setStatus] = useState(false);
  const [index,setIndex] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const [currentId, setCurrnetId] = useState(1);
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
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  
  return (
    <div>
    <div className='cardC'>
      <StCol>
        <Stwrap className='carouselWrapper'>
          <div className='carouselWrap'>
            <StHeadBox onMouseEnter={show} onMouseLeave={hide}>
              {info?<StGenre>{info[0].category}</StGenre>:<></>}
              <StHidden status={status} className='hidden'> &nbsp; 모두보기 </StHidden>
            </StHeadBox>
            <>
            <StLeft className='left' onClick={left}> &#60; </StLeft>
            <StCardC index={index} className='carousel'>
                  {info?.map((value,index) => {
                  return <Card key={index} onMouseEnter={()=>setCurrnetId(value.id)} onClick={handleModal} id ={value.id} imgUrl={value.imgUrl} category={value.category} title={value.title} />
                })}
            </StCardC>
            <StRight className='right' onClick={right}> &#62; </StRight> 
            </>
          </div>
        </Stwrap>
      </StCol>
    </div>
     {/* <ModalPortal>
        {modalOn && <Modal onClose={handleModal} currentId={currentId}/>}
    </ModalPortal> */}
    </div>
  )
}

const Stwrap = styled.div`
overflow: hidden;
height: 25rem;
`;

const StCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  width :94%;
  height: 25rem;
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
  position: relative;
  bottom:5rem;
  right:52rem;
`;

const StGenre = styled.div`
  color:white;
  font-size: 1.5rem;
  font-weight: 400;
  
`;

const StCardC = styled.div`
  display: flex;
  transition: transform 1s;
  transform : ${(props)=>`translate(calc(-500*${props.index}px))`}
`;

export default CardC