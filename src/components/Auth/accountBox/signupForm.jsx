import React, { useContext, useState, useEffect } from "react";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");

  const handleRegister = () => {
      const url = new URL(
        "https://bheti-connect.smirltech.com/api/register"
    );
    
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    let body = {
        "name": "znvgfczvacdfiwj",
        "email": "carlos.welch@example.com",
        "role": "blanditiis",
        "password": "6UmFM}c%<R]Iq]$OQVk"
    };
    
    fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    }).then(response => response.json());
    
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nom Complet" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Mot de passe" />
        <Input type="password" placeholder="Confirmez le mot de passe" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton 
        type="submit"
        onClick={handleRegister}
      >
        S'inscrire
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Avez-vous déjà un compte?
        <BoldLink href="#" onClick={switchToSignin}>
          Connexion
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
