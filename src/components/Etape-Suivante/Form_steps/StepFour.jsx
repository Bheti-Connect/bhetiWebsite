import React from 'react';
import * as Components from '../MoreInformation';


const StepFour = () => {
    return (
        <div className='step_three_container'>
            <Components.Input type='text' placeholder="Votre adresse e-mail" />
            <Components.Input type='text' placeholder="Autre" />
            <Components.Input type='text' placeholder="Autorisez-vous des entrepreneurs à vous contacter via Bheti Connect? " />
            <Components.Input type='text' placeholder="Souhaitez-vous recevoir des présentations d'entreprises en fonction de votre profil ?" />
        </div>
    )
}

export default StepFour