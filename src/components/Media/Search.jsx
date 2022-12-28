import React, {useRef} from 'react';
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go';
import { useTheme } from '../../context/themeContext';

const Search = ({setQuery}) => {

  const valueSearch = useRef(null);
  const theme = useTheme();

  // Handle query
  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(valueSearch.current.value)
  }


  return (
    <SearchBox>
    {/* Search Bar */}
      <ContainerSearch theme={theme}>
        <form onSubmit={handleQuery} className="form">
          <button type='submit' className="btn-search"><GoSearch /></button>
          <input ref={valueSearch} type="text" className="input-search" placeholder="Recherche ..."></input>
        </form>
      </ContainerSearch>
    </SearchBox>
  )
}

// Style CSS
const SearchBox = styled.div`
margin-right:-50px;

@media only screen and (max-width: 765px) {
  margin-right:0;
}

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
outline: none;
cursor: pointer;
color: ${props => props.theme.colorBheti};
background-color: transparent;
}

@media only screen and (max-width: 1380px) {

  .input-search:focus{
    width: 150px;
  }

  .btn-search:focus ~ .input-search{
    width: 150px;
  }
}



@media only screen and (max-width: 1100px) {

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



@media only screen and (max-width: 765px) {

  .btn-search{
    font-size: 18px;
    color: white;
  }

  .input-search{
    width: 50%;
    color: white;
    transition: none;
    padding: 0;
    margin-left: 20px;
    margin-right: 20px;

    &:focus{
    width: 50%;
    color: white;
    }

    &::placeholder{
      font-size: 10px;
      color: white;
    }
  }

  .btn-search:focus ~ .input-search{
    width: 100%;
    }

  .form{
    background-color:  #700b0b;
    border-radius: 25px;
    height: 50px;
    margin-top: 50px;
  }


}

`;

export default Search