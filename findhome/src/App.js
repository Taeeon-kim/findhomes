import './App.css';
import React from 'react';
import SignIn from './pages/SignIn';
import Text from './elements/Text';
import {Route, BrowserRouter} from 'react-router-dom';  // 경로설정및 이동을위해 꼭 필요함
// import { ConnectedRouter} from "connected-react-router";
import SignUp from './pages/SignUp';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Route path="/api/sign-in" exact component={SignIn} />
      <Route path="/api/sign-up" exact component={SignUp} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
