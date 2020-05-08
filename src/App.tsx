import React from 'react';
import GlobalStyle from './styles/global';

// Pages
import SignIn from './pages/Signin';
import SigninUp from './pages/SigninUp';

const App: React.FC = () => (
  <>
    <SigninUp />
    <GlobalStyle />
  </>
);

export default App;
