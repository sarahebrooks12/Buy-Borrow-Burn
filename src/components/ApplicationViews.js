import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home.js";
import SearchList from "./search/SearchList"

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
        <Route 
        exact
        path="/searchResults"
        render={(props) => {
          return <SearchList {...props}/>
        }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
