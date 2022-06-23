import React from 'react'
import apis from '../../api/main';

export const getSearch = (payload) =>{
    return async function(){
        const {data} = await apis.getSearch(payload);
        console.log(data);
    }
}

const searchReducer = () => {
  return (
    <div>searchReducer</div>
  )
}

export default searchReducer