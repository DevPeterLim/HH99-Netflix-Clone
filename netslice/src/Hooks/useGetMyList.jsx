import { useQuery } from 'react-query'
import apis from "../api/main";

export const useGetMyList = ()=>{
    const fetcher = async ()=>{
        const {data} = await apis.getMyList();
        return data;
    }
    return useQuery("list", fetcher)

}