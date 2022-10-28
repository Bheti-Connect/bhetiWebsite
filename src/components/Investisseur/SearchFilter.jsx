import React, {useRef} from 'react';
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go';

const SearchFilter = ({setQuery, setTrie}) => {

  const trieValue = ["Trier par ...", "Recent", "Ancien"]
  const valueSearch = useRef(null);

  // Handle query
  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(valueSearch.current.value)
  }

  // Handle trie
  const handleTrie = (e) => {
    setTrie(trieValue[e.target.value]);
  }


  return (
    <SearchBox>
    {/* Search Bar */}
      <ContainerSearch>
        <form onSubmit={handleQuery}>
          <button type='submit' className="btn-search"><GoSearch /></button>
          <input ref={valueSearch} type="text" className="input-search" placeholder="Votre recherche ..."></input>
        </form>
      </ContainerSearch>


      {/* Filter */}
      <ContainerFilter>
        <div className='filter'>
        <label htmlFor="trie-select"></label>
          <select name='trie' id='trie-select' onClick={handleTrie}>
          {
            trieValue.map((item, index) => {
              return <option key={index} value={index}>{item}</option>
            })
          }
          </select>
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
    color: #700b0b;
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

      .filter{

        #trie-select{
          border: none;
          border-radius: 2px;
          padding: 5px 0;
          background-color: #f0f3f4;
          cursor: pointer;
          font-weight: 600;
          color: #700b0b;
          font-size: 14px;

          &:focus {
            outline: none;
          }
        }
      }
`;



export default SearchFilter