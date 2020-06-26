import React, { Component } from "react";
//import the components we will need
import BookShelf from "./BookShelf";
import BookManager from "../../modules/BookManager";
// import { Button, Icon } from "semantic-ui-react";

class BookList extends Component {
 state = {
    books: [],
    ratings: []
  };
  componentDidMount() {
    BookManager.getRatings().then((ratings) => {
      const rateOption = ratings.map(x => {

        return ({
         key: x.id,
         text: x.name,
         value: x.id
       })
      })
      this.setState({
        ratings: rateOption,
      });
    });
    BookManager.getAllBooks().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  render() {

    return (
      <>
        {this.state.books.map((currentBookInLoop) => {
          return (
            <BookShelf
              key={currentBookInLoop.id}
              bookProp={currentBookInLoop}
              ratingProp={this.state.ratings}
            />
          );
        })}
      </>
    );
  }
}

export default BookList;
