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
                        <div className='community'>
                            <div className='inner slack-div'>
                                <div className='left-side'>
                                    <p className='paragraphs slack'>
                                    Rencontrez d’autres porteurs de projets en Afrique francophone ou dans la diaspora, et resté informé en exclusivité des prochaines rencontres entrepreneurs-investisseurs ! 
                                    </p>
                                </div>
                                <div className='button__div'>
                                        <a href='https://slack.com/'>
                                            <div className='our-community'>
                                                <span id='slack-span'>
                                                    <FaSlack className='social-icon slack' />
                                                    <h5> Je rejoins la communauté</h5>
                                                </span>                                            
                                            </div>
                                        </a>
                                </div>
                            </div>
                            <div className='inner linkedin-div'>
                                <div className='left-side'>
                                    <p className='paragraphs linkedin'>
                                        Accédez à un contenu d’information hebdomadaire pour positionner votre projet en fonction de l’actualité du marché économique et financier africain
                                    </p>
                                </div>
                                <div className='button__div'>
                                        <a href='https://www.linkedin.com/company/bheti-connect'>
                                            <div className='our-community'>
                                                <span id='linkedin-span'>
                                                    <FaLinkedinIn className='social-icon linkedin' />
                                                    <h5> Je rejoins la communauté</h5>
                                                </span>
                                            </div>
                                        </a>
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
            width: 80%;
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
        .latest-content{
            display: grid;
            grid-template-columns: 40% auto;
            padding: 10rem 10rem;
            grid-gap: .8rem;
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
                        display: block;
                        .left-side{
                            width: 100%;
                            .paragraphs{
                                font-size: 17px;
                                width: 95%;
                            }
                            .linkedin{
                                margin-top: 1rem;
                            }
                        }
                        .button__div{
                            display: block;
                            width: 80%;
                            .icon__name{
                                margin: 0px  2px;
                                color: ${props => props.theme.colorGrey2};
                            }
                            .social-icon{
                                    position: relative;
                                    width: 40px;
                                    height: 40px;
                                    color: ${props => props.theme.colorGrey2};
                                    cursor: pointer;
                                    margin: -15px 10px;
                                }
                                .slack:hover{
                                        transform: scale(.8);
                                }
                                .linkedin{
                                    &:hover{
                                        transform: scale(.8);
                                    }
                                }
                                span{
                                    padding: 20px .8px;
                                    width: 95%;
                                }
                                #slack-span{
                                    display: flex;
                                    width: 300px;
                                    border-radius: 15px;
                                    color: ${props => props.theme.colorWhite};
                                    background-color: ${props => props.theme.colorSlack};
                                    &:hover{
                                        background-color: ${props => props.theme.colorSlackDeep};
                                    }
                                }
                                #linkedin-span{
                                    display: flex;
                                    width: 300px;
                                    border-radius: 80px;
                                    color: ${props => props.theme.colorWhite};
                                    background-color: ${props => props.theme.colorLinkedIn};
                                    &:hover{
                                        background-color: ${props => props.theme.colorLinkedInDeep};
                                    }
                                }
                                .our-community{
                                    display: flex;
                                }
                        }
                    }
                }
        }
        @media only screen and (max-width: 1440px){
            padding: 10rem 7rem;
        }
        @media only screen and (max-width: 1350px){
            padding: 10rem 5rem;
        }
        @media only screen and (max-width: 1250px){
            padding: 10rem 3rem;
        }
        @media only screen and (max-width: 1100px){
            .img-com-div{
                grid-column-start: 1;
                grid-column-end: 3;
                width: 60vw;
                margin: -10% auto;
            }
            .latest-text{
                position: relative;
                width: 50vw;
                margin: 40% auto;
                .community{
                    .inner{
                        .button__div{
                            width: 40%;
                            margin: 0 auto;
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 600px){
            .latest-text{
                position: relative;
                
                .community{
                    .inner{
                        width: 100%;
                        .left-side{
                            margin: 0 auto;
                            width: 100%;
                            p{
                                text-align: left;
                                font-size: 15.5px !important;
                            }
                        }
                        .button__div{
                            margin: 0 auto;
                            width: 100%;
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 440px){
            .latest-text{
                .community{
                    width: 100%;
                    margin-left: -5px;
                    .inner{
                        width: 100%;
                        .left-side{
                            margin: 0 auto;
                            width: 100%;
                            p{
                                text-align: left;
                                font-size: 15.5px !important;
                            }
                        }
                        .button__div{
                            width: 100%;
                            .social-icon{
                                    position: relative;
                                    width: 25px;
                                    height: 25px;
                                    color: ${props => props.theme.colorGrey2};
                                    cursor: pointer;
                                    margin: -4px 10px;
                            }
                                #slack-span{
                                    width: 295px;                                   
                                }
                                #linkedin-span{
                                    width: 295px;
                                }
                                .our-community{
                                    display: flex;
                                }
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 375px){
            .latest-text{
                .community {
                    margin-left: -25px;
                }
            }
        }
    }
    @media only screen and (max-width: 1100px){
        height: 850px;
    }
    @media only screen and (max-width: 768px){
        height: 750px;
    }
}
`;

export default JoinCommunity;