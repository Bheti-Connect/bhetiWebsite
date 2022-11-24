import styled from 'styled-components';
import { useTheme } from './context/themeContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Entrepreneur from './components/Entrepreneur/Entrepreneur';
import Investisseur from './components/Investisseur/Investisseur';
import ParentForm from './components/Forms/ParentForm';
import {AccountBox} from './components/Auth/accountBox';
import EvaluerEligibilite from './components/Forms/EvaluerEligibilite';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Media from './components/Media/Media';
import FormOne from './components/Forms/NewForms/FormOne/FormOne';
import FormTwo from './components/Forms/NewForms/FormTwo/FormTwo';

const App = () => {
  const theme = useTheme();
  
  return (
    <Router>
      <AppStyled theme={theme}>
          <div>
            <NavBar />
          </div>
        <main>
          <Routes>
          <Route path='/bhetiConnectProj' element={<Home />} />
            <Route path='entrepreneur' element={<Entrepreneur />} />
            <Route path='investisseur' element={<Investisseur />} />
            <Route path='/media' element={<Media />} />
            <Route path='connexion' element={<AccountBox />} />
            <Route path='evaluer-eligibilite' element={<EvaluerEligibilite />} />
            <Route path='formulaire' element={<ParentForm />} />
            <Route path='form1' element={<FormOne />} />
            <Route path='form2' element={<FormTwo />} />
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
