import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {GoSearch, GoChevronDown} from 'react-icons/go';
import { useTheme } from '../../context/themeContext';
import Select from 'react-select';


const SearchFilter = ({setQuery, setTrie}) => {

  const trieValue = [
    { value: 'Recent', label: 'Recent' },
    { value: 'Ancien', label: 'Ancien' },
  ]
  const [valueSelect, setValueSelect] = useState("Trier par ...")
  
  const valueSearch = useRef(null);
  const theme = useTheme();

  // Handle query
  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(valueSearch.current.value)
  }
  // Handle trie
  const handleTrie = (e) => {
    //setTrie(trieValue[e.target.value]);
    console.log(e);

  }

  return (
    <SearchBox>
    {/* Search Bar */}
      <ContainerSearch theme={theme}>
        <form onSubmit={handleQuery}>
          <button type='submit' className="btn-search"><GoSearch /></button>
          <input ref={valueSearch} type="text" className="input-search" placeholder="Recherche..."></input>
        </form>
      </ContainerSearch>


      {/* Filter */}
      <ContainerFilter theme={theme}>
        <div className='filter'>

        <Select
          value={valueSelect}
          onChange={handleTrie}
          options={trieValue}
        />


         







        </div>
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

.btn-search{
position: relative;
width: 50px;
height: 50px;
left:10px;
top: 5px;
border-style: none;
font-size: 25px;
font-weight: bold;
outline: none;
cursor: pointer;
color: ${props => props.theme.colorBheti};
background-color: transparent;
}

@media only screen and (max-width: 768px) {
  margin-right:15px;

  .btn-search{
    font-size: 20px;
  }

  .input-search:focus{
    width: 120px;
  }

  .btn-search:focus ~ .input-search{
    width: 120px;
  }

  .input-search::placeholder{
    font-size: 10px;
  }

}

@media only screen and (max-width: 645px) {

  .btn-search{
    font-size: 18px;
  }

  .input-search:focus{
    width: 120px;
  }

  .btn-search:focus ~ .input-search{
    width: 120px;
  }

  .input-search::placeholder{
    font-size: 8px;
  }

}

`;

const ContainerFilter = styled.div`
      position: relative;
      top: 14px;
      right: 34px;

      .filter{
        width: 500px;
        margin: 50px auto 0;


        .dropdown {
        width: 300px;
        display: inline-block;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 0 2px rgb(204, 204, 204);
        transition: all 0.5s ease;
        position: relative;
        font-size: 14px;
        color: #474747;
        height: 100%;
        text-align: left;
      }
      
      .dropdown .select {
        cursor: pointer;
        display: block;
        padding: 10px;
      }
      .dropdown .select > .chevron-down {
        font-size: 13px;
        color: #888;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        float: right;
        line-height: 20px;
      }
      .dropdown:hover {
        box-shadow: 0 0 4px rgb(204, 204, 204);
      }
      .dropdown:active {
        background-color: #f8f8f8;
      }
      .dropdown.active:hover,
      .dropdown.active {
        box-shadow: 0 0 4px rgb(204, 204, 204);
        border-radius: 2px 2px 0 0;
        background-color: #f8f8f8;
      }
      .dropdown.active .select > .chevron-down {
        transform: rotate(-90deg);
      }
      .dropdown .dropdown-menu {
        position: absolute;
        background-color: #fff;
        width: 100%;
        left: 0;
        margin-top: 1px;
        box-shadow: 0 1px 2px rgb(204, 204, 204);
        border-radius: 0 1px 2px 2px;
        overflow: hidden;
        display: none;
        max-height: 144px;
        overflow-y: auto;
        z-index: 9;
      }
      .dropdown .dropdown-menu li {
        padding: 10px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
      .dropdown .dropdown-menu {
        padding: 0;
        list-style: none;
      }
      .dropdown .dropdown-menu li:hover {
        background-color: #f2f2f2;
      }
      .dropdown .dropdown-menu li:active {
        background-color: #e2e2e2;
      }

      }

`;



export default SearchFilter