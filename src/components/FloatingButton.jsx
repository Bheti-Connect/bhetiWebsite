import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import ScrollButtonContext from './ScrollButtonContext';


const FloatingButton = () => {
    const [showButton, setShowButton] = useState(false);
    const { displayButton } = useContext(ScrollButtonContext);


    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const shouldShowButton = scrollTop > 0; // Change the value as per your requirement
        setShowButton(shouldShowButton);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
        
        const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        };

    return (
        <div>
            {showButton && (
                <ButtonContainer onClick={scrollToTop} >
                    <BsFillArrowUpCircleFill size={30} />
                </ButtonContainer>
            )}

        </div>
        
        
    );
};

const ButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ccc;
    color: #fff;
    padding: 15px;
    border-radius: 23px;
    cursor: pointer;
    z-index: 9999;
    @media all and (max-width: 500px) {
        padding: 10px;
        border-radius: 17px;
    }
`


export default FloatingButton;
