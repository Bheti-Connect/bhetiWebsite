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

        <JoinCommunityStyled theme={theme}>
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
                            Qu'est-ce qui se passe dans la communauté ?
                        </h4>
                        <div className='community'>
                            <div className='inner slack-div'>
                                <div className='left-side'>
                                    <p className='paragraphs slack'>
                                    Rencontrez d’autres porteurs de projets en Afrique francophone ou dans la diaspora, et resté informé en exclusivité des prochaines rencontres entrepreneurs-investisseurs ! 
                                    </p>
                                </div>
                                <div className='right-side'>
                                    <a href='https://slack.com/'>
                                        <FaSlack className='social-icon slack' />
                                    </a>
                                    Slack
                                </div>
                            </div>
                            <div className='inner linkedin-div'>
                                <div className='left-side'>
                                    <p className='paragraphs linkedin'>
                                        Accédez à un contenu d’information hebdomadaire pour positionner votre projet en fonction de l’actualité du marché économique et financier africain
                                    </p>
                                </div>
                                <div className='right-side'>
                                    <a href='https://www.linkedin.com/company/bheti-connect'>
                                        <FaLinkedinIn className='social-icon linkedin' />
                                    </a>
                                    Linkedin
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </JoinCommunityStyled>
    )
}

const JoinCommunityStyled = styled.section`
    display: flex; 
    position: relative;
    flex-direction: column;
    margin-bottom: 1em;
    
    .title-con{
        font-size : clamp(1rem, 1vw, 2rem);
        @media screen and (max-width: 380px) {
            font-size : 10px;
            width: 100%;
            text-align: center; 
            padding: 3px;
            
          }
        
        h3 {
            font-size : clamp(1rem, 2vw, 2rem);
            @media screen and (max-width: 380px) {
                font-size : 20px;
                width: 100%;
                text-align: center; 
                padding: 3px;
                
              }

          }
    }
    .latest-container{
        margin-top: 1.5rem;
        display: flex;
        height: 50vh;
        border-radius: 3px;
        justify-content	: center;
        align-items: center;
        flex-direction: row;

        .latest-content{
            background-color: black;
            display: flex;
            width: 60%;
            height: 100%;
            gap: 2rem;

            @media screen and (max-width: 1780px) {
                flex-direction: column;
                margin: 0 auto;
                height: 100%;
                
              }
           
            @media screen and (max-width: 912px) {
                flex-direction: column;
                box-sizing: border-box;
              }

            @media screen and (max-width: 280px) {
                flex-direction: column;
                width: 100%;
                
              }

            .img-com-div {
                width: 100%;
                border-radius: 30px;
                display: flex;
                justify-content : center; 
                align-items center;  
                
                @media screen and (max-width: 1780px) {
                    height: 50%;
                    
                  }
               
                @media screen and (max-width: 912px) {
                    width: 100%;
                    height: 50%;
                  }

                img{
                    width: 90%;
                    padding: 10px;
                    height: 70%;
                    border-radius: 10px;
                    object-fit: cover;

                    @media screen and (max-width: 1780px) {
                        width: 100%;
                        height: 70%;
                        
                      }
                   
                    @media screen and (max-width: 912px) {
                        width: 100%;
                        height: 100%;
                      }

                }
                
            }

            .latest-text{
                display: flex;
                flex-direction: column;
                height: auto;
                box-sizing: content-box;
                justify-content: center;


                @media screen and (max-width: 1780px) {
                    
                  }
               
                @media screen and (max-width: 912px) {
                    
                  }
            
                @media screen and (max-width: 1780px) {
                    
                  }
               
                @media screen and (max-width: 375px) {
                    
                  }

                h4{
                    color: ${props => props.theme.colorWhite};
                
                    padding-bottom: 1.5vh;


                    @media screen and (max-width: 1780px) {
                    
                    }
                 
                  @media screen and (max-width: 912px) {
                      
                    }
              
                  @media screen and (max-width: 1780px) {
                      
                    }
                 
                  @media screen and (max-width: 375px) {
                      
                    }
                }
                p{  
                    color: ${props => props.theme.colorGrey4};
                    padding-bottom: 1.5vh;

                                    @media screen and (max-width: 1780px) {
                    
                  }
               
                @media screen and (max-width: 912px) {
                    
                  }
            
                @media screen and (max-width: 1780px) {
                    
                  }
               
                @media screen and (max-width: 375px) {
                    
                  }
                }
                .community{
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    padding: 5px;
                    
                    .inner{
                       display: flex;
                        .left-side{
                            width: 90%;
                            .paragraphs{
                                font-size: 18px;
                                
                                @media screen and (max-width: 1024px) {
                                    font-size: 2vh;
                                    
                                  }

                                @media screen and (min-width: 912px) {
                                    font-size: 1.5vh;
                                    
                                  }

                                @media screen and (max-width: 912px) {
                                    font-size: 1vh;
                                    
                                  }
                            }
                        }
                        .right-side{
                            margin: 0 30px;
                            color: ${props => props.theme.colorGrey2};
                            text-align: center;

                            @media screen and (max-width: 280px) {
                                font-size: 2vh;
                                
                              }
                            
                            .social-icon{
                                width: 50px;
                                height: 50px;
                                color: ${props => props.theme.colorGrey2};
                                cursor: pointer;
                                align-items:center;

                                @media screen and (max-width: 1024px) {
                                    width: 15px;
                                    height: 15px;
                                  }

                                @media screen and (max-width: 912px) {
                                    width: 30px;
                                    height: 30px;
                                    
                                  }

                                  @media screen and (max-width: 280px) {
                                    width: 15px;
                                    height: 15px;
                                    
                                  }
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

