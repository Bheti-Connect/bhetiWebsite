//import { useState } from 'react';
import styled from 'styled-components';
import AboutSection from './AboutSection';
import MethodSection from './MethodSection';
import EconomicNews from './EconomicNews';
import JoinCommunity from './JoinCommunity';
import Header from './Header';

const Home = () => {
    return (
        <HomeStyled>
            <Header />
            <main>
                <div>
                    <AboutSection />
                </div>
                <div>
                    <MethodSection />
                </div>
                <div>
                    <EconomicNews />
                </div>
                <div>
                    <JoinCommunity />
                </div>
            </main>
        </HomeStyled>
    )
}

const HomeStyled = styled.section`
position: relative;
`;

export default Home;