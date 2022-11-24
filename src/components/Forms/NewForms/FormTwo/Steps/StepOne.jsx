import React from "react";
// import FormType, { FormOuterWrapper } from "../FormType";
// import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ValidationSchema from "../FormModel/ValidationSchema";
import formInitialValues from "../FormModel/formInitialValues"
import {Field, MySelect} from "../../FormikFields/FormikFields";

const StepOne = (props) => {

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
         <Field label={companyName.label} name={companyName.name} type="text" />
         <Field label={startUp.label} name={startUp.name} type="text" />
         <MySelect
              label={yearsOfActivity.label}
              name={yearsOfActivity.name}
            >
              <option value="">Sélectionnez une option</option>
              <option value="0-2">0-2 ans</option>
              <option value="2-5">2-5 ans</option>
              <option value="5-10">5-10 ans</option>
              <option value="10-15">10-15 ans</option>
              <option value="15+">+15 ans</option>
            </MySelect>
            <Field label={description.label} name={description.name} type="text" />
            <MySelect
              label={sector.label}
              name={sector.name}
            >
              <option value="">Sélectionnez une option</option>
              <option value="toutsecteur">Tout secteur</option>
              <option value="energy">Energy</option>
              <option value="media">Media</option>
              <option value="technology">Technology</option>
            </MySelect>
    </>
  )
}

export default StepOne