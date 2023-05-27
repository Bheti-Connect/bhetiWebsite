import React from 'react';
import * as Components from '../MoreInformation';


const StepTwo = () => {
    return (
        <div className='step_two_container'>
            <Components.Input type='text' placeholder="Secteurs d'intérêts" />
            <Components.Input type='text' placeholder="Business Model d'intérêt" />
            <Components.Input type='text' placeholder="Zones géographiques d'intérêt " />
            <Components.Input type='text' placeholder="Investissements connus" />
            <Components.Input type='text' placeholder="Investissement min"/>
        </div>
    )
}

export default StepTwo