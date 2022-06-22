import React from 'react'
import Header from '../components/Header';
import ListC from '../components/ListC';
import { useGetMyList } from '../Hooks/useGetMyList'

const MyList = () => {
  
  return (
    <div>
      <Header/>
      <ListC/>
    </div>
  )
}

export default MyList