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
                                <div className='button__div button_slack'>
                                        <a href='https://join.slack.com/t/bheticonnect/shared_invite/zt-1vpdzs7pd-Q5f49fTUU_Um9L_TJ9ci3g'>
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
            width: 90%;
            margin:auto;
        }
    }
    .latest-container{
        .latest-content{
            display: grid;
            grid-template-columns: 43% auto;
            padding: 10rem 10rem;
            grid-gap: .8rem;
            width: 95%;
            height: 50%;
            margin: -10% auto 1%;
            .img-com-div{
                position: relative;
                width:;
                margin: 0 auto;
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
                    color: ${props => props.theme.colorBlack};
                    padding-bottom: 1.5rem;
                }
                .community{
                    display: inline-block;
                    .inner{
                        display: block;
                        .left-side{
                            width: 100%;
                            .paragraphs{
                                font-family: 'Montserrat', sans-serif;
                                line-height: 1.4;
                                font-size: 17px;
                                width: 99%;
                                @media all and (max-width: 440px){
                                    line-height: 1.6;
                                }
                            }
                            .linkedin{
                                margin-top: 2rem;
                                margin-bottom: -1rem;
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
                                    width: 30px;
                                    height: 30px;
                                    color: ${props => props.theme.colorGrey2};
                                    cursor: pointer;
                                    margin: -7px 10px;
                                }
                                span{
                                    padding: 21px .8px;
                                    width: 95%;
                                }
                                #slack-span{
                                    display: flex;
                                    width: 300px;
                                    border-radius: 50px;
                                    color: ${props => props.theme.colorWhite};
                                    background-color: ${props => props.theme.colorSlack};
                                    &:hover{
                                        background-color: ${props => props.theme.colorSlackDeep};
                                    }
                                }
                                #linkedin-span{
                                    display: flex;
                                    width: 300px;
                                    border-radius: 50px;
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
                        .button_slack{
                            margin-top: -20px;
                            @media all and (max-width: 440px){
                                margin-top: -18px !important;
                            }
                        }
                    }
                    @media all and (min-width: 1650px){
                        margin-top: 3vw;
                    }
                }
        }
        @media only screen and (min-width: 1650px){
            margin: -8% auto 1%;
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
                width: 90vw;
                margin: 40% -10%;
                .community{
                    .inner{
                        .button__div{
                            width: 100%;
                            margin: 0 auto;
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 440px){
            .img-com-div{
                position: relative;
                margin: -50% -13% 0;
                width: 87.8vw;
                img{
                    width: 100%;
                }
            }
                width: 90vw;
                .latest-text{
                    margin-left: -10vw;
                    .community{
                        width: 80vw;
                        margin: 0 auto;
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
                                        height: 55px;
                                        width: 250px;                                   
                                    }
                                    #linkedin-span{
                                        height: 55px;
                                        width: 250px;
                                    }
                                    .our-community{
                                        display: flex;
                                        h5{
                                            font-size: 14px;
                                        }
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
        height: 800px;
    }
}
`;

export default JoinCommunity;