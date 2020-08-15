import React from 'react';
import './App.css';
import Home from './components/Home'
import LMainPage from './components/LMainPage'
import Slibrary from './components/Slibrary'
import Llibrary from './components/Llibrary'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/LMainPage" component={LMainPage} /> 
    <Route path="/Slibrary" component={Slibrary} /> 
    <Route path="/Llibrary" component={Llibrary} /> 
    </Switch>
    </div>
    </Router>
  );
}

export default App;
