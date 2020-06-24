import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
// import BookManager from "../modules/BookManager"

class Main extends Component {
//set state - method --- state --- application views --- browse
// nav bar --> main js ---> application views ---> browse ---> DOM
// componentDidMount() {
//   BookManager.getAll().then((booksFromApi) => {
//     this.setState({
//       booksFromApi: booksFromApi,
//     });
//   });
// }



  render() {
    return (
      <>
      <div className="ui grid">
        <div className="four wide column">
        <NavBar />
        </div>
        <div className="twelve wide column">
        <ApplicationViews />
        </div>
        </div>
      </>
    );
  }
}

export default Main;
