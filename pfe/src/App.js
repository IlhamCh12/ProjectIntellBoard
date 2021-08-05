import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, {useEffect} from 'react';
import Login from './components/login';
import Inscription from './components/inscription';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ProtectedLayout } from './ProtectedLayout';


function App() {

  
  return (
    <>
    <Router>
      <Switch>

        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/Inscription" exact>
          <Inscription/>
        </Route>
       
        <ProtectedLayout/>
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
