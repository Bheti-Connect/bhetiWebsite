import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/themeContext';
import LogoBheti from '../../../assets/images/bheti_white_logo.png';
import Select from 'react-select';
import Swal from 'sweetalert2';


const FormInvestisseur = () => {

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [opportunity, setOpportunity] = useState("")
  const [society, setSociety] = useState("")
  const [autre, setAutre] = useState("")

  // champs vide
  const [vide, setVide] = useState(false)

  const options = [
    { value: 'Projet 1', label: 'Projet 1' },
    { value: 'Projet 2', label: 'Projet 2'  },
    { value: 'Projet 3', label: 'Projet 3' },
    { value: 'Projet 4', label: 'Projet 4'  },
    { value: 'Projet 5', label: 'Projet 5'  },
  ]

  const theme = useTheme()

  // handle disable modal
  const removeModal = () => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  // submit data
  const handleSubmitForm = (e) => {
    e.preventDefault()
    let formdata = new FormData()
  
    if(nom){
      formdata.append('nom', nom)
    }else{
      setVide(true)
    }
    if(email){
      formdata.append('email', email)
    }else{
      setVide(true)
    }

    if(opportunity){
      formdata.append('opportunity', opportunity)
    }else{
      setVide(true)
    }

    if(society){
      formdata.append('society', society)
    }else{
      setVide(true)
    }

    if(autre){
      formdata.append('autre', autre)
    }

    if (vide){
      Swal.fire({
        title: "Champ vide",
        text: `Veuillez selectionner un projet.`,
        icon: 'info',
        showCloseButton: true,
        iconColor: '#700b0b',
        confirmButtonText: "Ok",
        confirmButtonColor: "#4BB543",
        confirmButtonAriaLabel: "sans-serif",
      })
    }

    for(let [name, value] of formdata) {
      console.log(`${name} = ${value}`);
    }

  }

  useEffect(() => {
    removeModal()
  },[])

  return (
    <form method="post" onSubmit={handleSubmitForm}>
    <Container>
        <Left theme={theme}>
          <div className='text-left'>
            <img src={LogoBheti} alt='Logo bheti connect' />
            <p>Accédez à des opportunités d'investissement exclusives</p>
            <button className='btn' type='submit'>Envoyer</button>
          </div>
        </Left>

        <Right theme={theme}>
        <div className='form'>

          <div className="row">
            <label htmlFor="nom" className="input-label">Votre nom <span className='asterisque'>*</span></label>
            <input type="text" name='nom' id='nom' className="input-field" onChange={(e) => setNom(e.target.value)} placeholder='...' required/>
          </div>

          <div className="row">
            <label htmlFor="email" className="input-label">Votre adresse e-mail <span className='asterisque'>*</span></label>
            <p>Veuillez noter l'adresse à laquelle vous souhaitez recevoir le dossier</p>
            <input type="email" name='email' id='email' className="input-field" onChange={(e) => setEmail(e.target.value)} placeholder='example@company.com' required/>
          </div>

          <div className="row">

            <label htmlFor="select" className="input-label">Opportunité d'investissement <span className='asterisque'>*</span></label>

            <Select
            placeholder={"Votre choix..."}
            onChange={(selectedOption) => setOpportunity(selectedOption.value)}
            options={options}
            className='select-field'
            isSearchable
            />


          </div>

          <div className="row">
            <label htmlFor="societe" className="input-label">Votre société d'investissement <span className='asterisque'>*</span></label>
            <p>Veuillez indiquer si vous êtes un Business Angel ou le nom de la société d'investissement pour laquelle vous travaillez</p>
            <input type="text" name='societe' id='societe' className="input-field" onChange={(e) => setSociety(e.target.value)} placeholder='...' required/>
          </div>

          <div className="row last-row">
              <label htmlFor="message" className="input-label">Autre</label>
              <p>Avez-vous quoi que ce soit à ajouter ?</p>
              <textarea className="input-field" name="message" id="message" onChange={(e) => setAutre(e.target.value)} cols="30" rows="15"></textarea>
          </div>

        </div>
        </Right>
    </Container>
    </form>
  )
}


// Style CSS
const Container = styled.div`

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 40px 0;

      @media only screen and (max-width: 970px) {

        flex-direction: column;

      }
`;

const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
border-radius: 10px 0 0 10px;
height: 950px;
width: 35%;
background-color: ${props => props.theme.colorBheti};
box-shadow: -5px 0px 10px 1px rgba(128, 128, 128, 0.419);



.text-left {
  

  img {
    width: 50%;
    height: 100px;
    object-fit: cover;
  }

  p{
    color: white;
    width: 450px;
    margin: 30px;
  }

  .btn {
    position: relative;
    color:  ${props => props.theme.colorBheti};
    background-color: white;
    padding: 7px 20px;
    border-radius: 10px;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    right: -100px;
    cursor: pointer;
  }

  .btn-hidden{
    display:none;
  }



}

      @media only screen and (max-width: 1190px) {
        p{
        font-size: 14px;
        }
      }

      @media only screen and (max-width: 970px) {
        height: 300px;
        width: 50%;
        border-radius: 10px 10px 0 0;

      }


      @media only screen and (max-width: 680px) {
        .text-left{

          img {
          width: 40%;
          height: 50px;
          }

          p{
            width: 295px;
          }

          button {
            right: -50px;
          }
          
        }

      }

      @media only screen and (max-width: 590px) {
        width: 80%;

        .text-left{
       
          button{
            right: -40px;
          }
          
        }
      }

`;

const Right = styled.div`
display: flex;
flex-direction: column;
border-radius: 0 10px 10px 0;
height: 950px;
width: 35%;
box-shadow: 3px 0px 10px 1px rgba(128, 128, 128, 0.419);

.form{
  padding: 30px;
}

.row{
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  .asterisque{
    color: red;
    font-size: 20px;
  }
}

.last-row{
  margin: 40px 0;
}

.input-label{
  font-size: 16.5px;
  color: ${props => props.theme.colorPrimary};
  margin-bottom: 7px;
  font-weight: 600;
}

.input-field{
  border: none;
  background: #80808042;
  border-radius: .25rem;
  padding: .75rem 1rem;
  outline-color: ${props => props.theme.colorBheti};
  margin: 10px 0;
}

p{
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 10px; 
}

.select-field{
  margin: 10px 0;
}

.select-field > div{
  box-shadow: none;
  border:1px solid rgba(128, 128, 128, 0.511);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  outline: red;
}


      @media only screen and (max-width: 970px) {
        
        width: 50%;
        border-radius: 0 0 10px 10px;

      }

      @media only screen and (max-width: 680px) {
        
      }

      @media only screen and (max-width: 590px) {
        width: 80%;
      }


`;



export default FormInvestisseur