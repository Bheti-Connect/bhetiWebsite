import { useRef, useState, useEffect } from "react"
import styled from "styled-components";

const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    return (
        <SectionStyled>
            <p 
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'} 
                aria-live='assertive'
            >
                {errMsg}
            </p>
            <label htmlFor="email" >Email</label>
            <input 
                type='email'
                id='email'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
            <label htmlFor="password" >Mot de Passe</label>
            <input 
                type='password'
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <button>Connexion</button>
        </SectionStyled>
    )
}

const SectionStyled = styled.section`

`

export default Login