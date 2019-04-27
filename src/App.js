import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NewProject from "./components/NewProject";
import AllProjects from "./components/AllProjects";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Manage your Project</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/profile/projects/new" exact component={ NewProject } />
            <PrivateRoute path="/profile/allprojects" exact component={ AllProjects } />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
