import React from 'react'
import styled from 'styled-components'

const Faq = () => {
    return (
        <FaqContainer>
            <h1>Foire Aux Questions</h1>
            <div className='container'>
                <div className='element-container'>
                    <div className='title-item'>
                        <p className='title'>
                            Quel est l'objectif de Bheti Connect ?
                        </p>
                        <p className=''>
                            Bheti Connect s'est donné pour mission de faciliter le financement des startups, à travers des ressources pédagogiques, des prestations de conseils et une plateforme sur mesure. 
                            Nous souhaitons offrir à tous les entrepreneurs une visibilité sur les différents financements publics et privés adaptés à leur projet innovant.
                        </p>
                    </div>
                    <div className='title-item'>
                        <p className='title'>
                            J'ai une question, comment puis-je vous contacter ?
                        </p>
                        <p className=''>
                            Pour supprimer votre compte, vous avez deux options :
                        </p>
                        <p>
                            <span>. </span>
                            Vous pouvez le faire directement depuis votre espace "Mon compte" sur la plateforme Bheti Connect. 
                            Nous traiterons votre demande de suppression de compte et de suppression de vos informations personnelles dans les plus brefs délais.
                        </p>
                        <p>
                            <span>. </span>
                            <p>Alternativement, vous pouvez également nous envoyer votre demande à l'adresse contact@bheticonnect.com.</p>
                        </p>
                    </div>
                    <div className='title-item'>
                        <p className='title'>
                            Comment puis-je demander la suppression de mon compte ?
                        </p>
                        <p className=''>
                            Vous pouvez nous contacter depuis le formulaire sur la page Contact ou bien par mail à l’adresse contact@bheticonnect.com. 
                            Nous ferons de notre mieux pour répondre à toutes vos questions.
                        </p>
                        <p>
                            La protection de vos données est une priorité chez Bheti Connect. Toutes nos procédures respectent les dispositions du règlement européen sur la protection des données personnelles, connu sous le nom de RGPD.
                        </p>
                        <p>
                        Si vous avez des questions, n'hésitez pas à nous contacter à l'adresse contact@bheticonnect.com.
                        </p>
                    </div>
                </div>

            </div>
        </FaqContainer>
    )
}

const FaqContainer = styled.div`
    margin: 4% auto;
    width: 80vw;
`

export default Faq