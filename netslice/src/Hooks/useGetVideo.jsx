import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetVideo = ()=>{
    const fetcher = async ()=>{
        const {data} = await apis.getVideos();
        return data;
    }
    return useQuery("video",fetcher);
}