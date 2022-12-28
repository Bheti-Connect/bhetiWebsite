import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go';
import { useTheme } from '../../context/themeContext';
import Select from 'react-select';


const SearchFilter = ({setQuery, setTrie}) => {

  const options = [
    { value: 'Recent', label: 'Recent' },
    { value: 'Ancien', label: 'Ancien' },
  ]

  const valueSearch = useRef(null);
  const theme = useTheme();

  // Handle query
  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(valueSearch.current.value)
  }
  // Handle trie
  const handleChange = (selectedOption) => {
    
    setTrie(selectedOption.value);

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
          placeholder={"Trier par..."}
          onChange={handleChange}
          options={options}
          className='select'
          isSearchable={false}
        />

        </div>
      </ContainerFilter>
    </SearchBox>
  )
}

// style CSS

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
        width: 80%;
        
        .select{
          top:-8px;
          font-size: 13px;
          color: ${props => props.theme.colorBheti};
        }
        .select > div{
          width: 150%;
          font-weight: 600;
          background: #F0F3F4;
          border:none;
          box-shadow: none;
        }

      }

`;



export default SearchFilter