import React from "react";
import {Field, MySelect} from "../../FormikFields/FormikFields";

const StepTwo = (props) => {

    const {
        formField: {
            countryOfActivity,
            amountRequested,
            investmentTime,
            fundRaised,
        },
      } = props;

  return (
    <>
         <Field label={countryOfActivity.label} name={countryOfActivity.name} type="text" otherText={`Dans quels pays exercez-vous votre activité ?`}/>
         <Field label={amountRequested.label} name={amountRequested.name} type="text" otherText={`Quel montant souhaitez-vous lever ?`}/>
         <MySelect
              label={investmentTime.label}
              name={investmentTime.name}
            >
              <option value="">Sélectionnez une option</option>
              <option value="0-3">0-3 mois</option>
              <option value="3-6">3-6 mois</option>
              <option value="6-9">6-9 mois</option>
              <option value="9-12">9-12 mois</option>
              <option value="12+">+12 mois</option>
            </MySelect>
            <Field label={fundRaised.label} name={fundRaised.name} otherText={`SI oui, veuillez mentionner le montant collecté`} type="text" />
    </>
  )
}

export default StepTwo