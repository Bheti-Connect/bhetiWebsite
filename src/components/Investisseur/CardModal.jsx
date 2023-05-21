import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/themeContext";
import { Link } from "react-router-dom";
import { closeModal } from "../../utils/FunctionsComponent";

const CardModal = ({ select, setModal, connect }) => {
  const theme = useTheme();

  const handleFlouter = () => {
    let flouter = document.querySelectorAll(".cible-flouter");

    if (connect == false) {
      for (var i = 0; i < flouter.length; i++) {
        if (!flouter[i].classList.contains("flouter")) {
          flouter[i].classList.add("flouter");
        }
      }
    } else {
      for (var i = 0; i < flouter.length; i++) {
        flouter[i].classList.remove("flouter");
      }
    }
  };

  // flouter text
  useEffect(() => {
    handleFlouter();
  }, [connect]);

  return (
    <Container onClick={(e) => closeModal(e.currentTarget, setModal)}>
      <div id="open-modal" className="modal-window close">
        <div>
          <div
            onClick={(e) => closeModal(e.currentTarget, setModal)}
            className="modal-close"
          >
            <FontAwesomeIcon className="close" icon={faXmark} size="lg" />
          </div>
          <Header>
            <p>Projet {select.nom}</p>
            <ul>
              <li>
                <span className="text-head">Secteurs</span> :{" "}
                <ul className="secteurs">
                  {select.secteurs.map((secteur) => (
                    <li key={secteur}>{secteur}</li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="text-head">Besoin de financement</span> :{" "}
                {select.financement}
              </li>
              <li>
                <span className="text-head">Siège</span> :{" "}
                {select.siege ? select.siege : "N'est pas mentionné"}
              </li>
              <li>
                <span className="text-head">Type</span> :{" "}
                {select.type ? select.type : "N'est pas mentionné"}
              </li>
            </ul>
          </Header>

          <Body theme={theme}>
            <div className="project-detail">
              <div>
                <img src={select.image} alt="project" />
              </div>

              <div className="detail">
                <h3>Projet {select.nom}</h3>
                <p>{select.description}</p>
              </div>
            </div>

            {/* Pourquoi maintenant ?  */}
            <div className="item-detail">
              <h3>
                <span>&#x2022;</span> Pourquoi maintenant ?
              </h3>
              <ul>
                {select.pourquoi.map((item, index) => (
                  <li key={index} /*className="cible-flouter flouter"*/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Problèmes  */}
            <div className="item-detail">
              <h3>
                <span>&#x2022;</span> Problèmes
              </h3>
              <ul>
                {select.problemes.map((item, index) => (
                  <li key={index} /*className="cible-flouter flouter"*/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions  */}
            <div className="item-detail">
              <h3>
                <span>&#x2022;</span> Solutions
              </h3>
              <ul className="solutions">
                {select.solutions.map((item, index) => (
                  <li key={index} /*className="cible-flouter flouter"*/>
                    {item.title}
                    <ul className="description-container">
                      {
                        item.description.map((elem, index) => (
                          <li className="description" key={index}>{elem}</li>
                        ))
                      }
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipe  */}
            <div className="item-detail">
              <h3>
                <span>&#x2022;</span> Equipe
              </h3>
              <ul>
                {select.equipe.map((item, index) => (
                  <li key={index} /*className="cible-flouter flouter"*/>
                    {item.title}
                    <ul className="description-container">
                      {
                        item.description.map((elem, index) => (
                          <li className="description" key={index}>{elem}</li>
                        ))
                      }
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Modal  */}
            <div className="item-detail">
              <h3>
                <span>&#x2022;</span> Business Modal
              </h3>
              <ul>
                {select.business_model.map((item, index) => (
                  <li key={index} /*className="cible-flouter flouter"*/>
                    {item.title}
                    <ul className="description-container">
                      {
                        item.description.map((elem, index) => (
                          <li className="description" key={index}>{elem}</li>
                        ))
                      }
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            {/* KPI  */}
            <div className="item-detail">
              <h3>
                <span>&#x2022;</span> KPI
              </h3>
              <ul>
                {select.business_model.map((item, index) => (
                  <li key={index} /*className="cible-flouter flouter"*/>
                    {item.title}
                    <ul className="description-container">
                      {
                        item.description.map((elem, index) => (
                          <li className="description" key={index}>{elem}</li>
                        ))
                      }
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="item-images">
            {
              select.source.map((item, index) => (
                <img key={index} src={item} alt="source" />
              ))
            }
            </div>

            <div className="deck">
              {connect ? (
                <Link to={"/waitlist"} className="Btn-deck">
                  Récevoir le deck
                </Link>
              ) : (
                <Link to={"/waitlist"} className="Btn-deck">
                  Récevoir le deck
                </Link>
              )}
            </div>
          </Body>
        </div>
      </div>
    </Container>
  );
};

// Style CSS

const Container = styled.div`
  height: 100%;
  font-size: 16px;

  .modal-window {
    position: fixed;
    background-color: rgba(197, 194, 194, 0.7);
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
      color: #eb1d36;
    }
  }

  /* CSS for blur */

  .flouter {
    filter: blur(2.5px);
  }

  .text-head {
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }

  @media only screen and (max-width: 712px) {
    .modal-window {
      & > div {
        width: 600px;
        height: 650px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .modal-window {
      & > div {
        width: 500px;
        height: 650px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
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

    .secteurs {
      display: inline-flex;
      list-style: none;
      font-size: 12px;
      padding: 0;
      margin-bottom: 0;
      margin-top: 0;
      li {
        background-color: #700b0b;
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

  .item-detail {
    h3 {
      padding: 10px;
      padding-right: 0px;
      display: grid;
      grid-template-columns: auto 1fr;
      background-color: ${(props) => props.theme.colorBheti};
      color: white;
      font-size: 13px;
      grid-gap: 10px;
      border: 1px solid transparent;
      border-radius: 1px;
      margin: 15px 0;
      span {
        font-size: 14px;
      }
    }

    li {
      list-style: inside;
    }

    .description {
      list-style: circle;
      margin-left: 50px;
    }

  }

  .item-images {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 80px;
    img {
      height: auto;
      width: 80%;
      margin-right: 20px;
      object-fit: cover;
      margin-bottom: 20px;
      
    }
  }

  .deck {
    text-align: center;
    margin-top: 30px;
  }

  .Btn-deck {
    color: white;
    background-color: ${(props) => props.theme.colorBheti};
    opacity: 0.7;
    margin: auto;
    width: 25%;
    padding: 5px;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
    font-family: "Inter", sans-serif;
    text-transform: uppercase;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    will-change: transform;

    &:hover {
      opacity: 1;
      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -2px, 0);
    }

    &:active {
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
      transform: translate3d(0, 1px, 0);
    }
  }

  @media only screen and (max-width: 500px) {
    .project-detail {
      display: flex;
      flex-direction: column;
      img {
        width: 325px;
        margin: 10px auto;
      }
    }
  }
`;

export default CardModal;
