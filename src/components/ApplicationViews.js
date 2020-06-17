import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom"
// import Home from "./home/Home.js";

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Route
          exact
          path="/"
          render={(props) => {
            return <Home authProp={this.isAuthenticated()} {...props}/>;
          }}
        /> */}
      </React.Fragment>
    );
  }
}

export default ApplicationViews


