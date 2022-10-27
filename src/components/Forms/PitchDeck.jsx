import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import Blob from '../../assets/images/img-1.png';
import Blob2 from '../../assets/images/img-2.png';
import Blob3 from '../../assets/images/img-3.png';
import Blob4 from '../../assets/images/img-4.png';



const PitchDeck = () => {
    const theme = useTheme();
    return (
        <styledPitchDeck>
            <div className='container'>
                <img src={Blob} alt='blob1'/>
                <img src={Blob2} alt='blob2'/>
                <img src={Blob3} alt='blob3'/>
                <img src={Blob4} alt='blob4'/>
            </div>
        </styledPitchDeck>
        )
}

const styledPitchDeck = styled.section`

`

export default PitchDeck