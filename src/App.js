import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch,Redirect } from "react-router-dom";
import "./App.css";
import NoMatch from './components/NoMatch/NoMatch';
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="Header">
            <nav>
              <ul>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from='/all-courses' to='/courses' /> 
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
