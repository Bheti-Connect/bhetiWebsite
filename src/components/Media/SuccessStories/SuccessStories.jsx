import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/themeContext';
import { GrAppsRounded } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import SearchFilter from '../../Investisseur/SearchFilter';
import CardSuccess from './CardSuccess';
import axios from 'axios';
import LoaderSuccess from './LoaderSuccess';
import CardModalSuccess from './CardModalSuccess';

const SuccessStories = () => {
  // useState of pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [initPage, setInitPage] = useState(-1);
  // query useState for search
  const [query, setQuery] = useState("")
  // select card useState
  const [select, setSelect] = useState(null)
  // cards data
  const [data, setData] = useState([])
  // Modal
  const [modal, setModal] = useState(false)
  // Loading : React content loader
  const [loading, setLoading] = useState(true)
  // Trie : Recent and Ancien
  const [trie, setTrie] = useState("")
  // Theme
  const theme = useTheme()

  // handle for receive data and set in useState
  const handleSetData = (response) => {
    setCurrentPage(response.meta.current_page);
    setTotalPage(response.meta.last_page);
    setItemsPerPage(response.meta.limit);
    setData(response.data);
  }

  // GET data from API
  const getData = () => {
    let source = "https://bheti-connect.smirltech.com/api/entrevues";
    axios.get(source).then(res => {
      handleSetData(res.data)
    }).catch((error) => console.log(error))
  }

  // Search data from API
  const searchData = () => {
    // API : Search
    let source = "https://bheti-connect.smirltech.com/api/entrevues"
    // Body POST
    let toSend = {
      search: {
        value: `${query}`
    }
    }
    // Get research
    if (query)
    {
      axios.post(source, toSend).then((resp) =>{
        handleSetData(resp.data)
      }).catch((error) => {
        console.log(error);
      })
      setPaginationSelect("query")
    }
  }

  // Get Trie data with id as field from API
  const handleTrieData = () => {
    let source = "https://bheti-connect.smirltech.com/api/entrevues"
    let toSend = ""

    if (trie == "Recent")
    {
      toSend = {
        "sort":[ {
          "field": "id",
          "direction": "desc"
        }]
      }
      setPositionTrie("Recent")
    }

    if (trie == "Ancien")
    {
      toSend = {
        "sort":[ {
          "field": "id",
          "direction": "asc"
        }]
      }
      setPositionTrie("Ancien")
    }

    if (toSend)
    {
      axios.post(source, toSend).then(res => {
        handleSetData(res.data)
      }).catch(error => console.log(error))
      setPaginationSelect("trieData")
    }
  }

  // handle change page
  let changePage = ({selected}) => {
    var pageNumber = selected + 1
    let source = ""
    let request = ""

    if (paginationSelect == "query"){
      source = `https://bheti-connect.smirltech.com/api/projets/search?page=${pageNumber}`
      request = {
        "search": {
          "value": `${query}`
      }
      }
    }
    else if (paginationSelect == "trieData")
    {
      source = `https://bheti-connect.smirltech.com/api/projets/search?page=${pageNumber}`
      if(positionTrie == "Recent")
      {
        request = {
          "sort":[ {
            "field": "id",
            "direction": "desc"
          }]
        }
      }
      if (positionTrie == "Ancien")
      {
        request = {
          "sort":[ {
            "field": "id",
            "direction": "asc"
          }]
        }
      }
    }
    else{

      source = `https://bheti-connect.smirltech.com/api/projets?page=${pageNumber}`

    }

    // get Add for another page
   if (request)
    {
      axios.post(source, request).then((resp) =>{
        handleSetData(resp.data)
      }).catch((error) => {
        console.log(error);
      })
    }
    else{
      axios.get(source).then(res => {
        handleSetData(res.data)
      }).catch(error => console.log(error))
    }
  }


  // display items
  let displayItems = data.map((item, index) => {
    return <CardSuccess key={index} item={item} setModal={setModal} setSelect={setSelect} />
  })



  // First UseEffect
  useEffect(() => {
    let waiting = setTimeout(() => {
      setLoading(false)
    }, 4000);

    getData()

    return () => {
      clearTimeout(waiting)
    }
  }, [])


   // UseEffect if currentPage change
  useEffect(() => {
    setLoading(true)
    const waiting = setTimeout(() => {
      setLoading(false)
    }, 4000);

    setInitPage(currentPage - 1)

    return () => {
      clearTimeout(waiting)
    }
  }, [currentPage, query])

  // useEffect of query
  useEffect(() => {
    searchData()
  }, [query])

  // useEffect of trie
  useEffect(() => {
    handleTrieData()
  }, [trie])




  return (

    <Container>
     <HeaderText theme={theme}>
            <h3 className='head-text'><span className='icon-hands'>👏</span>Les success stories</h3>
            <div className="containerMenu">
                <div className='Box'>

                    {/* menu */}
                    <div className='menu'>
                        {/* Tous */}
                        <p className='active' onClick={() => getData()}><GrAppsRounded/>Galerie</p>
                    </div>

                    {/* Filter and search */}
                    <SearchFilter setQuery={setQuery} setTrie={setTrie} />
                </div>
                <hr/>
            </div>
            </HeaderText>


            <AllSuccess theme={theme}>

              <AllCards>

              {
                  loading ? (<LoaderSuccess count={15}/>) : (displayItems)
              }

              </AllCards>

              {/* Pagination */}
              <ReactPaginate
              previousLabel={"Précédent"}
              nextLabel={"Suivant"}
              pageCount={totalPage}
              onPageChange={changePage}
              forcePage={initPage}
              breakLabel="..."
              pageRangeDisplayed={7}
              marginPagesDisplayed={1}
              containerClassName={"containerClassName"}
              pageClassName={"pageClassName"}
              previousLinkClassName={"previousLinkClassName"}
              nextLinkClassName={"nextLinkClassName"}
              disabledClassName={"disabledClassName"}
              activeClassName={"activeClassName"}
              />
            

            </AllSuccess>

            {
              modal && <CardModalSuccess select={select} setModal={setModal} />
            }

    </Container>

  )
}

// style CSS
const Container = styled.div`



`;

const AllCards = styled.div`
display: flex;
width: 76%;
justify-content: left;
margin:auto;
flex-wrap: wrap;
`;

const AllSuccess = styled.div`

.containerClassName {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items:center;
  user-select: none;
  font-size: 13px;
}

.containerClassName li {
  margin: 50px 10px;
}

.pageClassName{
  background-color: ${props => props.theme.colorGrey5};
  border-radius: 50px;
  cursor: pointer;
  padding: 4px 7px;
  transition: .3s ease;


  &:hover{
    background-color: ${props => props.theme.colorBheti};
  }

  a{
    color:white;
  }
}

.previousLinkClassName{
  color: ${props => props.theme.colorBheti};
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  &:hover{
    opacity: 0.7;
  }
}

.nextLinkClassName{
  color: ${props => props.theme.colorBheti};
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  &:hover{
    opacity: 0.7;
  }
}


.activeClassName{
  background-color: ${props => props.theme.colorBheti};
  color: white;
  border-radius: 50px;
}

.disabledClassName{

}



@media only screen and (max-width: 768px) {

  .containerClassName {
    font-size: 12px;
  }

  .previousLinkClassName{
    font-size: 15px;
  }

  .nextLinkClassName{
    font-size: 15px;
  }


}

@media only screen and (max-width: 578px) {

  .containerClassName {
    font-size: 10px;
  }

  .previousLinkClassName{
    font-size: 13px;
  }

  .nextLinkClassName{
    font-size: 13px;
  }

}


`;

const HeaderText = styled.div`

margin: 55px;

h3 {
  
  font-size: 25px;
  color: ${props => props.theme.colorPrimary};

}

p {
  margin: 10px 0;
  font-size: 14px;
}

.menu{
    display: flex;
    flex-direction:row;
    list-style: none;
    margin-bottom:-5px;

    svg{
        padding-top:4px;
        padding-right:3px;
    }
}

.menu p {
  margin-right: 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  font-style: normal;

  &:hover{
    color: ${props => props.theme.colorBheti};
  }

}

.containerMenu{
    margin-top: 30px;


    hr {
    margin-top: -9px;
    border: 0.5px solid rgb(0 0 0 / 11%);
    }
}

.containerMenu .Box{
    display: flex;
    justify-content: space-between;
    align-items:center;
}

.active {
    border-bottom: 2px solid ${props => props.theme.colorBheti};
}

@media only screen and (max-width: 768px) {
  h3{
    font-size: 20px;
  }

  p {
  font-size: 10px;
  }

  .menuSection li {
  padding-bottom: 10px;
  font-size: 15px;
  }

}

@media only screen and (max-width: 578px) {

  margin: 40px;

  .containerMenu .Box{
    flex-direction: column;
}

}

`;

export default SuccessStories