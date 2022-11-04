import React, { useContext } from "react";

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

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nom Complet" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Mot de passe" />
        <Input type="password" placeholder="Confirmez le mot de passe" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">S'inscrire</SubmitButton>
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
