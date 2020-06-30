import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from "./home/Home.js";
import SearchList from "./search/SearchList"
import BookList from './books/BookList'
import Register from "./auth/Register.js";
import Login from "./auth/Login.js"


class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/register"
          render={(props) => {
            return <Register authProp={this.isAuthenticated()} {...props}/>;
          }}
        />
        <Route
          exact
          path="/"
          render={(props) => {
            return <Login {...props} />;
          }}
        />
        {/* <Route path="/login" component={Login} /> */}
       
       
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
