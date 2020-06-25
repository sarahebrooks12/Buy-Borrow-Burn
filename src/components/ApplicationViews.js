import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home.js";
import SearchList from "./search/SearchList"
import BookList from './books/BookList'

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
          return <BookList {...props}/>
        }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
