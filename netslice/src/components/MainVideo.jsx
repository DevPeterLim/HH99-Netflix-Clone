import React from 'react'
import styled from 'styled-components'
import { useGetVideo } from '../Hooks/useGetVideo';
import './mainvideo.css'

const MainVideo = () => {

  //console.log(data.movieUrl1)

  return (
    <>
      <StVideos>
        <StVideo muted loop src="https://video-ssl.itunes.apple.com/itunes-assets/Video124/v4/ba/ee/fc/baeefcf8-3d05-402f-ac0e-4cfea258eca1/mzvf_10336969707014459496.640x356.h264lc.U.p.m4v" autoPlay width="100%" height="800px"/>
      </StVideos>
      <Stdiv className='fade'/>
    </>
  )
}

const Stdiv = styled.div`
    width:100%;
    height: 5rem;
`;
const StVideo = styled.video`
    box-shadow: 0 30px 40px rgba(0,0,0,.1);
`;
const StVideos = styled.div`
    display: flex;
    justify-content: center;
    margin : 4rem 0 0 0;
    width: 100vw;
    height : 75vh;
    color:white;
    z-index: 2;
    overflow: visible;
`;

export default MainVideo