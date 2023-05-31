import { useState } from 'react';
import styled from 'styled-components';
import StepOne from './Form_steps/StepOne';
import StepTwo from './Form_steps/StepTwo';
import StepThree from './Form_steps/StepThree';
import StepFour from './Form_steps/StepFour';

const AdditionalInfo = () => {

    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        
        if( page === 0) {
            return <StepOne />;
        } else if ( page === 1) {
            return <StepTwo />;
        } else if (page === 2) {
            return <StepThree />;
        } else {
            return <StepFour />;
        }
    }

    return (
        <Div className='form'>
                <div className='progressbar'></div>
            <div className='form-container'> 
                <div className='body'>
                    {PageDisplay()}
                    <div className="dot-steps">

                    </div>
                </div>
                <div className='steps_target'>
                    <div className='latest-controlls'>
                        <div className={`control ${page >= 0 ? 'activated' : 'not-active'}`}></div>
                        <div className={`control ${page >= 1 ? 'activated' : 'not-active'}`}></div>
                        <div className={`control ${page >= 2 ? 'activated' : 'not-active'}`}></div>
                        <div className={`control ${page > 2 ? 'activated' : 'not-active'}`}></div>
                    </div>
                </div>
                <div className='footer'>
                    <button
                        className='button back'
                        disabled={page == 0}
                        onClick={(e) => {
                            e.preventDefault();
                            setPage((currPage) => currPage - 1)
                        }}
                    >
                        Précédent
                    </button>
                    {
                        page < 3 ? (
                            <button
                            className='button next'
                            disabled={page == 4}
                            onClick={(e) => {
                                e.preventDefault();
                                setPage((currPage) => currPage + 1)
                            }}
                        >
                            Suivant
                        </button>
                        ) : (
                            <button 
                                className='button send' 
                                type="submit"
                            >
                                    Envoyer
                            </button>
                        )
                    }
                </div> 
            </div>
        </Div>
    )
}

const Div = styled.div`
    .form-container{
        .steps_target{
            .latest-controlls{
                    display: flex;
                    justify-content: center;
                    .control{
                        width: 1.1rem;
                        height: 1.1rem;
                        border-radius: 50%;
                        margin: .5rem 0.25rem;
                        cursor: pointer;
                    }
                    .activated{
                        background-color: #17202A;
                        transform: scale(0.65)
                    }
                    .page-number {
                        margin: 0px 0px 0px 20px;
                        
                    }
                    .not-active{
                        transform: scale(0.65);
                        background-color: #fff;
                        border: 1px solid #17202A ;

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
        }
        .footer {
            button + button{
            margin-top: 3px ;
            margin-left: 5vw ;
                }
                .button {
                    background-color: #17202A;
                    border-radius: 25px;
                    padding: 5px 10px;
                    cursor: pointer;
                }
                .send{
                    background-color: #27AE60;
                }
            .button {
                border: 0;
                outline: @border;
                font-size: .9rem;
                box-shadow: 0px 5px 10px rgba(darken(dodgerblue, 40%));
                transition: all .3s;
                cursor: pointer;
                border-radius: 5px;
                border-bottom: 4px solid lighten(gray, 70%);
                &:hover {
                    box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
                    transform: scale(1.03);
                }
                &:active  {
                    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
                    transform: scale(.98);
                }
                    }
        }
    }

`

export default AdditionalInfo;