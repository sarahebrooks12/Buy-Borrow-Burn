import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home.js";
import SearchList from "./search/SearchList"
import ResourceCard from './reusables/ResourceCard'

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
        <Route 
        exact
        path="/myBookshelf"
        render={(props) => {
          return <ResourceCard {...props}/>
        }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
