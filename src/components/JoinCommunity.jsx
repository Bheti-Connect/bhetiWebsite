import styled from 'styled-components';
// import Button from './Button';
import { useTheme } from '../context/themeContext';
import Title from './Title';
import mediaImg from '../assets/images/mediaImage.gif'
// import { Link } from 'react-router-dom';

import {FaSlack, FaLinkedinIn} from 'react-icons/fa'
const JoinCommunity = () => {
    const theme = useTheme();
    return (

        <JoinCommunityStyled className='u-pad-lg-2' theme={theme}>
            <div className='title-con'>
                <Title 
                    name={'Rejoignez notre communauté'}
                    subtext="Si vous souhaitez identifier d’autre porteurs de projets en Afrique francophone ou dans la diaspora, 
                    être informé en exclusivité des dynamiques business de l’écosystème des affaires en Afrique, 
                    être informé des prochaines rencontres entrepreneurs-investisseurs que nous organisons ?"
                />
            </div>
            <div className='latest-container'>
                <div className='latest-content'>
                    <div className='img-com-div'>
                        <img className='img-community' src={mediaImg} alt='' />
                    </div>
                    <div className='latest-text'>
                        <h4 className='title'>
                            Qu'est-ce qui se passe dans la communauté?
                        </h4>
                        <div className='community'>
                            <div className='inner slack-div'>
                                <div className='left-side'>
                                    <p className='paragraphs slack'>
                                    Rencontrez d’autres porteurs de projets en Afrique francophone ou dans la diaspora, et resté informé en exclusivité des prochaines rencontres entrepreneurs-investisseurs ! 
                                    </p>
                                </div>
                                <div>
                                    <p className='right-side'>
                                        Slack
                                        <a href='https://slack.com/'>
                                            <FaSlack className='social-icon slack' />
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className='inner linkedin-div'>
                                <div className='left-side'>
                                    <p className='paragraphs linkedin'>
                                    Accédez à un contenu d’information hebdomadaire pour positionner votre projet en fonction de l’actualité du marché économique et financier africain
                                    </p>
                                </div>
                                <div>
                                    <p className='right-side'>
                                        Linkedin
                                    <a href='https://www.linkedin.com/company/bheti-connect'>
                                        <FaLinkedinIn className='social-icon linkedin' />
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </JoinCommunityStyled>
    )
}

const JoinCommunityStyled = styled.div`
    .title-con{
        width: 1000px;
        @media only screen and (max-width: 1440px) {
            margin: auto ;
            width: 60%;
        }
        @media only screen and (max-width: 1024px){
            width:70%;
            margin:auto;
        }
        @media only screen and (max-width: 768px) {
            width:70%;
            margin:auto;
        }
        @media only screen and (max-width: 525px) and (min-width: 425px) {
            width:70%;
            margin:auto;
        }
        @media only screen and (max-width: 425px) {
            width: 300px;
            margin: auto;
        }
    }
    .latest-container{
        margin-top: 1.5rem;
        background-color: ${props => props.theme.colorBlack};
        border-radius: 3px; 
        .latest-content{
            display: grid;
            grid-template-columns: 40% auto;
            padding: 10rem 10rem;
            grid-gap: 1rem;
            width: 90%;
            height: 50%;
            margin: 0 auto;
            .img-com-div{
                position: relative;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
            .latest-text{
                width: 100%;
                margin-left: 4rem;
                h4{
                    color: ${props => props.theme.colorWhite};
                    font-size: 1.5rem;
                    padding-bottom: 1.5rem;
                }
                h6{
                    padding-bottom: .2rem;
                    color: ${props => props.theme.colorClothes};
                    font-size: 1.2rem;
                }
                p{
                    color: ${props => props.theme.colorGrey4};
                    padding-bottom: 1.5rem;
                }
                .community{
                    display: inline-block;
                    .inner{
                        display: flex;
                        .left-side{
                            width: 90%;
                            .paragraphs{
                                font-size: 18px;
                            }
                        }
                        .right-side{
                            margin: 0 30px;
                            color: ${props => props.theme.colorGrey2};
                            .social-icon{
                                width: 50px;
                                height: 50px;
                                color: ${props => props.theme.colorGrey2};
                                cursor: pointer;
                            }
                            .slack:hover{
                                    color: ${props => props.theme.colorSlack};
                                    transform: scale(.8);
                            }
                            .linkedin{
                                &:hover{
                                    color: ${props => props.theme.colorLinkedIn};                      
                                    transform: scale(.8);
                                }
                            }
                        }
                    }
                }
        }
    } 
}
`;

export default JoinCommunity;