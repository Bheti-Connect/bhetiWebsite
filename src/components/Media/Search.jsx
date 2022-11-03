import React from 'react';
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go';

const Search = ({setQuery}) => {


  return (
    <SearchBox>
    {/* Search Bar */}
      <ContainerSearch theme={theme}>
        <form onSubmit={handleQuery}>
          <button type='submit' className="btn-search"><GoSearch /></button>
          <input ref={valueSearch} type="text" className="input-search" placeholder="Votre recherche ..."></input>
        </form>
      </ContainerSearch>
    </SearchBox>
  )
}

// Style CSS
const SearchBox = styled.div`


`;

const ContainerSearch = styled.div`


`;

export default Search