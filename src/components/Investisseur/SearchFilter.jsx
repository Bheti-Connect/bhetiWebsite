import React from 'react';
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go';
import {RiFilter3Fill} from 'react-icons/ri';

const SearchFilter = ({setQuery}) => {

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  return (
    <SearchBox>
    {/* Search Bar */}
      <ContainerSearch>
          <button type='button' className="btn-search"><GoSearch /></button>
          <input type="text" onChange={handleQuery} className="input-search" placeholder="Votre recherche ..."></input>
      </ContainerSearch>


      {/* Filter */}
      <ContainerFilter>
        <RiFilter3Fill />
      </ContainerFilter>
    </SearchBox>
  )
}

const SearchBox = styled.div`
display: flex;
justify-content: space-between;
`;

const ContainerSearch = styled.div`
margin-right:20px;

.input-search
    {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 14px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    padding-right: 40px;
    color:black;
    background-color: transparent;
    }

    .input-search::placeholder{
    color:black;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 100;
    }

    .btn-search{
    position: relative;
    width: 50px;
    height: 50px;
    left:10px;
    top: 5px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    color:black;
    background-color: transparent;
    }

    .btn-search:focus ~ .input-search{
    width: 300px;
    background-color: transparent;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }

    .input-search:focus{
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }
`;

const ContainerFilter = styled.div`
      position: relative;
      top: 14px;
      right: 34px;
      font-size: 28px;
`;

export default SearchFilter