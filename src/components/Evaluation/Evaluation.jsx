import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const progressAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 40%;
  margin: 5% auto 0%;
  @media all and (max-width: 500px){
    width: 70%;
  }
`

const Step = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#871211' : 'gray'};
  position: relative;
  &:before {
    content: "${props => props.step}";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Progress = styled.div`
  flex-grow: 1;
  height: 5px;
  background-color: gray;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #871211;
    ${props => props.active && css`
      animation: ${progressAnimation} 1s ease-in-out forwards;
    `}
  }
`;

export default function MultiStepForm() {
  const [formValues, setFormValues] = useState({ 
    companyName: '',
    nom: '',
    email: '',
    annees_activite: '',
    pays: '',
    description: '',
    secteur_activite: '',
    financement_precedent: '',
    montant_voulu: '',
    delai_financement: '',
    travail_plein_temps: '',
    equipe: '',
    chiffre_precedent: '',
    lien_presentation: '',
    step: 1 
  });

  return (
    <div>
      <StepContainer>
        <Step active={formValues.step >= 1} step={1} />
        <Progress active={formValues.step >= 2} />
        <Step active={formValues.step >= 2} step={2} />
        <Progress active={formValues.step >= 3} />
        <Step active={formValues.step >= 3} step={3} />
        <Progress active={formValues.step >= 4} />
        <Step active={formValues.step >= 4} step={4} />
      </StepContainer>

      {/* The form steps here */}
      {(() => {
        switch (formValues.step) {
          case 1:
            return <Step1 setFormValues={setFormValues} prevValues={formValues} />;
          case 2:
            return <Step2 setFormValues={setFormValues} prevValues={formValues} />;
          case 3:
            return <Step3 setFormValues={setFormValues} prevValues={formValues} />;
          case 4:
            return <Step4 setFormValues={setFormValues} prevValues={formValues} />;
          case 5:
            return <div>Form Submitted Successfully!</div>;
          default:
            return null;
        }
      })()}
    </div>
  );
}
