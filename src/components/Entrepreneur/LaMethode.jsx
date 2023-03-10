import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import vidOne from '../../assets/images/1st-action.gif';
import vidTwo from '../../assets/images/2nd-action.gif';
import vidThree from '../../assets/images/3rd-action.gif';

const LaMethode = () => {
    const theme = useTheme();
    return (
        <LaMethodeStyled  theme={theme}>
            <div className='left-container'>
                <h3 className='title'>Notre méthode</h3>
                <div className='text-container'>
                    <h5>Evaluation d’éligibilité</h5>
                    <p>Un outil clé en main pour évaluer votre projet vis-à-vis des exigences des investisseurs et challenger votre business model</p>
                </div>
                <div className='text-container'>
                    <h5>Préparation</h5>
                    <p>Des ressources exclusives pour préparer les documents indispensables à la levée de fonds</p>
                </div>
                <div className='text-container'>
                    <h5>Accompagnement</h5>
                    <p>Un expert vous accompagne pour parfaire votre pitch et gérer votre relation avec les investisseurs (négociation, due dilligence, valorisation du projet, closing)</p>
                </div>
                <div className='text-container'>
                    <h5>Mise en relation avec les investisseurs</h5>
                    <p>Nous vous connectons à des investisseurs pertinents et identifions les sources de financements disponibles (subventions, AMI, AAP) pour votre projet.</p>
                </div>
            </div>
            <div className='right-container'>
                <div className='child two-premier'>
                    <div className='div-one'>
                        <img src={vidOne} alt='Bheti-connect-base-illustration' />
                    </div>
                    <div className='div-two'>
                        <img src={vidTwo}  alt='Bheti-connect-base-illustration'/>
                    </div>
                </div>
                <div className='child neighbor-div'>
                    <img src={vidThree} alt='Bheti-connect-base-illustration' />
                </div>
            </div>
        </LaMethodeStyled>
        )
}

const LaMethodeStyled = styled.section`
    display: grid;
    width: 100%;
    background: ${props => props.theme.colorBlack};
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding-top: 5rem !important;
    padding-top: 1rem;
    padding-left: 18rem;
    padding-right: 18rem;
    padding-bottom: 6rem;
    @media only screen and (max-width: 768px){
        padding-top: 0rem;
        padding-left: 1rem;
        padding-right: 15rem;
        padding-bottom: 0rem;
        }
    .left-container{
        h3{
            color: ${props => props.theme.colorWhite};
        }
        p{
            padding: 1.2rem 0;
        }
        .title{
            font-size: 3rem;
            margin-bottom: 40px;
        } 
        .text-container{
            h5{
                color: ${props => props.theme.colorWhite};
            }
            @media all and (max-width: 2500px) {
                font-size: 19px;
                h5{
                    font-size: 21px;
                }
            }
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                font-size: 20px;
                h5{
                    font-size: 22px;
                }
            }
        }
        @media only screen and (max-width: 525px){
            width: 250px;
            font-size: 16px;
                h5{
                    font-size: 10px;
                }
                p {
                    font-size: 17px;
                }
                .title{
                    font-size: 2rem;
                    width: 70vw;
                    margin-left: 10vw;

                }
                margin-left: -250px;
        }
        //Left-Container Responsive Design
        @media all and (max-width: 2500px){
            width: 500px;
            margin-left: -100px;
        }
        @media all and (max-width: 1800px){
            width: 600px;
            margin-left: -120px;
        }
        @media all and (max-width: 1500px){
            width: 470px;
            margin-left: -140px;
        }
        @media all and (max-width: 1300px){
            width: 400px;
            margin-left: -5vw;
        }
        @media all and (max-width: 1080px){
            width: 400px;
            margin-left: -180px;
        }
        @media all and (max-width: 525px){
            width: 300px;
            margin-left: 50px;
            margin-top: -100px;
        }
        @media all and (max-width: 375px){
            width: 310px;
            margin-left: 30px;
            
        }
    }
    .right-container{
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-gap: 4px; 
        width: 120%;
        .two-premier{
            margin-left:auto;
            margin-right:auto;
            height:auto; 
            width:auto;
            .div-one{
                img{
                    width: 100%;
                }
            }
            .div-two{
                img{
                    width: 100%;
                }
            }
        }
        .neighbor-div{
            img{
                width: 100%;
            }
        }
        @media screen and (min-width: 1150px) {
                    width: 700px;
                    height: 300px;
                    margin-left: 5px;
                    margin-top: 25%;
	            }
        @media only screen and (max-width: 1440px) and (min-width: 1350px) {
            margin-top: 250px;
        }
        @media only screen and (max-width: 768px) {
            width: 200px;
            height: 500px;
        }
        @media only screen and (max-width: 525px) {
            visibility: hidden;
        }
    }

    @media all and (max-width: 2500px) {
        .right-container{
            width: 130%;
            margin-top: 200px;
            margin-left: -100px;
        }
    }
    @media all and (max-width: 1800px) {
        .right-container{
            width: 140%;
            margin-top: 180px;
            margin-left: -10%;
        }
    }
    @media all and (max-width: 1500px) {
        .right-container{
            width: 140%;
            margin-top: 220px;
            margin-left: -2%;
        }
    }
    @media all and (max-width: 1300px) {
        .right-container{
            display: inline-block;
            width: 100%;
            margin-top: 20vh;
            margin-left: 10vw;
        }
    }
    @media all and (max-width: 1080px) {
        .right-container{
            width: 180%;
            margin-top: 150px;
            margin-left: 20%;
            .neighbor-div{
                img{
                    width: 100%;
                }
            }
        }
    }
    @media all and (max-width: 960px) {
        display: inline-block;
        .right-container{
            width: 110%;
            .neighbor-div{
                img{
                    width:100%;
                }
            }
        }

        .left-container{
            width: 120%;
            margin: auto;
            .text-container{
                width: 400px;
            }
        }

    }
    @media all and (max-width: 770px) {
        .right-container{
            position: relative;
            width: 150%;
            .neighbor-div{
                img{
                    width:100%;
                }
            }
        }

        .left-container{
            width: 120%;
            margin: auto;
        }
    }
    @media all and (max-width: 440px) {
        .left-container{
            width: 80%;
            .text-container {
                width: 320px;
            }
        }
        .right-container{
            width: 130%;
            height: 200px;
            margin-top: 200px;
            margin-left: -100px;
        }
    }
    @media all and (max-width: 380px) {
       
        .right-container{
            width: 130%;
            height: 200px;
            margin-top: 200px;
            margin-left: -100px;
        }
    }
    @media all and (max-width: 320px) {
        .left-container{
            width: 80%;
            .text-container {
                width: 270px;
            }
        }
    }
`;

export default LaMethode;