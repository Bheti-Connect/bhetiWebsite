import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import MessageSent from '../../assets/images/messageSent.svg'
import emailjs from "@emailjs/browser";


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
    .image {
        position: relative;
        .success-image{
            display: block;
            position: relative;
            margin: 0 auto;
            width: 80%;
        }
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
        const formRef = useRef();
        const [form, setForm] = useState({
            name: "",
            email: "",
            message: "",
        });

    const [touchedFields, setTouchedFields] = useState({});

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
            ...form,
            [name]: value,
            });
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        emailjs
        .send(
            'service_akbs6hh',
            'template_f2fn8af',
            {
                from_name: form.name,
                to_name: "Bheti Connect",
                from_email: form.email,
                to_email: "contact@bheticonnect.com",
                message: form.message,
            },
            'Cn4ybzjhZP0jRiNp1'
            )
            .then(
            () => {
                setLoading(false);
                // alert("Merci pour votre message, nous vous répondrons dans les plus brefs délais🙏🏾!");
    
                setForm({
                name: "",
                email: "",
                message: "",
                });
            },
            (error) => {
                setLoading(false);
                console.error(error);
    
                alert("Il, y a eu un problème lors de l'envoie du message🙏🏾!");
            }
        );
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    //Cn4ybzjhZP0jRiNp1 -- public key
    //service_akbs6hh -- service id
    //template_f2fn8af -- template id
    return (
        <FormContainer>
            {isSubmitted && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            {
                isSubmitted ? (
                    <div className='image'>
                        <img src={MessageSent} alt="Success" className="success-image" />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} ref={formRef}>
                    <FormField>
                    <Label htmlFor="name">Votre nom complet</Label>
                    <Input 
                        type="text" 
                        id="name" 
                        name="name"
                        onChange={handleChange}
                        placeholder='Ecrivez votre nom complet'
                        value={form.name} 
                        required 
                    />
                    </FormField>
                    <FormField>
                    <Label htmlFor="email">Votre Email</Label>
                    <Input 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={handleChange}
                        placeholder='Ecrivez votre adresse email'
                        value={form.email} 
                        required 
                    />
                    </FormField>
                    <FormField>
                    <Label htmlFor="message">Votre Message</Label>
                    <TextArea 
                    id="message"
                    value={form.message} 
                    name="message" 
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Quel est votre message ?"
                    required />
                    </FormField>
                    <Button type="submit">
                    {loading ? "Envoie en Cours..." : "Envoyer"}
                    </Button>
                </form>
                )
                }

        </FormContainer>
    );
    };

    // 700b0a

export default ContactForm;
