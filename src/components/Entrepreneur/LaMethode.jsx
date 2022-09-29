import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import vidOne from '../../assets/images/1st-action.gif';
import vidTwo from '../../assets/images/2nd-action.gif';
import vidThree from '../../assets/images/3rd-action.gif';


const LaMethode = () => {
    const theme = useTheme();
    return (
        <LaMethodeStyled className='u-pad-lg-2'  theme={theme}>
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
    grid-gap: 3rem;
    padding-top: 10rem !important;
    .left-container{
        h3{
            color: ${props => props.theme.colorWhite};
        }
        p{
            padding: 1.5rem 0;
        }
        .title{
            font-size: 1.6rem;
        } 
        .text-container{
            h5{
                color: ${props => props.theme.colorWhite};
            }
        }
        @media screen and (min-width: 1150px) {
                    width: 450px;
                    margin-left: -150px;
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
                width: 104%;
            }
        }
        @media screen and (min-width: 1150px) {
                    width: 700px;
                    height: 300px;
                    margin-left: 5px;
                    margin-top: 25%;
	            }
    }

    @media only screen and (max-width: 2500px) and (min-width: 1800px) {


        .right-container{
            width: 135%;
            height: 200px;
        }

    }

`;

export default LaMethode