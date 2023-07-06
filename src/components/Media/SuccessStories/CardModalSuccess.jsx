import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../context/themeContext';
import { closeModal } from '../../../utils/FunctionsComponent';
import { ReactTinyLink } from 'react-tiny-link'
//import axios from 'axios';

const CardModalSuccess = ({select, setModal}) => {
  const [backColor, setBackColor] = useState(["#406880", "#978840", "#975450", "#636769", "#88456c", "#61534d"]);
  const theme = useTheme();
  const [link, setLink] = useState('');

  // get link preview
/*
  useEffect(() => {
    axios.get('http://localhost:3500/proxy').then((res) => {
      setLink(res.data);
    }).catch((err) => {
      console.log(err);
    })

    console.log(link)
  },[])
*/

  return (
    <Container onClick={(e) => closeModal(e.currentTarget, setModal)}>
        <div id="open-modal" className="modal-window close">
            <div>
                <div onClick={(e) => closeModal(e.currentTarget, setModal)} className="modal-close"><FontAwesomeIcon className='close' icon={faXmark} size="lg"/></div>
                <Header>
                  <img src={select.icon} className='icon-success' alt='media'/>
                  {/* Info  */}
                  <ul>
                    <li>
                      <span className="text-head">Secteurs</span> :{" "}
                      <ul className="secteurs">
                        {select.secteurs.map((secteur, index) => (
                          <li key={index} style={{backgroundColor: backColor[Math.floor(Math.random() * backColor.length)]}}>{secteur}</li>
                        ))}
                      </ul>
                    </li>
                    <li><span className="text-head">Type</span> : <span className='background' style={{backgroundColor: backColor[Math.floor(Math.random() * backColor.length)]}}>{select.type}</span></li>
                    <li>
                      <span className="text-head">Stage</span> : <span className='background' style={{backgroundColor: backColor[Math.floor(Math.random() * backColor.length)]}}>{select.stage ? select.stage : 'Vide'}</span>
                    </li>
                    <li>
                      <span className="text-head">Pays d'implantation</span> :
                      <ul className="secteurs">
                        {select.pays.map((p, index) => (
                          <li key={index} style={{backgroundColor: backColor[Math.floor(Math.random() * backColor.length)]}}>{p}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </Header>

                <Body theme={theme}>

                <div className='media-detail'>

                  <div className='image-modal'>
                    <img src={select.image} alt='media'/>
                  </div>

                </div>

                {/* Video */}
                <div className='preview-link'>
                <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url={select.linkedin}
                proxyUrl="https://proxy.cors.sh"
                requestHeaders={{
                  "x-cors-api-key": "temp_ebe1f3e4e94fbfa59696ce8cd28e0210"
                }}
                 />
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
    cursor: pointer;
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

margin-top: 20px;
margin-bottom: 20px;

.icon-success{
  height: 150px;
  width: 150px;
}

p {
    font-size: 150%;
    margin: 0 0 15px;
}

ul {
    margin: 15px 0;

    .secteurs {
      display: inline-flex;
      list-style: none;
      font-size: 12px;
      padding: 0;
      margin-bottom: 0;
      margin-top: 0;
      li {
        color: white;
        border-radius: 6px;
        padding: 2px 9px;
        margin-right: 10px;
        margin-bottom: 0;
        margin-top: 0;
      }
    }
  }

  ul li {
    margin-bottom: 8px;
  }

  .background{
    color: white;
    font-size: 12px;
    border-radius: 6px;
    padding: 2px 9px;
  }

`;



export default CardModalSuccess