import React from "react";
import { Field, MySelect } from "../../FormikFields/FormikFields";

const StepThree = (props) => {
  const {
    formField: {
      yourName,
      yourEmail,
      workingTime,
      totalPeople,
      turnOver,
    },
  } = props;

  return (
    <>
      <MySelect label={workingTime.label} name={workingTime.name}>
        <option value="">Sélectionnez une option</option>
        <option value="oui">Oui</option>
        <option value="non">Non</option>
      </MySelect>
      <Field label={totalPeople.label} name={totalPeople.name} type="text" />
      <MySelect label={turnOver.label} name={turnOver.name}>
        <option value="">Sélectionnez une option</option>
        <option value="oui">Oui</option>
        <option value="non">Non</option>
      </MySelect>
      <Field label={yourName.label} name={yourName.name} type="text" />
      <Field label={yourEmail.label} name={yourEmail.name} type="email" />
    </>
  );
};

export default StepThree;
