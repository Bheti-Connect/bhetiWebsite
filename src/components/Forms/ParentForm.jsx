import React, { Component } from "react";

import FormCompanyInfo from "./FormCompanyInfo.jsx";
import FormProjectInfo from "./FormProjectInfo";
import FormFinancial from "./FormFinancial";
import Success from "./Success";

export class UserForm extends Component {
    state = {
        step: 1,
        nomSociete: "",
        siteweb: "",
        nombreAnnee: "",
        description: "",
        secteurActivite: "",
        paysActivite: "",
        montantRechercher: "",
        delaiObtention: "",
        avoirLeverDesFonds: "",
        tempsPlein: "",
        nombrePersonnesSurProjet: "",
        chiffreAffaire: "",
        nom: "",
        email: "",
        documentPresentation: "",
        presentationLien: "",
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
        step: step + 1,
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1,
        });
    };

    // Handle fields changes
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const {
        nomSociete,
        siteweb,
        nombreAnnee,
        description,
        paysActivite,
        montantRechercher,
        delaiObtention,
        avoirLeverDesFonds,
        tempsPlein,
        nombrePersonnesSurProjet,
        chiffreAffaire,
        nom,
        email,
        documentPresentation,
        presentationLien,
        } = this.state;
        const values = {
        nomSociete,
        siteweb,
        nombreAnnee,
        description,
        paysActivite,
        montantRechercher,
        delaiObtention,
        avoirLeverDesFonds,
        tempsPlein,
        nombrePersonnesSurProjet,
        chiffreAffaire,
        nom,
        email,
        documentPresentation,
        presentationLien,
        };

        switch (step) {
        case 1:
            return (
            <FormCompanyInfo
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
            );
        // case 2:
        //     return (
        //     <FormProjectInfo
        //         nextStep={this.nextStep}
        //         prevStep={this.prevStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //     />
        //     );
        // case 3:
        //     return (
        //     <FormFinancial
        //         nextStep={this.nextStep}
        //         prevStep={this.prevStep}
        //         values={values}
        //     />
        //     );
            case 2:
            return <Success />;
        default:
            console.log("This is a multi-step form built with React.");
        }
    }
}

export default UserForm;
