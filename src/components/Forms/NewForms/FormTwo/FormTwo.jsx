import React from "react";
import { Wrap } from "../FormOne/FormOne";
import FormType, { FormOuterWrapper } from "../FormType";
import eligibilityFormModel from "./FormModel/eligibilityFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import ValidationSchema from "./FormModel/ValidationSchema";
import StepOne from "./Steps/StepOne";
import StepThree from "./Steps/StepThree";
import StepTwo from "./Steps/StepTwo";
import StepFour from "./Steps/StepFour";
import { useState } from "react";
import { Formik, Form } from "formik";
import Success from "./Steps/Success";
import styled from "styled-components";
import StepIndicator from "./StepIndicator";

const steps = [0, 1, 2, 3];
const { formId, formField } = eligibilityFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <StepOne formField={formField} />;
    case 1:
      return <StepTwo formField={formField} />;
    case 2:
      return <StepThree formField={formField} />;
    case 3:
      return <StepFour formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

const FormTwo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = ValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    // console.log(values);

    values = {
      ...values,
      travail_plein_temps: values.travail_plein_temps === 'true'
    }

    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
  };

    let data = await fetch('https://api.bheticonnect.com/api/evaluations', {
      method: 'POST', 
      headers,
      body: JSON.stringify(values),
    });
    let response = await data.json();
    console.log(response);
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <FormOuterWrapper>
      <Wrap>
        <FormType
        formHeading={`Rejoindre la liste d’attente pour accéder à l’application dès quelle sera disponibe.`}
        />
        <>
          {activeStep === steps.length ? (
            <Success />
          ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  {_renderStepContent(activeStep)}
                  <Flex>
                    <div>
                      {steps.map((circle) => (
                        <StepIndicator
                          className={
                            steps[circle] === activeStep ? "active" : ""
                          }
                          key={steps[circle]}
                          id={steps[circle]}
                        />
                      ))}
                      <span className='stepsNumber'>
                        {activeStep + 1}/{steps.length}
                      </span>
                    </div>
                    <div>
                      {activeStep !== 0 && (
                        <BTN onClick={_handleBack}>Précédent</BTN>
                      )}
                      <BTN
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isLastStep ? (
                          <input
                            className="submit-btn"
                            type="submit"
                            value={`Envoyer`}
                          />
                        ) : (
                          "Suivant"
                        )}
                      </BTN>
                    </div>
                  </Flex>
                </Form>
              )}
            </Formik>
          )}
        </>
      </Wrap>
    </FormOuterWrapper>
  );
};

const BTN = styled.button`
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #641c1c;
  background: transparent;
  cursor: pointer;
  border: none;
  margin-left:1em;

  @media only screen and (max-width:450px){
    margin-top:1em;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media only screen and (max-width:450px){
    flex-direction:column;
    align-items:center;
  }

  .active {
    background-color: #641C1C ;
  }

  .stepsNumber{
    font-size: 24px;
    font-weight: 700;
  }
`;

export default FormTwo;
