import React, { Component } from 'react';
import Confirmation from './EligibilitySteps/Confirmation';
import StepOne from './EligibilitySteps/StepOne';
import StepTwo from './EligibilitySteps/StepTwo';
import StepThree from './EligibilitySteps/StepThree';
import StepFour from './EligibilitySteps/StepFour';

import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        nomSociete: '',
        siteweb: '',
        nombreAnnee: '',
        description: '',
        secteurActivite: '',
        paysActivite: '',
        montantRechercher: '',
        delaiObtention: '',
        avoirLeverDesFonds: '',
        tempsPlein: '',
        nombrePersonnesSurProjet: '',
        chiffreAffaire : '',
        nom: '',
        email: '',
        documentPresentation: '',
        presentationLien: ''
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
        step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { nomSociete, siteweb, nombreAnnee, description, paysActivite, montantRechercher, delaiObtention, avoirLeverDesFonds, tempsPlein, nombrePersonnesSurProjet, chiffreAffaire, nom, email, documentPresentation, presentationLien } = this.state;
        const values = { nomSociete, siteweb, nombreAnnee, description, paysActivite, montantRechercher, delaiObtention, avoirLeverDesFonds, tempsPlein, nombrePersonnesSurProjet, chiffreAffaire, nom, email, documentPresentation, presentationLien };

        switch (step) {
        case 1:
            return (
            <FormUserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
            );
        case 2:
            return (
            <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
            );
        case 3:
            return (
            <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
            />
            );
        case 4:
            return <Success />;
        default:
            (console.log('This is a multi-step form built with React.'))
        }
    }
    }

export default UserForm;
