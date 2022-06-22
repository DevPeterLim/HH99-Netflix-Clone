import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetDetail = ({movieId})=>{
    const fetcher = async ()=>{
        const {data} = await apis.getDetail({movieId});
        return data;
    }
    return useQuery("detail",fetcher);
    
}

