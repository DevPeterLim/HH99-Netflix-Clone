import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetSearch = ({search})=>{
    const fetcher = async ()=>{
        const {data} = await apis.getSearch({search});
        return data;
    }
    return useQuery("search",fetcher);
}