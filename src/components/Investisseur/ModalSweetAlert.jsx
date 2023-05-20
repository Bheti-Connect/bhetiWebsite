import Swal from 'sweetalert2'




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
            hookNavigate("/waitlist")
          }
    })

}