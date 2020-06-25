import React, { Component } from "react";
//import the components we will need
import BookCard from "./BookCard";
import BookManager from "../../modules/BookManager";
// import { Button, Icon } from "semantic-ui-react";

class BookList extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BookManager.getAllBooks().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  render() {
    //     this.state.books.sort((a, b) => {
    //       return a.date > b.date ? 1 : -1;
    //    });

    return (
      <>
        {this.state.books.map((currentBookInLoop) => {
          return (
            <BookCard
              key={currentBookInLoop.id}
              bookProp={currentBookInLoop}
            />
          );
        })}
      </>
    );
  }
}

export default BookList;
