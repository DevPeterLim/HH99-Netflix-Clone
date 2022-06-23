import React from 'react'

const initialState={
    info:[],
    close:false
}

const SEND = 'detailReducer/SEND'
const CLOSE = 'detailReducer/CLOSE'

export function Send(payload){
    return{type:SEND,payload}
}

export function Close(payload){
    return{type:CLOSE,payload}
}


function detailReducer(state = initialState,action){
    switch(action.type)
    {
        case SEND:return{...state,info:[action.payload]};
        case CLOSE:return{...state,close:action.payload};
        default:return{...state};
    }
}

export default detailReducer