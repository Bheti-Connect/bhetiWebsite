import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import projectManagement from '../assets/images/analytics.png';
import bhetiImage from '../assets/images/bheti-img.jpg';
import giveMoney from '../assets/images/give-money.png'
// import boxImg from '../assets/images/dots.png'; Ceci est à retirer, Mahoua Veut que ceci ne soit plus là

const AboutSection = () => {
    const theme = useTheme();
    return (
        <AboutSectionStyled  theme={theme}>
             <div className='title-about'>
                  <h3>Développez et financez vos projets</h3>  
            </div>
                <div className='about'>
                    <div className='left-about'>
                    <p>Grâce à la plateforme BHC, accédez à un écosystème composé d’experts, d’outils et d’informations… Bref, tout ce qu’il vous faut pour trouver du financement. </p>
                       
                        <ol>
                            <li>1. Publiez votre projet </li>
                            <li>2. Précisez votre besoin</li>
                            <li>3. Augmentez la visibilité de votre projet auprès d’investisseurs</li>
                        </ol>
                        
                    </div>
                    <div className='right-about'>
                       
                        <img src={bhetiImage} alt='bheti-image' />
                    </div>
                </div>
        </AboutSectionStyled>
        )
}

const AboutSectionStyled = styled.section`
        display: flex;
        flex-direction: column;
        text-decoration: none;
        box-shadow: 0 5px 18px #212529b7; 
        background-color: ${props => props.theme.colorBlack};
        position: relative;
        height: 100%;
      
        .about {
            display: flex;
            position: relative;
            flex-direction: row;
            justify-content: flex-start;

            @media screen and (max-width: 768px) {
                flex-direction: column;
              }

          }

        .left-about {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-content: flex-start;
            

            p {
                font-size: 3vh;
                color: white;
                text-align: left;
                padding: 20px;

                @media screen and (max-width: 768px) {
                    font-size: 2vh;
                    padding: 10px;
                  }
                 
               }

            ol  {
                font-size : 3vh;
                color: white;
                text-align: left;
                padding: 10px;

                @media screen and (max-width: 768px) {
                    font-size: 2vh;
                  }
           }

        }
        
        .title-about {
            display: block;
            self-align: center;

            h3 {
                    font-size: 50px;
                    padding: 5px;
                    color: white;
                }
          }

     
        

        .right-about {
           width: 100%;
           height: 100%; 

           img{
            
            width: 100%;
            height: 50%;
            max-width: 800px;
            max-height: 600px;
            object-fit: cover;
            border-radius: 80px 3px;
            padding: 30px;
            height: auto;
            transition: all .3s ease-in-out;
            &:hover{
                filter: grayscale(0);
                
                transform: scale(1) rotate(3deg);
            }
        }


          }
        
        
     

`;

export default AboutSection