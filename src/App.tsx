import React from 'react';
import GlobalStyle from './styles/global';

// Pages
import SignIn from './pages/Signin';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
