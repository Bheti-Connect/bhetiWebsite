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
                  <p>Projet {select.nom}</p>
                  <ul>
                    <li>Secteurs : </li>
                    <li>Besoin de financement : {select.financement}</li>
                    <li>Siège : {select.siege}</li>
                    <li>Stage : {select.stade}</li>
                    <li>Type : {select.type}</li>
                  </ul>
                </Header>

                <Body>

                <div className='project-detail'>
                  <div>
                  <img src={source} alt='project'/>
                  </div>

                  <div className='detail'>
                    <h3>Projet {select.nom}</h3>
                    <p>{select.description}</p>
                  </div>
                </div>

                {/* Pourquoi maintenant ?  */}
                <div className='item-detail'>
                  <h3>Pourquoi maintenant ?</h3>
                  <p>{select.description}</p>
                </div>

                {/* Problèmes  */}
                <div className='item-detail'>
                  <h3>Problèmes</h3>
                  <p>{select.problemes}</p>
                </div>

                {/* Solutions  */}
                <div className='item-detail'>
                  <h3>Solutions</h3>
                  <p>{select.solutions}</p>
                </div>

                {/* Equipe  */}
                <div className='item-detail'>
                  <h3>Equipe</h3>
                  <p>{select.equipe}</p>
                </div>

                {/* Business Modal  */}
                <div className='item-detail'>
                  <h3>Business Modal</h3>
                  <p>{select.business_model}</p>
                </div>

                {/* KPI  */}
                <div className='item-detail'>
                <h3>KPI</h3>
                <p>{select.kpi}</p>
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

`

const Header = styled.div`

p {
    font-size: 150%;
    margin: 0 0 15px;
}

ul {
  margin: 15px 0;
}

`;

const Body = styled.div`

text-align: justify;

.project-detail {
  display: flex;
  justify-content: space-between;


  img {
    height: 200px;
    width: 280px;
    margin-right: 20px;
    object-fit: cover;
  }
}

.item-detail h3 {
  padding: 10px;
  padding-right: 0px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  background-color: lightblue;
  font-size: 13px;
  grid-gap: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: 15px 0;
}

`;
  

export default CardModal