import React from 'react'
import apis from '../../api/main';


const initialState = {
  search:[],
}


const SEARCH = 'searchReducer/SERACH';

export  function Search(payload){
  return {type : SEARCH ,  payload}
}


export const getSearch = (payload) =>{
    return async function(dispatch){
        const {data} = await apis.getSearch(payload);
        dispatch(Search(data))
        console.log(data);
    }
}

export default function searchReducer (state=initialState, action){
  switch (action.type) {
    case SEARCH :
        console.log(action.payload)
        return { ...state, search: action.payload }
    default:
      return {...state}
}
}