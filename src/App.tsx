import React from 'react';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

// Pages
import SignIn from './pages/Signin';
// import SigninUp from './pages/SigninUp';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
