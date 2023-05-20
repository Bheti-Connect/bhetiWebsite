import React from "react";
// import FormType, { FormOuterWrapper } from "../FormType";
// import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ValidationSchema from "../FormModel/ValidationSchema";
import formInitialValues from "../FormModel/formInitialValues";
import {Field, MySelect} from "../../FormikFields/FormikFields";
import { optionsActivity, optionsYears } from "../../../FormInput";

const StepOne = (props) => {

  const listOptions = optionsActivity.map((option) => 
    <option key={option.id}  value={option.name}>{option.name}</option>
  )

  const yearsOptions = optionsYears.map((option) => 
    <option key={option.id}  value={option.year}>{option.year}</option>
  )

    const {
        formField: {
          companyName,
          startUp,
          yearsOfActivity,
          description,
          sector
        },
      } = props;

  return (
    <>
          <Field label={companyName.label} star={`*`} name={companyName.name} type="text" />
          <Field label={startUp.label} star={`*`} name={startUp.name} type="text" />
          <MySelect
              label={yearsOfActivity.label}
              name={yearsOfActivity.name}
              star={`*`}
            >
              <option value="">Sélectionnez une option</option>
              {yearsOptions}
            </MySelect>
            <Field label={description.label} star={`*`} name={description.name} type="text" />
            <MySelect star={`*`}
              label={sector.label}
              name={sector.name}
            >
              <option value="">Sélectionnez une option</option>
              {listOptions}
            </MySelect>
    </>
  )
}

export default StepOne