import styled from 'styled-components'
import NavBar from '../NavBar';
import { useTheme } from '../../context/themeContext';

const Investisseur = () => {

    const theme = useTheme()

    return (
        <InvestisseurStyled>
            <HeaderText theme={theme} >
            <h3>Découvrez des opportunités d'investissements exclusives</h3>
            <p>Vous trouverez ci-dessous des informations clés sur des startups et PME qui ouvrent leur capital pour prendre une position décisive sur leurs
            marchés.<br/>Vous souhaitez en savoir plus sur ces opportunités et/ou rencontrer les fondateurs ? Cliquez sur "Recevoir le deck".</p>
            </HeaderText>
        </InvestisseurStyled>
    )
}

// Style CSS with styled component

const InvestisseurStyled = styled.section``;

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

`;


export default Investisseur