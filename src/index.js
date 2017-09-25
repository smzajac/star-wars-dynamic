import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import People from './components/People';
import Starships from './components/Starships';
import Films from './components/Films';
import Explorer from './components/Explorer';
import Layout from './components/Layout';
import Details from './components/Details';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<


ReactDOM.render(

      <BrowserRouter>
      <Layout>
      <Switch>
      <Route exact path="/" component={Explorer}/>
      <Route path="/people" component={People}/>
      <Route path="/details/:endpoint/:id" component={Details}/>
      <Route path="/Films" component={Films}/>
      <Route path="/Starships" component={Starships}/>

      </Switch>
      </Layout>
      </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();


{/* >>>>>>>>>>>>>>>>>>>>>
  Add a router components with routes to:
  Explorer. Use an exact path to "/"
  Starships
  Films
  People
  Details: Dynamic route with the following params: endpoing and id
  <<<<<<<<<<<<<<<<<<<<<<
  */}
