import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
//import NavBar from '../NavBar';
import { useTheme } from '../../context/themeContext';
import { GrAppsRounded } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import SearchFilter from './SearchFilter';
import Cards from './Cards';
import axios from 'axios';
import CardModal from './CardModal';
import LoaderReact from './LoaderReact';
//import iconBheti from "../../assets/icons/icon_bheti_design.png";
import Swal from 'sweetalert2';
import LinksAPI from './../../utils/LinksAPI';

const Investisseur = () => {
  // useState of pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0)
    const [initPage, setInitPage] = useState(-1)
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
    // Theme
    const theme = useTheme()
    // Trie : Recent and Ancien
    const [trie, setTrie] = useState("")
    // Position change pagination : Tous, Startup, pme
    const [paginationSelect, setPaginationSelect] = useState("tous")
    const [positionTrie, setPositionTrie] = useState("")

    // redirection
    const navigate = useNavigate()

// *******************************************************************************************

    // Test connexion Investisseur
    const [connect, setConnect] = useState(false)

// *******************************************************************************************

    //Ask to connect
    const handleConnect = () => {
  
      Swal.fire({
        title: "Se connecter",
        text: `Pour une meilleure experience sur la platforme, veuillez vous connecter ou procéder à la création de votre compte si ce n'est pas encore fait.`,
        icon: 'info',
        showCloseButton: true,
        iconColor: '#700b0b',
        confirmButtonText: 'Se connecter',
        confirmButtonColor: "#4BB543",
        confirmButtonAriaLabel: "sans-serif",
      }).then((result) => {
        if (result.isConfirmed)
        {
          navigate("/connexion")
        }
      })

    }

    // handle for receive data and set in useState
    const handleSetData = (response) => {
      setCurrentPage(response.meta.current_page);
      setTotalPage(response.meta.last_page);
      setItemsPerPage(response.meta.limit);
      setData(response.data);
    }


    // GET data from API
    const getData = () => {
      axios.get(LinksAPI.projets).then(res => {
        handleSetData(res.data)
      }).catch((error) => console.log(error))
    }


    // Change Section of data : Tous, PME ou STARTUP
    const changeSectionMenu = (position) => {

      if (position == "pme")
      {
        let pmeFilter = {filters: [{field: 'company_type', value: 'pme'}]}

        axios.post(LinksAPI.projetsSearch, pmeFilter).then(res => {
          handleSetData(res.data)
        }).catch((error) => console.log(error))

        setPaginationSelect("pme")

      }else if(position == "startup")
      {
        let startupFilter = {filters: [{field: 'company_type', value: 'startup'}]}

        axios.post(LinksAPI.projetsSearch, startupFilter).then(res => {
          handleSetData(res.data)
        }).catch((error) => console.log(error))
        setPaginationSelect("startup")
      }else{
        getData()
        setPaginationSelect("tous")
      }
    }


    // handle menu : tous, startup and PME for CSS
    const handleMenu = (e) => {
        let activeBtn = document.querySelector(".menuSection .active");
        let valid = e.target.tagName.toLowerCase()

        if(!e.target.classList.contains("active") && valid == "li")
        {
          activeBtn.classList.remove("active")
          e.target.classList.add("active")
        }
    }

    // Search data from API
    const searchData = () => {
      // Body POST
      let toSend = {
        search: {
          value: `${query}`
      }
      }
      // Get research
      if (query)
      {
        axios.post(LinksAPI.projetsSearch, toSend).then((resp) =>{
          handleSetData(resp.data)
        }).catch((error) => {
          console.log(error);
        })
        setPaginationSelect("query")
      }
    }

    // Get Trie data with id as field from API
    const handleTrieData = () => {
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
        axios.post(LinksAPI.projetsSearch, toSend).then(res => {
          handleSetData(res.data)
        }).catch(error => console.log(error))
        setPaginationSelect("trieData")
      }
    }


    // handle change page
    let changePage = ({selected}) => {
      var pageNumber = selected + 1
      let request = ""

      switch (paginationSelect) {
        case "pme":
          request = {filters: [{field: 'company_type', value: 'pme'}]}
          break;
        case "query":
          request = {"search": {"value": `${query}`}}
          break;
        case "startup":
          request = {filters: [{field: 'company_type', value: 'startup'}]}
          break;
        case "trieData":
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
          break;

        default:
          break;
      }

     // get Add for another page
     if (request)
      {

        console.log(request);
        axios.post(LinksAPI.projetsSearchPage(pageNumber), request).then((resp) =>{
          handleSetData(resp.data)
        }).catch((error) => {
          console.log(error);
        })
      }
      else{
        axios.get(LinksAPI.projetsPage(pageNumber)).then(res => {
          handleSetData(res.data)
        }).catch(error => console.log(error))
      }


    }

     // display items
     let displayItems = data.map((item, index) => {
      return <Cards key={index} item={item} setModal={setModal} setSelect={setSelect} />
    })



    // First UseEffect
    useEffect(() => {

      let waiting = setTimeout(() => {
        setLoading(false)
      }, 4000);

      getData()
      changeSectionMenu()

      if (connect == false)
      {
        waiting = setTimeout(() => {
          handleConnect()
        }, 10000)
      }

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
        <InvestisseurStyled>
            <HeaderText theme={theme}>
            <h3 className='hello'>Découvrez des opportunités d'investissements exclusives</h3>
            <p>Vous trouverez ci-dessous des informations clés sur des startups et PME qui ouvrent leur capital pour prendre une position décisive sur leurs
            marchés.<br/>Vous souhaitez en savoir plus sur ces opportunités et/ou rencontrer les fondateurs ? Cliquez sur "Recevoir le deck".</p>
            <div className="containerMenu">
                <div className='Box'>

                    {/* Section menu */}
                    <ul className='menuSection' onClick={handleMenu}>
                        {/* Tous */}
                        <li className='active' onClick={() => changeSectionMenu("tous")}><GrAppsRounded/>Tous</li>
                        {/* Startup */}
                        <li onClick={() => changeSectionMenu("startup")}><GrAppsRounded/>Startup</li>
                        {/* PME */}
                        <li onClick={() => changeSectionMenu("pme")}><GrAppsRounded/>PME</li>
                    </ul>

                    {/* Filter and search */}
                    <SearchFilter setQuery={setQuery} setTrie={setTrie} />
                </div>
                <hr/>
            </div>
            </HeaderText>


            <AllProject theme={theme}>

              <AllCards>

              {
                  loading ? (<LoaderReact count={15}/>) : (displayItems)
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
            

            </AllProject>

            {
              modal && <CardModal select={select} setModal={setModal} connect={connect}/>
            }


        </InvestisseurStyled>
    )
}

// Style CSS with styled component


const InvestisseurStyled = styled.section`

/*background : no-repeat center/80% url("../../assets/icons/icon_bheti_design.png") ;*/


`;

const AllCards = styled.div`
display: flex;
width: 89%;
justify-content: left;
margin:auto;
flex-wrap: wrap;
@media only screen and (max-width: 900px) {
  width: 86%;
}

@media only screen and (max-width: 415px) {
  width: 68%;
}

`;

const AllProject = styled.div`

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

.menuSection{
    display: flex;
    flex-direction:row;
    list-style: none;
    margin-bottom:-5px;

    svg{
        padding-top:4px;
        padding-right:3px;
    }
}

.menuSection li {
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


export default Investisseur