import React from 'react';
import styled from 'styled-components';
import UneMedia from '../../assets/icons/a_la_une_media.svg';
import VideoMedia from '../../assets/icons/Video_media.svg';
import {useTheme} from '../../context/themeContext';
import Search from './Search';

const Media = () => {

  const theme = useTheme();



  return (
    <Container>

        <SectionUne theme={theme}>
          <div className='head-text'>

            <div className='icon-media'>
              <img src={UneMedia} alt="a la une icon" />
            </div>

            <div>
              <h2>A LA UNE...</h2>
              <p>Chaque semaine, découvrez les figures comme les startups qui font bouger les lignes sur les  marchés africains</p>
            </div>
          </div>
          <div className='body-une'>

            <div className='cards-une'>

            <div className='card-1'>1</div>

            <div className='sub-card'>
              <div className='card-2'>2</div>
              <div className='card-3'>3</div>
            </div>

            </div>

            <div className='plus-consulter'>
            <h2>Les plus consultés</h2>

            <div className='item-consult'>
              <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
              <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
              <p className='item-date'>15 decembre 2022</p>
            </div>

            <div className='item-consult'>
              <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
              <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
              <p className='item-date'>15 decembre 2022</p>
            </div>

            <div className='item-consult'>
              <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
              <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
              <p className='item-date'>15 decembre 2022</p>
            </div>

            <div className='item-consult'>
              <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
              <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
              <p className='item-date'>15 decembre 2022</p>
            </div>

            <div className='item-consult'>
              <a href='#'>P.de Gaétan, PDG Fonds Pierre Castel</a>
              <p>Nelly Chatue-Diop, CEO Ejara, nous partage son parcours entre l'Afrique et l'Europe et revient sur les enjeux de la cryptomonaie.</p>
              <p className='item-date'>15 decembre 2022</p>
            </div>

            </div>

          </div>


        </SectionUne>

        <SectionEcouteVoir theme={theme}>

          <div className='head-text'>

            <div className='icon-media'>
              <img src={VideoMedia} alt="video icon" />
            </div>

            <div>
              <h2>Ecouter et voir</h2>
              <p>Apprenez de ceux qui analysent le climat des affaires pour piloter et prendre des décisions au quotidien</p>
            </div>
          </div>

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
                    <Search setQuery={setQuery} />
                </div>
                <hr/>
            </div>

          <AllMedia>

            <AllCards>

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

          </AllMedia>

        </SectionEcouteVoir>

    </Container>
  )
}


// Style CSS

const AllMedia = styled.div`



`;

const AllCards = styled.div`



`;

const Container = styled.div`



`;

const SectionUne = styled.div`
margin-bottom: 80px;

.head-text {
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  h2 {
    color: ${props => props.theme.colorBheti};
    margin-bottom: 5px;
  }

  p{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }

  .icon-media {
    margin-right: 30px;

    img{
      height: 70px;
      width: 80px;
    }
  }

}

.body-une {
  display: flex;
  justify-content: center;
  

  .plus-consulter h2 {
    color: ${props => props.theme.colorBheti};
    margin-bottom: 10px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;

  }
  .plus-consulter {
    width: 30%;
    margin-left: 40px;

    .item-consult {
      a{
        text-decoration: underline;
        font-size: 17px;
        
        &:hover{
          color:${props => props.theme.colorBheti};
        }
      }
      p{
        font-size: 14px;
        text-align: justify;
      }

      .item-date {
        text-align: right;
        font-size: 11px;
        margin-top: 10px;
      }
    }
  }

  .cards-une{
    display:flex;
    flex-direction: column;
    


    .card-1 {
      background-color: #700b0b;
      width: 600px;
      height: 238px;
      border-radius: 20px;
    }

    .sub-card {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;

      .card-2{
        background-color: #700b0b;
        width: 48%;
        height: 250px;
        border-radius: 20px;
      }

      .card-3{
        background-color: #700b0b;
        width: 48%;
        height: 250px;
        border-radius: 20px;
      }
    }

  }


}

`;

const SectionEcouteVoir = styled.div`

.head-text {
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  h2 {
    color: ${props => props.theme.colorBheti};
    margin-bottom: 5px;
  }

  p{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }

  .icon-media {
    margin-right: 30px;

    img{
      height: 70px;
      width: 110px;
    }
  }

}

`;

export default Media