import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from './context/themeContext';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Entrepreneur from './components/Entrepreneur/Entrepreneur';
import Investisseur from './components/Investisseur/Investisseur';
import Home from './components/Home';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

import NavBar from './components/NavBar';

import Media from './components/Media/Media';
import FormOne from './components/Forms/NewForms/FormOne/FormOne';
import FormTwo from './components/Forms/NewForms/FormTwo/FormTwo';
import FormInvestisseur from './components/Investisseur/form/FormInvestisseur';
import ErrorPage from './components/Error/ErrorPage';
import Formulaire from './components/Forms/Formulaire';

const App = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    if(pathname !== pathname.toLowerCase()) {
      navigate(pathname.toLowerCase())
    }
  },[pathname])

  const [isAuthenticated, setIsAuthenticated] = useState();

  return (
    
      <AppStyled theme={theme}>
        <div>
          <NavBar />
        </div>
        <main>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='entrepreneur' exact element={<Entrepreneur />} />
            <Route path='investisseur' exact element={<Investisseur />} />
            <Route path='media' exact element={<Media />} />
            {/* <Route path='evaluer-eligibilite' element={<EvaluerEligibilite />} /> */}
            <Route path='decouvrir-bheti-connect' exact caseSensitive={false} element={<FormTwo />} />
            <Route path='evaluer-eligibilite' exact caseSensitive={false} element={<FormTwo />} />
            <Route path='formulaire' exact caseSensitive={false} element={<Formulaire />} />
            {/* Route : form investisseur */}
            <Route path='form-investisseur' exact caseSensitive={false} element={<FormInvestisseur />} />
            {/* Route : success stories media */}
            <Route path='*'  element={<ErrorPage />} />
          </Routes>
          <FloatingButton />
        </main>
        <div>
          <Footer />
        </div>
      </AppStyled>
    
  )
}

const AppStyled = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 0;
  background-color: ${props => props.theme.colorBg};

  a{
    color: ${props => props.theme.colorPrimary};
  }
  p{
    color: ${props => props.theme.colorFont};
  }
  .active-menu{
    border-radius: 30px;
    background: ${props => props.theme.colorGradientPrimary2}
  }
  
`;

export default App;
