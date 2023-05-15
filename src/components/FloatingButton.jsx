import React from 'react';
import styled from 'styled-components';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';

const FloatingButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        <ButtonContainer onClick={scrollToTop}>
            <BsFillArrowUpCircleFill size={30} />
        </ButtonContainer>
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
`


export default FloatingButton;
