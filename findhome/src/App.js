import './App.css';
import React from 'react';
import SignIn from './pages/SignIn';
import Text from './elements/Text';
import {Route, BrowserRouter} from 'react-router-dom';  // 경로설정및 이동을위해 꼭 필요함
// import { ConnectedRouter} from "connected-react-router";
import { ConnectedRouter } from 'connected-react-router';
import {history} from './redux/configureStore';
import SignUp from './pages/SignUp';
import PostList from './pages/PostList';
import Header from './components/Header';
import PostWrite from './pages/PostWrite';
import Detail from './pages/PostDetail';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history ={history} >
      <Route path="/" exact component={PostList} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/post-write" exact component={PostWrite} />
      <Route path="/post-detail:id" exact component={Detail} />
      
      
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
