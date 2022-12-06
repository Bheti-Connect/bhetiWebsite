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
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPassword] = useState('');
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
      "name": name,
      "email": email,
      "role": "investisseur",
      "password": password,
    };

    let response = fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then(response => response.json())
      .then((data) => {
        if (data.success) {
          window.location.reload();
        }
      })

  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nom Complet" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirmez le mot de passe" value={confirmPass} onChange={(e) => setConfirmPassword(e.target.value)} />
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
