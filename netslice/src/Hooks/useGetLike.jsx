import { useQuery } from 'react-query'
import apis from "../api/main";

export const useGetLike = (props)=>{
    const fetcher = async ()=>{
        const {data} = await apis.getLike(props);
        return data;
    }
    return useQuery("like", fetcher)

}