import styled from 'styled-components';
import { useTheme } from './context/themeContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Entrepreneur from './components/Entrepreneur/Entrepreneur';
import Investisseur from './components/Investisseur/Investisseur';
import {AccountBox} from './components/Auth/accountBox';
// import SignIn from './components/Auth/SignIn';
// import SignUp from './components/Auth/SignUp';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Media from './components/Media/Media';
import FormInvestisseur from './components/Investisseur/form/FormInvestisseur';

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
            <Route path='media' element={<Media />} />
            <Route path='connexion' element={<AccountBox />} />

            {/* Route : form investisseur */}
            <Route path='form-investisseur' element={<FormInvestisseur />}/>
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
