import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  position: relative;
  width: 280px;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 49px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  overflow: hidden;
  transition: all .4s ease-in-out;
            animation: contentHide2 1s ease-in-out;
            animation-delay: .001s;
            opacity: 0;
            animation-fill-mode: forwards;
            @keyframes contentHide2 {
                0%{
                    opacity: 0;
                    transform: translateY(-120%) scale(0);
                    visibility: none;
                }
                100%{
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    visibility: visible;
                }
            }
    @media only screen and (max-width: 2560px) and (min-width: 1800px){

    }
    @media only screen and (max-width: 1800px){
        width: 600px;
    }
    @media only screen and (max-width: 1024px){
        
    }
    @media only screen and (max-width: 960px){
        
    }
    @media only screen and (max-width: 768px) and (min-width: 468px){
        
    }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(36,0,0);
  background: linear-gradient(90deg, 
  rgba(36,0,0,1) 0%, 
  rgba(84,16,40,0.7259278711484594) 24%, 
  rgba(84,16,16,1) 40%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "150%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "75%",
    height: "500px",
    borderRadius: "16%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("connexion");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("s'inscrire");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("connexion");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "connexion" && (
            <HeaderContainer>
              <HeaderText>Bienvenue</HeaderText>
              <SmallText>Veuillez-vous connecter pour continuez!</SmallText>
            </HeaderContainer>
          )}
          {active === "s'inscrire" && (
            <HeaderContainer>
              <HeaderText>Créer</HeaderText>
              <HeaderText>Un Compte</HeaderText>
              <SmallText>Veuillez-vous connecter pour continuez!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "connexion" && <LoginForm />}
          {active === "s'inscrire" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
