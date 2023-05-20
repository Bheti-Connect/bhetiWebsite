import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <ContactStyled>
            <div>
                <ContactForm />
            </div>
        </ContactStyled>
    )
}

const ContactStyled = styled.section`

`

export default Contact