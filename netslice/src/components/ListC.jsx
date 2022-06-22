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
        <StListWrap>
                  {info?.map((value,index) => {
                  return <List key={index} id ={value.id} imgUrl={value.imgUrl} category={value.category} title={value.title} />
                })}
        </StListWrap>
    </StBox>
  )
}

const StListWrap = styled.div`
    display: flex;
    height:50rem;
    margin : 0 0 0 5rem;
`;

const StBox = styled.div`
    margin : 10rem 0 0 0;
`;

export default ListC