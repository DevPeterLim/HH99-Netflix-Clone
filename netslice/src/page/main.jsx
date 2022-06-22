import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import CardCC from '../components/CardCC'
import Header from '../components/Header'
import MainVideo from '../components/MainVideo'
import './main.css'
import { useEffect } from 'react'
const Main = () => {

  // const [modalOpen,setModalOpen] = useState(false);
  // const data = useSelector(state=>state.detailReducer.info);

  return (
    <div className='main'>
      <Header className='head'/>
      <MainVideo className='video'/>
      <CardCC className='body'/>
    </div>
  )
}

export default Main