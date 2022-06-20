import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetMovie = ()=>{
    const fetcher = async ()=>{
        const {data} = await apis.getMovies();
        return data;
    }
    return useQuery("movies",fetcher);
}