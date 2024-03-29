import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import Accueil from './Accueil';
import Advantages from './Advantages';
import ImageSlider from './ImageSlider';

// import Satisfaction from './Satisfaction/Satisfaction';

const Entrepreneur = () => {
    const theme = useTheme();
    // const handleChange = (value) => {
    //     console.log("Input value:", value);
    //     };
    return (
        <EntrepreneurStyled  theme={theme}>
            <Accueil />
            <div className='advantages__div'>
                <Advantages />
            </div>
            {/* <div className='method-container'>
                <LaMethode />
            </div> */}
            {/* <div>
                <Satisfaction />
            </div> */}
            <div>
                <ImageSlider />
            </div>
        </EntrepreneurStyled>
    )
}

const EntrepreneurStyled = styled.section`
    text-align: center;
    .method-container{
        margin-top: 2%;
        width: 100%;
    }
    .advantages__div{
        position: relative;;
        height: 100%;
    }
`;

export default Entrepreneur