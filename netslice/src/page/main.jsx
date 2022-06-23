import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import CardCC from '../components/CardCC'
import Header from '../components/Header'
import MainVideo from '../components/MainVideo'
import './main.css'

const Main = () => {

  const [isDown,setIsDown] = useState(false);

  const scroll = ()=>{
    const value = window.scrollY*0.01;
    console.log(value);
    if(value>3){
      setIsDown(true)
    }
}

  // const [modalOpen,setModalOpen] = useState(false);
  // const data = useSelector(state=>state.detailReducer.info);

  return (
    <div onWheel={scroll} className='main'>
      <Header down ={isDown} className='head'/>
      <MainVideo className='video'/>
      <CardCC className='body'/>
    </div>
  )
}

export default Main