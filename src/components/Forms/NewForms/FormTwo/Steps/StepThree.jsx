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
      <MySelect label={workingTime.label} name={workingTime.name} star={`*`}>
        <option value="">Sélectionnez une option</option>
        <option value="true">Oui</option>
        <option value="false">Non</option>
      </MySelect>
      <Field label={totalPeople.label} name={totalPeople.name} type="text" star={`*`} />
      <MySelect label={turnOver.label} name={turnOver.name} star={`*`}>
        <option value="">Sélectionnez une option</option>
        <option value="oui">Oui</option>
        <option value="non">Non</option>
      </MySelect>
      <Field label={yourName.label} name={yourName.name} type="text" star={`*`} />
      <Field label={yourEmail.label} name={yourEmail.name} type="email" star={`*`}/>
    </>
  );
};

export default StepThree;