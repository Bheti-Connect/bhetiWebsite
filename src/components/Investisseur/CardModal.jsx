import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/themeContext';
import { Link } from 'react-router-dom';
import { closeModal } from '../../utils/FunctionsComponent';

const CardModal = ({select, setModal, connect}) => {
  const theme = useTheme();

  // Format currency Euro
  let currencyEuro = new Intl.NumberFormat('de-DE', { style : 'currency', currency: 'EUR'})

  // Generate image
  let source = "https://" + `picsum.photos/id/${Math.floor(Math.random() * 200)}/200/300`;


  const handleFlouter = () => {
    let  flouter = document.querySelectorAll(".cible-flouter")

    if(connect == false){
      
      for(var i = 0; i < flouter.length; i++)
      {
        if(!flouter[i].classList.contains("flouter"))
        {
          flouter[i].classList.add("flouter")
        }
      }

    }else{

      for(var i = 0; i < flouter.length; i++)
      {
        flouter[i].classList.remove("flouter")
      }

    }

  }

  // flouter text
  useEffect(() => {
    handleFlouter()
  }, [connect])


  return (
    <Container onClick={(e) => closeModal(e.target, setModal)}>
        <div id="open-modal" className="modal-window close" >
            <div>
                <div onClick={(e) => closeModal(e.target, setModal)} className="modal-close"><FontAwesomeIcon className="close" icon={faXmark} size="lg"/></div>
                <Header>
                  <p>Projet {select.nom}</p>
                  <ul>
                    <li><span className='text-head'>Secteurs</span> : N'est pas mentionné</li>
                    <li><span className='text-head'>Besoin de financement</span> : {select.financement ? (currencyEuro.format(parseInt(select.financement))) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Siège</span> : {select.siege ? (select.siege) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Stage</span> : {select.stade ? (select.stade) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Type</span> : {select.type ? (select.type) : ("N'est pas mentionné")}</li>
                  </ul>
                </Header>

                <Body theme={theme}>

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
                  <h3>✅ Pourquoi maintenant ?</h3>
                  <p className='cible-flouter flouter'>{select.description ? (select.description) : ("")}</p>
                </div>

                {/* Problèmes  */}
                <div className='item-detail'>
                  <h3>🚨 Problèmes</h3>
                  <p className='cible-flouter flouter'>{select.problemes ? (select.problemes) : ("")}</p>
                </div>

                {/* Solutions  */}
                <div className='item-detail'>
                  <h3>☝ Solutions</h3>
                  <p className='cible-flouter flouter'>{select.solutions ? (select.solutions) : ("")}</p>
                </div>

                {/* Equipe  */}
                <div className='item-detail'>
                  <h3>👬 Equipe</h3>
                  <p className='cible-flouter flouter'>{select.equipe ? (select.equipe) : ("")}</p>
                </div>

                {/* Business Modal  */}
                <div className='item-detail'>
                  <h3>💰 Business Modal</h3>
                  <p className='cible-flouter flouter'>{select.business_model ? (select.business_model) : ("")}</p>
                </div>

                {/* KPI  */}
                <div className='item-detail'>
                  <h3>📊 KPI</h3>
                  <p className='cible-flouter flouter'>{select.kpi ? (select.kpi) : ("")}</p>
                </div>

                <div className='deck'>

                {
                  connect ? (<Link to={'/form-investisseur'} className='Btn-deck'>Récevoir le deck</Link>) : (<Link to={'/connexion'} className='Btn-deck'>Récevoir le deck</Link>)
                }
                
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

  /* CSS for blur */

  .flouter {
    filter:blur(2.5px);
  }

  .text-head{
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }



  @media only screen and (max-width: 712px){
    .modal-window {
    & > div {
      width: 600px;
      height: 650px;
    }
    }
  }

  @media only screen and (max-width: 600px){
    .modal-window {
    & > div {
      width: 500px;
      height: 650px;
    }
    }
  }

  @media only screen and (max-width: 500px){
    .modal-window {
    & > div {
      width: 400px;
      height: 650px;
    }
    }
  }
`;

const Header = styled.div`

p {
    font-size: 150%;
    margin: 0 0 15px;
}

ul {
  margin: 15px 0;
}

ul li {
  margin-bottom: 8px;
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
    border-radius: 10px;
  }
}

.detail h3 {
  margin-bottom: 10px;
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

.deck {
  text-align: center;
  margin-top: 30px;
}

.Btn-deck {
  color: white;
  background-color: ${props => props.theme.colorBheti};
  opacity: 0.7;
  margin: auto;
  width: 25%;
  padding: 5px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 3px 2px 0 rgba(0,0,0,0.1);
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  transition: background .3s, transform .3s, box-shadow .3s;
  will-change: transform;

  &:hover {
    opacity: 1;
    box-shadow: 0 4px 17px rgba(0,0,0,0.2);
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    transform: translate3d(0, 1px, 0);
  }
}

@media only screen and (max-width: 500px){
  .project-detail {
  display: flex;
  flex-direction: column;
  img{
    width: 325px;
    margin: 10px auto;
  }
  }
  }

`;

export default CardModal