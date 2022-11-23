import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/themeContext';

const CardMediaModal = ({select, setModal}) => {

  const theme = useTheme();

  // Generate image
  let source = "https://" + `picsum.photos/id/${select.id}/200/300`;

  // handle disable modal
  const handleModal = () => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
    setModal(false);
  }


  return (
    <Container>
        <div id="open-modal" className="modal-window">
            <div>
                <div onClick={handleModal} className="modal-close"><FontAwesomeIcon icon={faXmark} size="lg"/></div>
                <Header>
                  <p>{select.poste}</p>
                </Header>

                <Body theme={theme}>

                <div className='media-detail'>

                  <div>
                    <img src={source} alt='media'/>
                  </div>

                  <div className='detail'>
                    <p>{select.description}</p>
                  </div>

                </div>

                 {/* Info  */}
                 <div className='item-detail'>
                    <ul>
                      <li><span>Entreprise  : </span>{select.entreprise}</li>
                      <li><span>Représentant : </span>{select.representant}</li>
                      <li><span>Secteur : </span>{select.secteur}</li>
                      <li><span>Pays : </span>{select.pays}</li>
                    </ul>
                  </div>

                {/* Video */}
                <div className='item-detail'>
                  <h3>Lien du site</h3>
                  
                  <iframe width="620" height="315" src="https://www.youtube.com/embed/2TlN_8oB6D4" title="Carrying You - Castle In The Sky - Tank Drum/ Steel Tongue Drum君をのせて 天空の城" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
                </div>

                </Body>
            </div>
        </div>
    </Container>
  )
}

// Style CSS

const Container = styled.div`
height: 100%;
font-size: 16px;

.modal-window {
    position: fixed;
    background-color: rgba(197, 194, 194, 0.70);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    transition: all 0.3s;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    & > div {
      width: 700px;
      height: 650px;
      overflow: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: white;
      word-wrap: break-word;
      border-radius: 1rem;
    }
  }

  .modal-close {
    color: #aaa;
    position: absolute;
    right: 0;
    text-align: center;
    top: 15px;
    width: 70px;
    &:hover {
      color: #EB1D36;
    }
  }

  .text-head{
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }


`;

const Body = styled.div`

text-align: justify;

.media-detail {
  display: flex;
  justify-content: space-between;


  img {
    height: 200px;
    width: 280px;
    margin-right: 20px;
    object-fit: cover;
    border-radius: 10px;
  }
}

.item-detail h3 {
  padding: 10px;
  padding-right: 0px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  background-color: ${props => props.theme.colorBheti};
  color: white;
  font-size: 13px;
  grid-gap: 10px;
  border: 1px solid transparent;
  border-radius: 1px;
  margin: 15px 0;
}

`;

const Header = styled.div`

p {
    font-size: 150%;
    margin: 0 0 15px;
}

`;

export default CardMediaModal