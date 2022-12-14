import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../context/AuthProvider";

const LOGIN_URL = '/connexion'

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

export const LoginForm = () => {
  const { setAuth } = useContext(AuthContext)

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  const tackleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const tacklePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [email, password])

    const url = new URL(
      "https://bheti-connect.smirltech.com/api/login"
  );

  const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
  };

let item = { email, password }

  const handleSubmit = async (e) => {

    // try{

    // } catch{

    // } finally{

    // }
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(item),
    }).then(response => response.json())
    
  }

  const { switchToSignup } = useContext(AccountContext);

  return (
    <loginFormStyled>      
      <BoxContainer>
        <FormContainer >
            <p 
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'} 
                aria-live='assertive'
            >
                {errMsg}
            </p>
          <Input 
            type='email'
            name='email'
            placeholder="Email"
            ref={userRef}
            autoComplete='off'
            onChange={tackleEmailChange}
            value={email}
            required
          />
          <Input
            type='password'
            name='password'
            onChange={tacklePasswordChange}
            value={password}
            required
            placeholder="Mot de passe" 
          
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Vous avez oublié votre mot de passe?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleSubmit}>Connexion</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
            Vous n'avez pas de compte?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            S'inscrire
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </loginFormStyled>
  );
}


const loginFormStyled = styled.section`

`