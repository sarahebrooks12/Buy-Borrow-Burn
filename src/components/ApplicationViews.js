import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home.js";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/home"
          render={(props) => {
            return <Home  {...props}/>
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
