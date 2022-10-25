import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CardModal = ({select, setModal}) => {


  // Generate image
  let source = "https://" + `picsum.photos/id/${select.id}/200/300`;

  return (
    <Container>
        <div id="open-modal" className="modal-window">
            <div>
                <div onClick={() => setModal(false)} className="modal-close"><FontAwesomeIcon icon={faXmark} size="lg"/></div>
                <Header>
                  <p>Project {select.nom}</p>
                </Header>

                <Body>

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

`

const Header = styled.div`

p {
    font-size: 150%;
    margin: 0 0 15px;
}

`;

const Body = styled.div`

text-align: justify;

`;
  

export default CardModal