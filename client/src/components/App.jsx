import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
/* import Links from "./pages/Links"; */
import AddLinks from "./pages/AddLinks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import api from "../api";
import logo from "../logo.svg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            IRONLINK<span id="secretButton">S</span>
          </h1>
          <p className="">Dev Squad #126</p>
          <NavLink to="/" exact>
            Home
          </NavLink>
          {/* <NavLink to="/links">Links</NavLink> */}
          {api.isLoggedIn() && <NavLink to="/add-link">Add link</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/links" component={Links} /> */}
          <Route path="/add-link" component={AddLinks} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}
