import React from 'react';
import * as Components from '../MoreInformation';


const StepThree = () => {
    return (
        <div className='step_three_container'>
            <Components.Input type='text' placeholder="Investissement max" />
            <Components.Input type='text' placeholder="Lead Investments" />
            <Components.Input type='text' placeholder="Co investissement " />
            <Components.Input type='text' placeholder="KPI requis" />
            <Components.Input type='text' placeholder="Téléphone"/>
        </div>    
)
}

export default StepThree