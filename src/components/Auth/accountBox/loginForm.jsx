import React, { useContext } from "react";
import Select from 'react-select';
import options from "../../../data/options";
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
import styled from "styled-components";

export const LoginForm = (props) => {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <LoginFormStyled>
      <BoxContainer>
        <FormContainer>
          <Input type="email" placeholder="Email" />
          <Select options={options} placeholder="Qui êtes-vous ?" />
          <Input type="password" placeholder="Mot de passe" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Vous avez oublié votre mot de passe?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Connexion</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
            Vous n'avez pas de compte?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            S'inscrire
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </LoginFormStyled>
  );
}


const LoginFormStyled = styled.section`

`;