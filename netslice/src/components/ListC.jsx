import React from 'react'
import List from './List';
import { useGetMyList } from '../Hooks/useGetMyList';
import styled from 'styled-components';

const ListC = () => {

    const {data} = useGetMyList();
    console.log(data?.List);
    const info = data?.List; 
  return (
    <StBox>
        <StJim>내가 찜한 콘텐츠</StJim>
        <StListWrap>
                  {info?.map((value,index) => {
                  return <List key={index} id ={value.id} imgUrl={value.imgUrl} category={value.category} title={value.title} />
                })}
        </StListWrap>
    </StBox>
  )
}

const StJim = styled.div`
    color : white;
    font-size: 3rem;
    margin : 0 0 2rem 0;
`;

const StListWrap = styled.div`
    display: flex;
    height:20rem;
    margin : 0 0 0 5rem;
    flex-wrap: wrap;
`;

const StBox = styled.div`
    margin : 0rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ListC