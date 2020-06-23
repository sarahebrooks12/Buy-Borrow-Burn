import React, { Component } from "react";
//import the components we will need
import SearchCard from "./SearchCard";
import BookManager from "../../modules/BookManager";
// import { Button, Icon } from "semantic-ui-react";

class SearchList extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BookManager.getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  render() {
    return (
      <>
      <div>
        {this.props.history.location.state.detail.map((currentBookInLoop) => {
          return (
            <SearchCard
              key={currentBookInLoop.id}
              searchProp={currentBookInLoop}
            />
           
          );
        })}
         </div>
      </>
    );
  }
}

export default SearchList;
