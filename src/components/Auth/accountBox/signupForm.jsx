import { useContext, useEffect, useRef, useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, FaInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../api/axios";
import select from 'react-select'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8, 24}$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$/;

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  
  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result)
  }, [name]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg('');
  }, [name, password, matchPassword])

  const handleRegistration = () => {
    
  }

  return (
    <BoxContainer>
        <p ref={errMsg} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
      <FormContainer>
        <label>
          <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
        </label>
        <Input type="text" placeholder="Nom Complet" />
        <Input 
          type="email"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-invalid={validEmail ? 'false' : 'true'}
          aria-describedby='uidnote'
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          placeholder="Email"
        />
        <Input 
          type="password" 
          placeholder="Mot de passe"  
        />
        <Input 
          type="password" 
          placeholder="Confirmez le mot de passe"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleRegistration}>S'inscrire</SubmitButton>
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