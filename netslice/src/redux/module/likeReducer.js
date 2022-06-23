import apis from "../../api/main"

const initialState = {
  like:false,
  list:false,
}

const LIKE = 'likeReducer/LIKE'
const LIST = 'likeReducer/LIST'

export function Like(payload){
    return{type:LIKE,payload}
}

export function List(payload){
  return{type:LIST,payload}
}

export const putLike = (payload) =>{
    return async function(dispatch){
      dispatch(Like(payload.isLike));
      const {data} = await apis.putLike(payload);
    }
}

export const putList = (payload) =>{
    return async function(dispatch){
      dispatch(List(payload.isList));
      const {data} = await apis.putList(payload);
    }
}

export default function likeReducer (state=initialState, action){
  switch (action.type) {
    case LIKE :
        console.log(action.payload)
        return { ...state, like: action.payload }
    case LIST : 
        console.log(action.payload)
        return {...state, list : action.payload }
    default:
      return {...state}
}
}