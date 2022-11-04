import styled from 'styled-components';
import Button from './Button';
import { useTheme } from '../context/themeContext';
import Title from './Title';
import mediaImg from '../assets/images/mediaImage.gif'

const JoinCommunity = () => {
    const theme = useTheme();
    return (

        <JoinCommunityStyled className='u-pad-lg-2 community' theme={theme}>
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
                        <a className='anchor-tag' href='https://www.linkedin.com/company/bheti-connect'>
                            <Button 
                                name={'JE REJOINS DÈS MAINTENANT'}
                                icon={'fas fa-chevron-right'}
                                arrow={'arrow'}
                                blob={'blob'}
                            />
                        </a>
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
    
    .community {
        width: 10px;
    }


    .title-con{
        width: 1000px;
        @media only screen and (max-width: 1440px) and (min-width: 1350px) {
            margin-left: -60px;
        }
        @media only screen and (max-width: 1350px) and (min-width: 1250px) {
            margin-left: -130px;
            width: 1000px;
        }
        @media only screen and (max-width: 1250px) and (min-width: 1024px) {
            margin-left: -210px;
            width: 1000px;
        }
        @media only screen and (max-width: 525px) and (min-width: 425px) {
            margin-left: -200px;
            width: 350px;
        }
        @media only screen and (max-width: 425px) and (min-width: 320px) {
            margin-left: -255px;
            width: 320px;
        }
    }
    .latest-container{
        margin-top: 1.5rem;
        background-color: ${props => props.theme.colorBlack};
        border-radius: 7px;
        @media only screen and (max-width: 2560px) and (min-width: 1800px) {
            width: 1500px;
            margin-left: -70px;
        }
        @media only screen and (max-width: 1800px) and (min-width: 1440px) {
            width: 1200px;
            margin-left:-1%;
        }
        @media only screen and (max-width: 1440px) and (min-width: 1350px) {
            width: 1000px;
            margin-left: -60px;
        }
        @media only screen and (max-width: 1350px) and (min-width: 1250px) {
            width: 1000px;
            margin-left: -130px;
        }
        @media only screen and (max-width: 1250px) and (min-width: 1024px) {
            width: 900px;
            margin-left: -160px;
        }
        @media only screen and (max-width: 525px) and (min-width: 425px) {
            width: 505px;
            margin-left: -300px;
        }
        @media only screen and (max-width: 425px) and (min-width: 320px) {
            width: 300px;
            margin-left: -255px;
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
                
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    width: 600px;
                    margin-left: -60px;
                }
                @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    width: 450px;
                    margin-left: -80px;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    width: 380px;
                    height: 250px;
                    margin-left: -100px;
                }
                @media only screen and (max-width: 1350px) and (min-width: 1250px) {
                    width: 350px;
                    height: 250px;
                    margin-left: -100px;
                }
                @media only screen and (max-width: 1250px) and (min-width: 1024px) {
                    width: 290px;
                    height: 200px;
                    margin-left: -120px;
                }
                @media only screen and (max-width: 525px) and (min-width: 425px) {
                    width: 380px;
                    height: 120px;
                    margin-left: -100px;
                    margin-top: -57px;
                }
                @media only screen and (max-width: 425px) and (min-width: 320px) {
                    width: 220px;
                    height: 100px;
                    margin-left: -120px;
                    margin-top: -57px;
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
                    margin-left: 25%;
                    @media only screen and (max-width: 425px) and (min-width: 320px){
                        margin-left: -15%;
                        width: 200px;
                    }
                }
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    width: 600px;
                    height: 200px;
                    margin-left: 150px;
                    margin-top: 7%;
                }
                @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    width: 550px;
                    height: 200px;
                    margin-left: 70px;
                    margin-top: 2%;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    width: 500px;
                    height: 200px;
                    margin-left: 20px;
                    margin-top: -2%;
                }
                @media only screen and (max-width: 1350px) and (min-width: 1250px) {
                    width: 500px;
                    height: 200px;
                    margin-left: 10px;
                    margin-top: -2%;
                }
                @media only screen and (max-width: 1250px) and (min-width: 1024px) {
                    width: 450px;
                    height: 200px;
                    margin-left: -23px;
                    margin-top: -10%;
                }
                @media only screen and (max-width: 525px) and (min-width: 425px) {
                    width: 400px;
                    height: 280px;
                    margin-left: -200px;
                    margin-top: 40%;
                }
                @media only screen and (max-width: 425px) and (min-width: 320px) {
                    width: 280px;
                    height: 350px;
                    margin-left: -160px;
                    margin-top: 60%;
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