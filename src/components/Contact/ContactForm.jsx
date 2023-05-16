import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    max-width: 500px;
    margin: 100px auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        max-width: 80vw;
    }
    
    `;

    const FormField = styled.div`
    margin-bottom: 20px;
    `;

    const Label = styled.label`
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    `;

    const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 15px;
    border: 1px solid #ccc;
    `;

    const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    `;

    const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #641c1c;
    color: #fff;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #7a2323;
    }
    `;

    const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormField>
                <Label htmlFor="name">Votre nom complet</Label>
                <Input type="text" id="name" name="name" required />
                </FormField>
                <FormField>
                <Label htmlFor="email">Votre Email</Label>
                <Input type="email" id="email" name="email" required />
                </FormField>
                <FormField>
                <Label htmlFor="message">Votre Message</Label>
                <TextArea id="message" name="message" rows="5" placeholder='' required />
                </FormField>
                <Button type="submit">Envoyer</Button>
            </form>
        </FormContainer>
    );
    };

export default ContactForm;
