import React from 'react';
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go';

const SearchBar = () => {



  return (
    <SearchBox>
        <button type='button' className="btn-search"><GoSearch /></button>
        <input type="text" className="input-search" placeholder="Votre recherche ..."></input>
    </SearchBox>
  )
}

const SearchBox = styled.div`

    .input-search
    {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    padding-right: 40px;
    color:black;
    }

    .input-search::placeholder{
    color:black;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 100;
    }

    .btn-search{
    position: absolute;
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    right:55px;
    color:black;
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

`

export default SearchBar