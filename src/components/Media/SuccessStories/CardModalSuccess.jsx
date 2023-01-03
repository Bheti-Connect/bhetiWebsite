import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../context/themeContext';
import { closeModal } from '../../../utils/FunctionsComponent';
//import { ReactTinyLink } from 'react-tiny-link'
//import LinkPreview from './LinkPreview';

const CardModalSuccess = ({select, setModal}) => {

    const theme = useTheme(); 

    // Generate image
    let source = "https://" + `picsum.photos/id/${select.id}/200/300`; 


  return (
    <Container onClick={(e) => closeModal(e.target, setModal)}>
        <div id="open-modal" className="modal-window close">
            <div>
                <div onClick={(e) => closeModal(e.target, setModal)} className="modal-close"><FontAwesomeIcon className='close' icon={faXmark} size="lg"/></div>
                <Header>
                  <p>{select.pays}</p>
                </Header>
                
                {/* Info  */}
                <div className='item-detail'>
                    <ul>
                      <li><span>Entreprise  : </span>{select.pays}</li>
                      <li><span>Représentant : </span>{select.pays}</li>
                      <li><span>Secteur : </span>{select.pays}</li>
                      <li><span>Pays : </span>{select.pays}</li>
                    </ul>
                </div>

                <Body theme={theme}>

                <div className='media-detail'>

                  <div className='image-modal'>
                    <img src={source} alt='media'/>
                  </div>

                </div>

                {/* Video */}
                <div className='preview-link'>
                  {/*<LinkPreview url="https://www.linkedin.com/feed/update/urn:li:activity:6956518384989519872"/>*/}
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


.media-detail {
  display: flex;
  justify-content: center;

  .image-modal{
    margin-top: 30px;
    img {
    width: 600px;
    height: 300px;
    object-fit: cover;
    }
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

.preview-link{
  margin: 20px;
  width: 96%;
}

`;

const Header = styled.div`

p {
    font-size: 150%;
    margin: 0 0 15px;
}

`;



export default CardModalSuccess