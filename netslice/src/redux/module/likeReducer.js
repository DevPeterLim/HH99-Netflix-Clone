import apis from "../../api/main"

export const putLike = (payload) =>{
    return async function(){
        const {data} = await apis.putLike(payload);
    }
}

export const putList = (payload) =>{
    return async function(){
        const {data} = await apis.putList(payload);
    }
}