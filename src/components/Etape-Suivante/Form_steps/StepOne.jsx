import React from 'react';
import * as Components from '../MoreInformation';
import styled from 'styled-components';



const StepOne = () => {
    return (
        <Div className='step_one_container'>
            <Components.Input className='one' type='text' placeholder='Votre fonction' />
            <Components.Input className='vehicule' type='text' placeholder="Nom du véhicule" data-hover="Hello, this is the tooltip" />
            <Components.Input type='text' placeholder='Lien de votre site Web ou Linkedin' />
            <Components.Input type='text' placeholder="Pays d'activité " />
            <Components.Input type='text' placeholder="Niveau d'intérêt"/>
            {/* <div className='hide_vehicule'>
                Nom de votre fonds d'investissement. 
                Si vous êtes un Business Angel, indiquez simplement Business Angel.
            </div> */}
            {/* <div className='envelop first'>
                <p className='text text-one '>  
                    Nom de votre fonds d'investissement. 
                    Si vous êtes un Business Angel, indiquez simplement Business Angel.
                </p>
            </div> */}
        </Div>
    )
}

const Div = styled.div`

.envelop{
    position: relative;
    background-color: red ;
    .text{
    position: absolute;
    font-size: 14px;
    max-width: 350px;
    color: green;
}

.text-two{
    top: 220px ;
    z-index: 10;
}
}
`

export default StepOne