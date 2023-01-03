import Swal from 'sweetalert2'


export const ModalTalkToExpert = () => {

    Swal.fire({
        title: "Parler à un Expert",
        text: "Merci de parler à un expert",
        icon: 'info',
        showCloseButton: true,
        iconColor: '#700b0b',
        confirmButtonText: 'Se connecter',
        confirmButtonColor: "#4BB543",
        confirmButtonAriaLabel: "sans-serif",
      }).then((result) => {
        if (result.isConfirmed)
        {
          console.log("Salut !")
        }
      })


}



export const ModalConnect = (hookNavigate) => {

    Swal.fire({
          title: "Se connecter",
          text: `Pour une meilleure experience sur la platforme, veuillez vous connecter ou procéder à la création de votre compte si ce n'est pas encore fait.`,
          icon: 'info',
          showCloseButton: true,
          iconColor: '#700b0b',
          confirmButtonText: 'Se connecter',
          confirmButtonColor: "#4BB543",
          confirmButtonAriaLabel: "sans-serif",
        }).then((result) => {
          if (result.isConfirmed)
          {
            hookNavigate("/connexion")
          }
    })

}