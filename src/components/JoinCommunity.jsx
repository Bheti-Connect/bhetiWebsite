import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import { useTheme } from '../context/themeContext';
import Title from './Title';
import mediaImg from '../assets/images/mediaImage.gif'

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
                        <h6>Prenez votre Tablette, Smartphone, Desktop ou Laptop</h6>
                        <p>Sur les applications LinkedIn, Instagram et Facebook. Réjoignez rapidement la communauté pour être au coeur de l'actualité économique en Afrique !</p>
                        <Button 
                            name={'JE REJOINS DÈS MAINTENANT'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={''}
                        />
                    </div>
                </div>
            </div>
            {/* <div className='latest-controlls'>
                <div className='control control-1'></div>
                <div className='control control-2'></div>
                <div className='control control-3'></div>
            </div> */}
        </JoinCommunityStyled>
    )
}

const JoinCommunityStyled = styled.section`
    .title-con{
        width: 900px;
    }
    .latest-container{
        margin-top: 1.5rem;
        background-color: ${props => props.theme.colorBlack};
        border-radius: 7px;
        @media screen and (max-width: 1150px) {
                    width: 1150px;
                    height: 405px;
                    margin-left: -140px;
	            }
        @media screen and (max-width: 420px) {
                    width: 880px;
	            }
        .latest-content{
            display: grid;
            grid-template-columns: 40% auto;
            padding: 5rem 10rem;
            grid-gap: 2rem;
            img{
                width: 100%;
                border-radius: 7px;
                object-fit: cover;
                @media  (min-width: 1200px) and (max-width: 1440px) {
                    width: 30px;
                    height: 200px;
                    margin-left: -100px;
	            }
                @media only screen and (max-width: 1800px) {
                    width: 450px;
                    height: 250px;
                    margin-left: -100px;
	            }

            }
            .latest-text{
                width: 500px;
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
                a{
                    background: transparent;
                    border: 2px solid ${props => props.theme.colorGrey4};
                    text-transform: inherit;
                }
                
                @media only screen and (min-width: 1440px) {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    margin-left: 70px;
                    bottom: 10%;
	            }
                @media only screen and (max-width: 1800px) {
                    position: relative;
                    width: 400px;
                    height: 200px;
                    margin-left: 100px;
                    bottom: 5%;
	            }

            }
        }
    }
    .latest-controlls{
        display: flex;
        justify-content: center;
        margin-top: 2.5rem;
        .control{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin: 0 0.2rem;
            cursor: pointer;
        }
        .control-1{
            background-color: ${props => props.theme.colorAccent};
        }
        .control-2{
            background-color: ${props => props.theme.colorGrey9};
            transform: scale(0.85);
        }
        .control-3{
            background-color: ${props => props.theme.colorGrey9};
            transform: scale(0.6);
        }
    }
`;


export default JoinCommunity;