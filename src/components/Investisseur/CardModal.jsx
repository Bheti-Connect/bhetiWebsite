import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CardModal = ({setModal}) => {



  return (
    <Container>
        <div id="open-modal" className="modal-window">
            <div>
                <div onClick={() => setModal(false)} className="modal-close"><FontAwesomeIcon icon={faXmark} size="lg"/></div>
                <Header>
                  <p>Project 1</p>
                </Header>

                <Body>


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi quasi deleniti consequatur, sit quae adipisci mollitia dignissimos recusandae sapiente officia a nihil at, asperiores numquam quas eum temporibus dolorum.
                Temporibus velit veniam, ratione consequuntur dicta magnam minima excepturi sed! Libero similique nesciunt adipisci ipsum cumque perferendis nostrum, atque temporibus rerum nisi architecto, dignissimos et tenetur eius excepturi vitae eum.
                Omnis harum facilis eaque dolor dicta eveniet dolorum, animi tempore ex obcaecati reprehenderit distinctio minima ipsum voluptates commodi inventore ipsam amet numquam velit dignissimos tenetur voluptatum soluta maiores consequuntur. Repellendus?
                Veritatis ullam blanditiis repudiandae harum cum! Nemo tenetur et libero exercitationem quos optio accusamus quaerat! Ut, dicta deserunt ab dignissimos praesentium ipsa, fugiat commodi ea nulla distinctio, aliquam sapiente quaerat.
                Suscipit aliquam facilis nisi dolorum voluptas a ipsam aliquid architecto alias, ratione modi laborum similique. Est similique aliquam perspiciatis nihil, obcaecati placeat perferendis cupiditate vel amet explicabo suscipit ad cumque!
                Qui dolores iure illo sed doloremque, provident eum impedit consectetur atque, excepturi aliquid magnam iste. Nesciunt nihil quisquam dicta eos qui, iusto, adipisci in deserunt id et explicabo odio porro.
                Maiores id minus adipisci soluta velit officiis sunt atque ipsum repudiandae blanditiis totam, voluptatem quod perspiciatis molestias in! Reiciendis voluptas iure officia molestias neque expedita, qui soluta perspiciatis facere totam?
                Esse ad laboriosam aliquid, repellendus maxime magnam, provident earum debitis perspiciatis qui iusto similique non fugit praesentium recusandae maiores incidunt. Vero assumenda obcaecati ratione cum modi enim itaque veniam ipsum?
                Eius debitis libero, quidem repellendus quia inventore, odio aliquam quas quis sunt rem molestias, voluptatibus explicabo? Libero, ad sed consequatur eaque assumenda vel, ipsum, voluptas aliquid consectetur possimus iusto sint.
                Amet vitae, delectus exercitationem officiis consectetur cumque sed dolorem dicta temporibus iure nulla odit ratione eum voluptatem possimus fugit molestiae quisquam blanditiis laborum repudiandae obcaecati repellat in commodi dignissimos. Autem?

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


`;

  
  
  /*
  
  body {
    font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,
      Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 600;
    color: black;
    
  }
   a {
    color: inherit;
    text-decoration: none;
  }
  .modal-window div:not(:last-of-type) {
    margin-bottom: 15px;
  }
  
  
  
  small {
    color: lightgray;
  }
  */
  
  

export default CardModal