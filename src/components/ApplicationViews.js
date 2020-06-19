import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home.js";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
