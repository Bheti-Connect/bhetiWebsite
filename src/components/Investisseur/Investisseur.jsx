import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
//import NavBar from '../NavBar';
import { useTheme } from '../../context/themeContext';
import { GrAppsRounded } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import SearchBar from './SearchBar';
import Cards from './Cards';

const Investisseur = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    // cards data
    const [data, setData] = useState([])

    const theme = useTheme()

    const addData = () => {
        let tab = []
        for(let i = 1; i<=100; i++)
        {
            tab.push(<Cards key={i} number={i}/>)
        }
        setData(tab)
    }

    useEffect(() => {
        addData()
    }, [])
    

    // handle menu : tous, startup and PME
    const handleMenu = (e) => {
        let menus = document.querySelectorAll(".menuSection li");
        let valid = e.target.tagName.toLowerCase()

        if(!e.target.classList.contains("active") && valid == "li")
        {
        for(var i = 0; i<menus.length; i++)
        {
            if(menus[i].classList.contains("active"))
            {
                menus[i].classList.remove("active")
            }
        }
        e.target.classList.add("active")
        }
    
    }


    // page visited
    let pagesVisited = currentPage * itemsPerPage
    // display items
    let displaItems = data.slice(pagesVisited, pagesVisited + itemsPerPage).map(item => item)
    // number of page
    let pageCount = Math.ceil(data.length / itemsPerPage)
    // handle change page
    let changePage = ({selected}) => {
        setCurrentPage(selected)
    }

    




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
                    <SearchBar />
                    
                </div>
                <hr/>
            </div>
            </HeaderText>


            <AllProject>

            <AllCards>

            {
                displaItems
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
}

.containerClassName li {
  margin: 50px 10px;
}

.pageClassName{
  background-color: gray;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px;
  transition: .3s ease;


  &:hover{
    background-color: purple;
  }
}

.previousLinkClassName{
  background-color: gray;
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.nextLinkClassName{
  background-color: gray;
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}


.activeClassName{
  background-color: purple;
  color: white;
  border-radius: 50px;
  padding: 5px;
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