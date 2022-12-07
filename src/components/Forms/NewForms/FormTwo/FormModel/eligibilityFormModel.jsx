export default {
  formId: 'eligibilityForm',
  formField: {
    companyName: {
      name: 'companyName',
      label: `Nom de la société`,
      requiredErrorMsg: 'Champ obligatoire'
    },
    startUp: {
      name: 'startUp',
      label: 'Site web/linkedin de la startup',
      requiredErrorMsg: 'Champ obligatoire'
    },
    yearsOfActivity: {
      name: 'yearsOfActivity',
      label: `Nombre d'année d'activité`,
      requiredErrorMsg: 'Champ obligatoire'
    },
    description: {
      name: 'description',
      label: `Veuillez fournir une description en une phrase 
      de votre entreprise.`,
      requiredErrorMsg: 'Champ obligatoire',
    },
    sector: {
      name: 'sector',
      label: `Quel secteur correspond le mieux à 
      votre activité ?`,
      requiredErrorMsg: 'Champ obligatoire'
    },
    countryOfActivity: {
      name: 'pays',
      label: 'Pays d’activité',
      requiredErrorMsg: 'Champ obligatoire'
    },
    amountRequested: {
      name: 'montant_voulu',
      label: 'Montant recherché',
      requiredErrorMsg: 'Champ obligatoire'
    },
    investmentTime: {
      name: 'delai_financement',
      label: `Dans quel délais souhaitez-vous obtenir 
      votre investissement ?`,
      requiredErrorMsg: 'Champ obligatoire',
    },
    fundRaised: {
      name: 'financement_precedent',
      label: 'Avez-vous déjà levé des fonds ?',
      requiredErrorMsg: 'Champ obligatoire',
    },
    workingTime: {
      name: 'travail_plein_temps',
      label: 'Travaillez-vous à temps plein qur ce projet ?',
      requiredErrorMsg: 'Champ obligatoire',
    },
    totalPeople: {
      name: 'equipe',
      label: 'Combien de personnes travaillent sur ce projet ?',
      requiredErrorMsg: 'Champ obligatoire',
    },
    turnOver: {
      name: 'chiffre_precedent',
      label: `Avez-vous déjà réalisé du chiffre d'affaires ?`,
      requiredErrorMsg: 'Champ obligatoire',
    },
    yourName: {
      name: 'nom',
      label: `Quel est votre nom ?`,
      requiredErrorMsg: 'Champ obligatoire',
    },
    yourEmail: {
      name: 'email',
      label: `Quelle est votre adresse e-mail ?`,
      requiredErrorMsg: 'Champ obligatoire',
    },
    sectorForActivity: {
      name: 'secteur_activite',
      label: `Quel secteur correspond le mieux à 
      votre activité ?`,
      requiredErrorMsg: 'Champ obligatoire',
    },
    presentation: {
      name: 'lien_presentation',
      label: `Ou joignez votre présentation en tant que lien`,
    }
  }
};