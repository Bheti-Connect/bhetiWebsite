import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
//import NavBar from '../NavBar';
import { useTheme } from '../../context/themeContext';
import { GrAppsRounded } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import SearchFilter from './SearchFilter';
import Cards from './Cards';
//import axios from 'axios';
//import CardModal from './CardModal';

const Investisseur = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [ind, setInd] = useState(0)
    // query useState for search
    const [query, setQuery] = useState("")
    // select card useState
    const [select, setSelect] = useState(null)
    // cards data
    const [data, setData] = useState([])
    // search items of data
    //const [searchItems, setSearchItems] = useState([])

    const theme = useTheme()

    // GET data from API
    /*
    const getData = () => {
      let tab = []
      for(var i = 1; i<=20; i++)
      {
        console.log(i)
        let source = "https://" + `picsum.photos/id/${i}/info`;
        axios.get(source).then(res => {
          tab.push(res.data)
        }).catch(error => console.log("Erreur de l'url"))
      }
      setData(tab)
    }
    */

    // Add data in Card
    const addDataCard = () => {
      let tab = []
        if(ind == 1)
        {
          // Startup
          for(let i = 1; i<=50; i++)
          {
            tab.push(<Cards key={i} item={i} setSelect={setSelect}/>)
          }

        }else if (ind == 2){
          // PME
          for(let i = 51; i<=100; i++)
          {
            tab.push(<Cards key={i} item={i} setSelect={setSelect}/>)
          }
        }
        else{
          for(let i =1; i<=100; i++)
          {
            tab.push(<Cards key={i} item={i} setSelect={setSelect}/>)
          }
        }
        setData(tab)
    }

    // handle menu : tous, startup and PME
    const handleMenu = (e) => {
        let activeBtn = document.querySelector(".menuSection .active");
        let valid = e.target.tagName.toLowerCase()

        if(!e.target.classList.contains("active") && valid == "li")
        {
          activeBtn.classList.remove("active")
          e.target.classList.add("active")
        }

        // get index of active li
        let menus = document.querySelectorAll(".menuSection li");
        let tabForIndex = Array.prototype.slice.call(menus)

        for(var i = 0; i<tabForIndex.length; i++)
        {
          if(tabForIndex[i].classList.contains("active"))
          {
            setInd(i)
          }
        }

    }


    // page visited
    let pagesVisited = currentPage * itemsPerPage
    // display items
    let displayItems = data.slice(pagesVisited, pagesVisited + itemsPerPage).map(item => item )
    // number of page
    let pageCount = Math.ceil(data.length / itemsPerPage)
    // handle change page
    let changePage = ({selected}) => {
        setCurrentPage(selected)
    }

    useEffect(() => {
      //getData()
      addDataCard()
    }, [])

    useEffect(() => {

      addDataCard()

      if (currentPage != 0)
      {
        setCurrentPage(0)
      }
    }, [ind])


    return (
        <InvestisseurStyled>
            <HeaderText theme={theme} >
            <h3>Découvrez des opportunités d'investissements exclusives</h3>
            <p>Vous trouverez ci-dessous des informations clés sur des startups et PME qui ouvrent leur capital pour prendre une position décisive sur leurs
            marchés.<br/>Vous souhaitez en savoir plus sur ces opportunités et/ou rencontrer les fondateurs ? Cliquez sur "Recevoir le deck".</p>
            <div className="containerMenu">
                <div className='Box'>

                    {/* Section menu */}
                    <ul className='menuSection' onClick={handleMenu}>
                        {/* Tous */}
                        <li className='active'><GrAppsRounded/>Tous</li>
                        {/* Startup */}
                        <li ><GrAppsRounded/>Startup</li>
                        {/* PME */}
                        <li><GrAppsRounded/>PME</li>
                    </ul>

                    
                    
                    {/* Filter and search */}
                    <SearchFilter setQuery={setQuery} />
                    
                </div>
                <hr/>
            </div>
            </HeaderText>


            <AllProject theme={theme}>

              <AllCards>

              {
                  displayItems
              }

              </AllCards>

              {/* Pagination */}

              <ReactPaginate 
              previousLabel={"« Précédent"}
              nextLabel={"Suivant »"}
              pageCount={pageCount}
              onPageChange={changePage}
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

            {/*
              <CardModal />
            */}


        </InvestisseurStyled>
    )
}

// Style CSS with styled component

const InvestisseurStyled = styled.section`


`;

const AllCards = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
flex-wrap: wrap;
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
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  transition: .3s ease;


  &:hover{
    background-color: ${props => props.theme.colorBheti};
  }

  a{
    color:white;
  }
}

.previousLinkClassName{
  background-color: ${props => props.theme.colorGrey5};
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.colorBheti};
  }
}

.nextLinkClassName{
  background-color: ${props => props.theme.colorGrey5};
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.colorBheti};
  }
}


.activeClassName{
  background-color: ${props => props.theme.colorBheti};
  color: white;
  border-radius: 50px;
}

.disabledClassName{

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
    margin-bottom: -4px;

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

  &:hover{
    color: ${props => props.theme.colorBheti};
  }

}

.containerMenu{
    margin-top: 30px;


    hr {
    margin-top: -9px;
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

`;


export default Investisseur