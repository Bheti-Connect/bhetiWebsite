import { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import Blob from '../../assets/images/img-1.png';
import Blob2 from '../../assets/images/img-2.png';
import Blob3 from '../../assets/images/img-3.png';
import Blob4 from '../../assets/images/img-4.png';
import BhetiWhite from '../../assets/images/bheti-white.png';

const EvaluerEligibilite = () => {
    const theme = useTheme();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const pages = [];


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
                                placeholder=''

                            />
                        </div>
                        <div className='input-div'>
                            <label>Site web/LinkedIn de votre startup<span>*</span></label>
                            <input
                                id=''
                                type='text'
                                name=''
                                placeholder=''

                            />
                        </div>
                        <div className='input-div'>
                            <label>Nombre d'années d'activité<span>*</span></label>
                            <input
                                id=''
                                name=''
                                placeholder=''
                            />
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
                            <input
                                id=''
                                name=''
                                placeholder=''
                            />
                        </div>
                    </form>
                    <div className='latest-controlls'>
                        <div className='control control-1'></div>
                        <div className='control control-2'></div>
                        <div className='control control-3'></div>
                        <div className='control control-4'></div>
                        <h5 className='page-number' >1/4</h5>
                    </div>
                </div>
            </div>
    </EvaluerEligibiliteStyled>
    )
}

const EvaluerEligibiliteStyled = styled.section`
    .container {
        z-index: -100;
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
                    margin: 12.5% 15% 5%;
                    span{
                        color: red;
                    }
                    label{
                        margin-bottom: 3%;
                    }
                    input {
                        height: 180%;
                        border-radius: 10px;
                        font-size: 1rem;
                        margin-left: 15px;
                        color: #1E0101;
                        text-align: center;
                        background: ${props => props.theme.colorWhiteIsh};
                        border: 0px;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                        outline: none;
                    }

                    input[type=text]:focus {
                        border: 3px solid ${props => props.theme.colorClothes};
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
                    margin: 0px 60px 0px 30px;
                    
                }
            }
        }
    }

`

export default EvaluerEligibilite;