import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/themeContext';
import { closeModal } from '../../utils/FunctionsComponent';

const CardMediaModal = ({select, setModal}) => {

  const theme = useTheme();



  return (
    <Container onClick={(e) => closeModal(e.currentTarget, setModal)}>
        <div id="open-modal" className="modal-window close">
            <div>
                <div onClick={(e) => closeModal(e.currentTarget, setModal)} className="modal-close"><FontAwesomeIcon className="close" icon={faXmark} size="lg"/></div>
                <Header>
                  <p>{select.title}</p>
                </Header>

                <Body theme={theme}>

                <div className='media-detail'>

                  <div>
                    <img src={select.image2} alt='media'/>
                  </div>

                  <div className='detail'>
                    <p>{select.subtitle}</p>
                    <p>{select.description}</p>
                  </div>

                </div>

                 {/* Info  */}
                 <div className='item-detail'>
                    <ul>
                      <li>{select.point}</li>
                    </ul>
                  </div>

                {/* Video */}
                <div className='item-detail'>
                  <h3>Lien du site</h3>
                  
                  <iframe width="620" height="315" src={select.youtube} allowfullscreen></iframe>
          
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
    cursor:pointer;
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