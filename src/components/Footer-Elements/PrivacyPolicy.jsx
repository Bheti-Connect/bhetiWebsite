import React from 'react';
import styled from 'styled-components';

const PrivacyPolicy = () => {
    return (
        <PrivacyPolicyContainer>
            <h1>Politique de confidentialité </h1>
            <div className='container'>
                <div className='upper-container'>
                    <h4>
                        Bheti Connect, SARL RCS Paris 848 506 861 <br />
                        78 Avenue des Champs-Elysée, 75008 Paris, France
                    </h4>
                </div>
                <div className='entry-date-container'>
                    <div className='date'>
                        <p>Date d'entrée en vigueur : 1er juin 2023</p>
                        <p>Collecte et utilisation de vos données personnelles</p>
                    </div>
                    <div className='data-collection'>
                        <p>
                            Nous prenons la protection de vos données personnelles très au sérieux sur <i>BhetiConnect.com.</i><br /> 
                            Les informations que nous recueillons ont pour but de vous offrir une expérience optimale et de répondre à vos besoins de la manière la plus pertinente possible.
                        </p>
                    </div>
                </div>
                <div className='how-we-collect-data'>
                    <p>
                        Voici comment nous utilisons vos données à caractère personnel :
                    </p>
                    <div className='description'>
                        <div className='description-detail'>
                            <ul>
                                <p className='how-we-collect-paragraph'>
                                    <span>. </span>
                                    Gestion de votre accès et amélioration des services : Nous collectons des données personnelles pour vous permettre d'accéder à certains services sur notre site et pour améliorer leur fonctionnement, en prenant en compte vos préférences et vos besoins.
                                </p>
                                <p className='how-we-collect-paragraph'>
                                    <span>. </span>
                                    Gestion des clients et des demandes de financement : Si vous recherchez des solutions de financement ou si vous souhaitez participer à des concours ou des programmes de financement, nous collectons des données pour faciliter ces démarches et assurer une gestion efficace de votre dossier.                                
                                </p>
                                <p className='how-we-collect-paragraph'>
                                    <span>. </span>
                                    Communication ciblée : Avec votre consentement, nous utilisons vos données pour vous envoyer des newsletters, des sollicitations et des messages promotionnels pertinents. Si vous ne souhaitez pas recevoir ces communications, vous avez la possibilité de le spécifier lors de la collecte de vos données.                                
                                </p>
                                <p className='how-we-collect-paragraph'>
                                    <span>. </span>
                                    Analyses statistiques et amélioration continue : Nous utilisons vos données pour générer des statistiques commerciales et analyser l'utilisation de nos services, afin d'améliorer nos offres et de mieux répondre à vos besoins.                      
                                </p>
                                <p className='how-we-collect-paragraph'>
                                    <span>. </span>
                                    Gestion des avis et des litiges : Vos commentaires et avis sur nos produits, services ou contenus sont précieux pour nous. Nous collectons vos données pour gérer ces avis et, le cas échéant, traiter les éventuels litiges liés à l'utilisation de nos produits et services.                                
                                </p>
                                <p className='how-we-collect-paragraph'>
                                    <span>. </span>
                                    Respect des obligations légales : Nous nous engageons à respecter toutes les obligations légales et réglementaires applicables à la collecte et à l'utilisation de vos données à caractère personnel.                                
                                </p>
                                <p className='how-we-collect-paragraph'>
                                    <span>. </span>
                                    Accès à vos données personnelles                                
                                </p>
                            </ul>
                        </div>
                        <div className='law'>
                            <p className='law-paragraph'>
                                Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous avez le droit d'accéder à vos données personnelles, d'en demander la rectification ou de les supprimer. 
                                Pour exercer ces droits, vous pouvez nous contacter par les moyens suivants :
                            </p>
                            <div className='contact-information'> 
                                <p className='contact-paragraph'>
                                    <span>. </span>
                                    Adresse e-mail : contact@bheticonnect.com                               
                                </p>
                                <p className='contact-paragraph'>
                                    <span>. </span>
                                    Adresse postale : 78 Avenue des Champs-Elysée, 75008 Paris, France                               
                                </p>
                            </div>
                        </div>
                        <div className='end-text'>
                            <p>
                            Nous nous engageons à protéger vos données personnelles et à les utiliser uniquement dans le cadre défini par cette politique de confidentialité. 
                            Si vous avez des questions ou des préoccupations concernant la manière dont nous utilisons vos données, n'hésitez pas à nous contacter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PrivacyPolicyContainer>
    );
};

const  PrivacyPolicyContainer = styled.div`
    margin: 4% auto;
    width: 80vw;
    h1{
        font-size: 1.65rem;
    }
    .container{
        p{
            font-size: .95rem;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.47;
        }
        .upper-container{
            margin-top: 1%;
            h4{
                font-size: .95rem;
                color: #626567;
            }
        }
        .entry-date-container{
            margin-top: 3%;

            .data-collection{
                margin-top: 2%;
            }
        }
        .how-we-collect-data{
            margin-top: 1.5%;
            .description{
                .description-detail{
                    .how-we-collect-paragraph{  
                        margin-left: 2.5%;
                    }
                    span{
                            font-size: 1.9rem;
                            color: #626567;
                        }
                }
                .law{
                    margin-top: 2%;
                    .contact-information{
                        .contact-paragraph{
                            margin-left: 2.5%;
                            line-height: 1;
                        }
                        span{
                            font-size: 1.9rem;
                            color: #626567;
                        }
                    }
                    .law-paragraph{
                        margin-bottom: 2%;
                    }
                }
                .end-text{
                    margin-top: 3%;
                }
            }
        }
    }

`

export default PrivacyPolicy;
