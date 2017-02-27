import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute ,hashHistory} from 'react-router';
import App from './App';
import Home from './components/Home/Home';
import Cases from './components/Cases/Cases';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Job from './components/Job/Job';
class Routers extends Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
            <Route path='/cases' component={Cases}/>
            <Route path='/team' component={Team}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/job' component={Job}/>
        </Route>
      </Router>
    )
  }
}


export default Routers;
