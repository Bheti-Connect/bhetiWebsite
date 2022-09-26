import styled from 'styled-components'
//import NavBar from '../NavBar';
import { useTheme } from '../../context/themeContext';
import { GrAppsRounded } from "react-icons/gr";
//import ReactPaginate from 'react-paginate';
import SearchBar from './SearchBar';

const Investisseur = () => {

    const theme = useTheme()

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

            
        </InvestisseurStyled>
    )
}

// Style CSS with styled component

const InvestisseurStyled = styled.section`


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