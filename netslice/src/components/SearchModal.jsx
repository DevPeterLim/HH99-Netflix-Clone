import React from 'react'
import styled from 'styled-components'
import './search.css'

const Search = () => {
  const searchIcon = document.getElementsByClassName("search-box__icon")[0];
  const searchBox = document.getElementsByClassName("search-box")[0];

  searchIcon.addEventListener("click", activateSearch);

  const activateSearch = () => {  
  searchBox.classList.toggle("active");
  }

  return (
    <StBox> 
      
    </StBox>
  )
}

const StBox = styled.input`
  width:7rem;
  height:2.3rem;
  background-color: black;
  
`;

const searchBox = styled.div``;

export default Search