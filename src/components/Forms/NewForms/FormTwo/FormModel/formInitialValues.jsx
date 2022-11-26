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
    presentation,
    countryOfActivity,
    amountRequested,
    investmentTime,
    fundRaised,
    workingTime,
    totalPeople,
    turnOver,
  },
} = eligibilityFormModel;

export default {
  [companyName.name]: "",
  [startUp.name]: "",
  [yearsOfActivity.name]: "",
  [description.name]: "",
  [sector.name]: "",
  [sectorForActivity.name]: "",
  [yourName.name]: "",
  [yourEmail.name]: "",
  [presentation.name]: "",
  [countryOfActivity.name]: "",
  [amountRequested.name]: "",
  [investmentTime.name]: "",
  [fundRaised.name]: "",
  [workingTime.name]: "",
  [totalPeople.name]: "",
  [turnOver.name]: "",
};
