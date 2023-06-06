import styled from "styled-components";
import Logo from "../assets/images/bheti-white.png";
import { useTheme } from "../context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSlack,  } from "@fortawesome/free-brands-svg-icons";
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
    const theme = useTheme();
    return (
        <FooterContainer theme={theme}>
        <FooterContent>
            <FooterBlock>
            <FooterLogo>
                <img src={Logo} alt="logo-bheti" />
            </FooterLogo>
            <FooterLinks>
                <div className="finance-paragraph">
                    <p className="find-finance">Trouvez du financement avec nous</p>
                </div>
                <div className="b-nav-icons">
                <a href="https://www.linkedin.com/company/bheti-connect">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="icon icon-linkedin social"
                    />
                </a>
                <a href="https://join.slack.com/t/bheticonnect/shared_invite/zt-1vpdzs7pd-Q5f49fTUU_Um9L_TJ9ci3g">
                    <FontAwesomeIcon
                    icon={faSlack}
                    className="icon icon-slack social"
                    />
                </a>
                </div>
            </FooterLinks>
            </FooterBlock>
            <FooterBlock>
                <h3>Nos coordonnées</h3>
                <div className="coordonnees-container">
                    <MdEmail className="coordonnees-icons" />
                    <p>contact@bheticonnect.com</p> 
                </div>
                <div className="coordonnees-container">
                    <FaPhoneAlt className="coordonnees-icons" />
                    <p>+33(0) 644-086-378</p> 
                </div>
                <div className="coordonnees-container">
                    <MdLocationOn className="coordonnees-icons" />
                    <p>78 Avenue des Champs-Elysée<br/> 75008 Paris, France</p> 
                </div>
            </FooterBlock>
            <FooterBlock>
            <h3>Lien utiles</h3>
            <FooterLinks>
                <div className="elements">
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </div>
                <div className="elements">
                    <li>
                        <a href="/politique-de-confidentialite">Politique de confidentialité</a>
                    </li>
                </div>
                <div className="elements">
                    <li>
                        <a href="/foire-aux-questions">FAQ</a>
                    </li>
                </div>
            </FooterLinks>
            </FooterBlock>
        </FooterContent>
        </FooterContainer>
    );
    };

    const FooterContainer = styled.footer`
    background-color: #111111;
    padding: 100px 30px;
    `;

    const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (min-width: 768px) {
        width: 70%;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width: 1200px) {
        width: 85vw;
        }
    @media (max-width: 870px) {
        width: 85vw;
        }
    `;
    const FooterBlock = styled.div`
    margin-bottom: 20px;
    h3{
        color: #ced4d9;
        font-size: 1.1rem;
        margin-bottom: 10px;
        @media all and (max-width: 500px){
            text-align: left;
        }
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
    .coordonnees-container{
        display: flex;
        margin-bottom: 15px;
        p{  
            margin-top: 5px;
            font-size: .9rem;
            color: #797D7F;
        }
        .coordonnees-icons{
            color: #ced4d9;
            width: 23px;
            height: 23px;
            margin-right: 7px;
        }
        .coordonnees-elements{
            display: block;
            width: 80%;
        }
    }
    `;

    const FooterLogo = styled.h1`
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    img {
        width: 35%;
        @media (max-width: 440px) {
            display: block;
        float: left;
        }
    }
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
    
    `;

const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    .elements{
        margin-bottom: 15px;
    }
    .finance-paragraph{
        .find-finance{
            color: #797D7F;
            font-size: .9rem;
        }
        @media all and (max-width:500px) {
            display: inline-block;
            width: 100%;
            text-align: left;
        }
    }
    h5{
        color: #ced4d9;
        font-size: 1.9rem:
    }
    li {
        a {
            color: #797D7F;
            text-decoration: none;
            font-size: .85rem;
        &:hover {
            text-decoration: none;
        }
        }
        @media all and (max-width:500px){
            text-align: left;
        }
    }
    .b-nav-icons{
            display: flex;
            margin: 1.5rem 0px;
            width: 50%;
            align-items: start;
            .icon {
                color: aliceblue;
                width: 1.5rem;
                height: 1.5rem;
            }
            .icon-linkedin{
                :hover{
                    color: #ced4d9;
                }
            }
            .icon-slack{
                :hover{
                    color: #ced4d9 ;
                }
            }
        }
        .b-nav-icons a + a{
            margin-left: 1.2rem;
        }
`;

export default Footer;
