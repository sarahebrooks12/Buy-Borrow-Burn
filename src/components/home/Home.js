import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import BookManager from "../../modules/BookManager";
import "./Home.css";

class Home extends Component {
  state = {
   users: ""
  };

  componentDidMount() {
    BookManager.getAllUsers().then((users) => {       
      this.setState({
        users: users,
      });
    });
  }

  render() {
    return (
      <div id="backgroundImage">
        <h3 id="homePage">
          <Image
            fluid={true}
            // centered={true}
            id="Heading"
            src={require("./BuyBorrowBurn.png")}
            alt="Logo"
          />
         {/* <h1>Welcome {this.state.users.name}</h1> */}
        </h3>
      </div>
    );
  }
}

export default Home;
