import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import {optionsActivity} from './FormInput';
import Blob from '../../assets/images/img-1.png';
import Blob2 from '../../assets/images/img-2.png';
import Blob3 from '../../assets/images/img-3.png';
import Blob4 from '../../assets/images/img-4.png';
import BhetiWhite from '../../assets/images/bheti-white.png';

const EvaluerEligibilite = () => {
    const theme = useTheme();

    const listOptions = optionsActivity.map((option) => 
        <option>{option}</option>
    )

    return (
        <EvaluerEligibiliteStyled theme={theme}>
            <div className='container'>
                <img className='blob-one' src={Blob} alt='blob1'/>
                <img className='blob-two' src={Blob2} alt='blob2'/>
                <img className='blob-three' src={Blob3} alt='blob3'/>
                <img className='blob-four' src={Blob4} alt='blob4'/>
            </div>
            <div className='container-child'>
                <div className='container-bheti'>
                    <img className='white-logo' src={BhetiWhite} alt='bheti-white-logo' />
                    <h3>
                        Préparez votre levée de fonds avec des outils adaptés et
                        présentez votre projet à des partenaires financiers pertinents
                    </h3>
                    <p className='first-paragraph'>
                        Profitez d'un diagnostic gratuit de votre projet pour vérifier votre éligibilité à la levée de fonds !
                    </p>
                    <p className='second-paragraph'>
                        Complétez ce formulaire et un de nos experts vous contactera pour votre audit gratuit.
                    </p>
                </div>
                <div className='container-form'>
                    <form>
                        <div className='input-div'>
                            <label>Nom de la société<span>*</span></label>
                            <input
                                id=''
                                type='text'
                                name=''
                                placeholder='Nom de la société'
                            />
                        </div>
                        <div className='input-div'>
                            <label>Site web/LinkedIn de votre startup<span>*</span></label>
                            <input
                                id=''
                                type='text'
                                name=''
                                placeholder='Lien de votre site web ou LinkedIn'

                            />
                        </div>
                        <div className='input-div'>
                            <label>Nombre d'années d'activité<span>*</span></label>
                            <select className='select-element'>
                                <option>-- Choisissez une option --</option>
                                <option>0-2 ans</option>
                                <option>2-5 ans</option>
                                <option>5-10 ans</option>
                                <option>+10 ans</option>
                            </select>
                        </div>
                        <div className='input-div'>
                            <label>Veuilez fournir une description en une phrase de votre activité<span>*</span></label>
                            <input
                                id=''
                                type='text'
                                name=''
                                placeholder=''
                            />
                        </div>
                        <div className='input-div'>
                            <label>Quel secteur correspond le mieux à votre activité<span>*</span></label>
                            <select className='select-element'>
                                <option>-- Choisissez une option --</option>
                                {listOptions}
                            </select>
                        </div>
                    </form>
                    <div className='latest-controlls'>
                        <div className='control control-1'></div>
                        <div className='control control-2'></div>
                        <div className='control control-3'></div>
                        <div className='control control-4'></div>
                        <button className='suivant'> Suivant</button>
                    </div>
                </div>
            </div>
    </EvaluerEligibiliteStyled>
    )
}

const EvaluerEligibiliteStyled = styled.section`
    .container {
        z-index: -100;
        img {
            transition: all .3s ease-in-out;
            &:hover{
                transform: scale(1.05) rotate(3deg);
            }
        }
        .blob-one{
            position: absolute;
            right: 2px;
            width: 25%;
            
        }
        .blob-two{
            position: absolute;
            right: 2px;
            bottom: 600px ;
            width: 28%;
        }
        .blob-three{
            position: absolute;
            left: 3px;
            bottom: 500px;
            width: 30%;
        }
        .blob-four{
            width: 21%;
        }
    }

    .container-child{
        display: flex;
        margin: 0% 23%;
        .container-bheti{
            position: relative;
            width: 580px;
            height: 650px;
            top: -200px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background-color: ${props => props.theme.colorBheti};
            .white-logo{
                position: relative;
                width: 40%;
                left: 25%;
                margin: 150px 10px  10px;
            }
            h3{
                font-size: 1.2rem;
                margin: 10% 10% 0%;
                color: ${props => props.theme.colorWhiteIsh} ;
            }
            p{
                font-size: 0.8rem;
                margin: 10% 10% 0%;
                color: ${props => props.theme.colorWhiteIsh}
            }
            .second-paragraph{
                margin-top: 2%;
            }
            @media all and (max-width: 1500px) {
                width: 850px;
                height: 600px;
            }
        }
        .container-form{
            position: relative;
            float: left;
            width: 580px;
            height: 650px;
            top: -200px;
            background-color: ${props => props.theme.colorWhite};
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            form{
                margin: auto;
                .input-div{
                    font-size: 16px;
                    display: grid;
                    width: 280px;
                    margin: 11% 15% 5%;
                    span{
                        color: red;
                    }
                    label{
                        margin-bottom: 3%;
                    }
                    input {
                        height: 170%;
                        border-radius: 10px;
                        font-size: 1.1rem;
                        margin-left: 15px;
                        padding: 1px 1px 0px 20px ;
                        color: #1E0101;
                        /* background: ${props => props.theme.colorWhiteIsh}; */
                        border: 1.3px solid black;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                        outline: none;
                    }

                    input[type=text]:focus {
                        border: 3px solid ${props => props.theme.colorBheti};
                    }

                    select {
                        font-size: 1rem;
                        margin-left: 15px;
                        padding: 0px 0px 0px 20px ;
                        border: 1.2px solid black;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                        border-radius: 10px;
                        max-width: 250px;
                        option {
                            max-height: 500px;
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
                    margin: 0 0.25rem;
                    cursor: pointer;
                }
                .control-1{
                    background-color: ${props => props.theme.colorAccent};
                }
                .control-2{
                    background-color: ${props => props.theme.colorGrey9};
                    transform: scale(0.82);
                }
                .control-3{
                    background-color: ${props => props.theme.colorGrey9};
                    transform: scale(0.65);
                }
                .control-4{
                    background-color: ${props => props.theme.colorGrey9};
                    transform: scale(0.43);
                }
                .page-number {
                    margin: 0px 0px 0px 20px;
                    
                }
                .suivant {
                    font-size: 14px;
                    letter-spacing: 2px;
                    text-decoration: none;
                    margin: 0px 0px 10px 50px;
                    width: 100px;
                    color: ${props => props.theme.colorBlack};
                    cursor: pointer;
                    border: 1px solid;
                    padding: 0.25em 0.5em;
                    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
                    position: relative;
                    user-select: none;
                    -webkit-user-select: none;
                    touch-action: manipulation;
                    }

                    .suivant:active {
                    box-shadow: 0px 0px 0px 0px;
                    top: 5px;
                    left: 5px;
                    }

                    @media (min-width: 768px) {
                    .suivant {
                        padding: 0.25em 0.75em;
                        }
                    }
            }
            @media all and (max-width: 1500px) {
                width: 900px;
                height: 600px;
            }
        }
    }

`

export default EvaluerEligibilite;