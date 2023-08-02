import React, { useState } from 'react';
import styled from 'styled-components';

const FAQBlock = styled.div`
    margin-bottom: 1rem;
    background: #f9f9f9;
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;

    &.open {
        background: #e9e9e9;
    }
`;

const Question = styled.h3`
    display: inline-block;
    margin: 0;
    font-size: 16px;
    width: 93%;
    @media (max-width: 1350px) {
        width: 87%;
    }
`;

const Icon = styled.span`
    float: right;
    font-size: 1.5rem;
    margin-left: 1rem;
`;

const Date = styled.p`
    float: right;
    font-size: .7rem;
    margin-left: 1rem;
`
const Anchor = styled.a`
  color: blue;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Answer = styled.p`
    clear: both;
    margin-top: 1rem;
`;

const FAQ = ({faq, index, toggleFAQ}) => {
    return (
        <FAQBlock 
        className={"faq " + (faq.open ? 'open' : '')} 
        key={index} 
        onClick={() => toggleFAQ(index)}
        >
        <Question>{faq.question}</Question>
        <Icon>{faq.open ? '-' : '+'}</Icon>
        <Date>{faq.date}</Date>
        {faq.open && <Answer>{faq.answer}</Answer>}
        </FAQBlock>
    );
}

export default function FAQSection() {
    const [faqs, setFaqs] = useState([
        {
        question: "45 startups pré-sélectionnées pour...",
        answer: "La Société financière internationale (IFC) et Viva Technology ont annoncé les 45 start-ups présélectionnées pour les AfricaTech...",
        date: "Mai 2023",
        link: "https://www.linkedin.com/posts/bheti-connect_entrepreneurs-innovation-entreprises-activity-7004031286008774656-qh9k?utm_source=share&utm_medium=member_desktop",
        open: false
    },
    {
        question: "Chargel, une société Sénégalaise lève 2.5 millions $...",
        answer: "Après avoir obtenu un financement de préamorçage de 750 000 dollars au près de Century Oak Ventures et Logos Venture Partners...",
        date: "Avril 2023",
        open: false
    },
    {
        question: "Comment les entreprises s’imposent-elles sur leur marché en Afrique ?",
        answer: "Merci à AfricAngels de nous avoir fait confiance pour intervenir sur la thématique ... Ce fut un plaisir d'échanger sur cette thématique au moment où l'entrepreneuriat connait un réel essor sur le continent Africain...",
        date: "Déc. 2022",
        open: false
    },
    // add more questions here...
    ]);

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
        if (i === index) {
            faq.open = !faq.open
        } else {
            faq.open = false;
        }

        return faq;
        }))
    }

    return (
        <div>
        {/* <h2>FAQs</h2> */}
        {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
        
        </div>
    );
}
