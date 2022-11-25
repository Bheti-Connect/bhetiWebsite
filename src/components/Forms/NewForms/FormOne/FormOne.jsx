import React from "react";
import FormType, { FormOuterWrapper } from "../FormType";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Field, MySelect, MyTextArea } from "../FormikFields/FormikFields";
import styled from "styled-components";

const FormOne = () => {
  return (
    <FormOuterWrapper>
      <Wrap>
        <FormType
          formHeading={`Accédez à des opportunités d'investissement exclusives`}
        />
        <Formik
          initialValues={{
            yourName: "",
            email: "",
            ageYear: "",
            investmentComapny: "",
          }}
          validationSchema={Yup.object({
            yourName: Yup.string()
              .max(15, "Doit contenir 15 caractères ou moins")
              .required("Champ obligatoire"),
            email: Yup.string()
              .email("Adresses e-mail invalides")
              .required("Champ obligatoire"),
            ageYear: Yup.string()
              .oneOf(["0-3", "3-6", "6-12", "12+"], "Année invalide")
              .required("Champ obligatoire"),
            investmentComapny: Yup.string().required("Champ obligatoire"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          <Form className="investment-form">
            <Field label="Votre nom *" name="yourName" type="text" />
            <Field
              label="Votre adresse e-mail *"
              name="email"
              type="email"
              otherText={`Veuillez noter l'adresse à laquelle vous souhaitez 
            recevoir le dossier`}
            />
            <MySelect
              label="Opportunité d'investissement *"
              name="ageYear"
              otherText={`Merci d'indiquer le projet pour lequel vous souhaitez entrer 
              en contact avec le(s) fondateur(s)`}
            >
              <option value="">Sélectionnez une option</option>
              <option value="0-3">0-3 mois</option>
              <option value="3-6">3-6 mois</option>
              <option value="6-12">6-12 mois</option>
              <option value="12+">+12 mois</option>
            </MySelect>
            
            <Field
              label="Votre société d'investissement *"
              name="investmentComapny"
              type="text"
              otherText={`Veuillez indiquer si vous êtes un Business Angel ou le nom 
              de la société d'investissement pour laquelle vous travaillez`}
            />

            <MyTextArea
              label="Autre"
              name="other"
              rows="6"
              otherText={`Avez-vous quoi que ce soit à ajouter ?`}
            />
            <div className="btn-div">
              <input className="submit-btn" type="submit" value={`Envoyer`} />
            </div>
          </Form>
        </Formik>
      </Wrap>
    </FormOuterWrapper>
  );
};

export const Wrap = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  position: relative;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    width: 70%;
  }

  @media only screen and (max-width: 500px) {
    width: 85%;
  }
`;

export default FormOne;
