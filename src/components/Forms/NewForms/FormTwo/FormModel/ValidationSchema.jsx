import * as Yup from "yup";
import eligibilityFormModel from "./eligibilityFormModel";
const {
  formField: {
    companyName,
    startUp,
    yearsOfActivity,
    description,
    sector,
    sectorForActivity,
    yourName,
    yourEmail,
    countryOfActivity,
    amountRequested,
    investmentTime,
    fundRaised,
    workingTime,
    totalPeople,
    turnOver,
  },
} = eligibilityFormModel;

export default [
  Yup.object().shape({
    [companyName.name]: Yup.string().required(
      `${companyName.requiredErrorMsg}`
    ),
    [startUp.name]: Yup.string().required(`${startUp.requiredErrorMsg}`),
    [description.name]: Yup.string().required(
      `${description.requiredErrorMsg}`
    ),
    [yearsOfActivity.name]: Yup.string()
      .nullable()
      .required(`${yearsOfActivity.requiredErrorMsg}`),
    [sector.name]: Yup.string()
      .nullable()
      .required(`${sector.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [countryOfActivity.name]: Yup.string().required(
      `${countryOfActivity.requiredErrorMsg}`
    ),
    [amountRequested.name]: Yup.string().required(
      `${amountRequested.requiredErrorMsg}`
    ),
    [investmentTime.name]: Yup.string()
      .nullable()
      .required(`${investmentTime.requiredErrorMsg}`),
    [fundRaised.name]: Yup.string().required(`${fundRaised.requiredErrorMsg}`),

    }),
  
  Yup.object().shape({
    [workingTime.name]: Yup.string()
    .nullable()
    .required(`${workingTime.requiredErrorMsg}`),
  [totalPeople.name]: Yup.string()
    .nullable()
    .required(`${totalPeople.requiredErrorMsg}`),
  [turnOver.name]: Yup.string()
    .nullable()
    .required(`${turnOver.requiredErrorMsg}`),
  [yourName.name]: Yup.string().required(`${yourName.requiredErrorMsg}`),
  [yourEmail.name]: Yup.string()
    .email("Adresses e-mail invalides")
    .required(`${yourEmail.requiredErrorMsg}`),
  }),

  Yup.object().shape({
    [sectorForActivity.name]: Yup.string().required(
      `${sectorForActivity.requiredErrorMsg}`
    )
  })
];
