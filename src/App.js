import { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from './context/themeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Entrepreneur from './components/Entrepreneur/Entrepreneur';
import Investisseur from './components/Investisseur/Investisseur';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Media from './components/Media/Media';
import FormOne from './components/Forms/NewForms/FormOne/FormOne';
import FormTwo from './components/Forms/NewForms/FormTwo/FormTwo';
import FormInvestisseur from './components/Investisseur/form/FormInvestisseur';
import SuccessStories from './components/Media/SuccessStories/SuccessStories';
import ErrorPage from './components/Error/ErrorPage';
import { AccountBox } from './components/Auth/accountBox';

const App = () => {
  const theme = useTheme();

  const [isAuthenticated, setIsAuthenticated] = useState();

  return (
    <Router>
      <AppStyled theme={theme}>
        <div>
          <NavBar />
        </div>
        <main>
          <Routes>
            {/* <Route
              exact
              strict
              caseSensitive={false}
              path='/:url([a-z/]*[A-Z]+[a-z/]*)/'
              element={props => {
                const path = props.location.pathname
                alert('ok');
                // return <Redirect to={`${path.toLowerCase()}`} />
              }}
            /> */}
            <Route path='/bheti-connect-proj' caseSensitive={false} render={() => {
            }} exact element={<Home />} />
            <Route path='entrepreneur' exact caseSensitive={false} element={<Entrepreneur />} />
            <Route path='investisseur' exact caseSensitive={false} element={<Investisseur />} />
            <Route path='media' exact caseSensitive={false} element={<Media />} />
            <Route path='connexion' exact caseSensitive={false} element={<AccountBox />} />
            {/* <Route path='evaluer-eligibilite' element={<EvaluerEligibilite />} /> */}
            <Route path='pitch-deck' exact caseSensitive={false} element={<FormOne />} />
            <Route path='evaluer-eligibilite' exact caseSensitive={false} element={<FormTwo />} />

            {/* Route : form investisseur */}
            <Route path='form-investisseur' exact caseSensitive={false} element={<FormInvestisseur />} />
            {/* Route : success stories media */}
            <Route path='success-stories' exact caseSensitive={false} element={<SuccessStories />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <div>
          <Footer />
        </div>
      </AppStyled>
    </Router>
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
