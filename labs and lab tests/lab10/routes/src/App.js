import React, { Component } from 'react';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom'
import './App.css';
import Header from './header/header'
import About from './header//About'
import Home from './header//Home'
import Contact from './header//Contact'
import Error from './header//Error'
import Student from './Student/Student'
import history from './History'


class App extends Component {
  render() {
    return (
    <div>
      <BrowserRouter history={history}>
      <Header/>
      <Switch> 
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/student/:studentname/:studentno" component={Student}/>
        <Route component={Error}/>
      </Switch>
  </BrowserRouter>
    </div>
      
    );
  }
}

const NewRoute = () =>{
  return(
    <div>
      <p>New Route</p>
    </div>
  )
}



export default App;
