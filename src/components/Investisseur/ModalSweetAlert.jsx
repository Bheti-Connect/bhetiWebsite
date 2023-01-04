import Swal from 'sweetalert2'


export const ModalTalkToExpert = () => {

    Swal.fire({
        title: "Parler à un Expert",
        text: "Vous êtes nouveau(lle) sur notre espace ! Pour prendre rendez-vous avec l'un de nos experts, cliquez simplement sur le bouton 'Prendre rendez-vous' ci-dessous. Nous serons heureux de vous aider à répondre à toutes vos questions.",
        icon: 'info',
        showCloseButton: true,
        confirmButtonText: '<a id="rdv-btn" href="https://calendly.com/akouame/45min" target="_blank">Prendre rendez-vous</a>',
        confirmButtonAriaLabel: "sans-serif",
        customClass: {
          title: 'title-sweet-connect',
          icon: 'icon-sweet-connect',
          htmlContainer: 'text-sweet-connect',
          validationMessage: '',
          confirmButton: 'confirm-sweet-connect',
        }
      })

}



export const ModalConnect = (hookNavigate) => {

    Swal.fire({
          title: "Se connecter",
          text: `Pour une meilleure experience sur la platforme, veuillez vous connecter ou procéder à la création de votre compte si ce n'est pas encore fait.`,
          icon: 'info',
          showCloseButton: true,
          confirmButtonText: 'Se connecter',
          customClass: {
            title: 'title-sweet-connect',
            icon: 'icon-sweet-connect',
            htmlContainer: 'text-sweet-connect',
            validationMessage: '',
            confirmButton: 'confirm-sweet-connect',
          }
        }).then((result) => {
          if (result.isConfirmed)
          {
            hookNavigate("/connexion")
          }
    })

}