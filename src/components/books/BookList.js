import React, { Component } from "react";
//import the components we will need
// import BookShelf from "./BookShelf";
import BookManager from "../../modules/BookManager";
import { Grid } from "semantic-ui-react";
import BookCard from "./BookCard";

class BookList extends Component {
  state = {
    books: [],
    ratings: [],
  };
  //map to go into dropdown menu --- specific to semantics
  componentDidMount() {
    BookManager.getRatings().then((ratings) => {
      const rateOption = ratings.map((x) => {
        return {
          key: x.id,
          text: x.name,
          value: x.id,
        };
      });
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

  getAllRefresh = () => {
    BookManager.getAllBooks().then((books) => {
      this.setState({
        books: books,
      });
    });
  };
  //getAll that can change state --- send prop that can change state
  render() {
    return (
      <>
        {/* Items are filtered then mapped into correct bookshelves */}
        <Grid divided="vertically">
          <br />
          <Grid.Row columns={1}>
            <Grid.Column>Want to Read</Grid.Column>
            {this.state.books
              .filter((x) => x.ratingId === 4)
              .map((currentBookInLoop) => {
                return (
                  <BookCard
                    getAllProp={this.getAllRefresh}
                    key={currentBookInLoop.id}
                    bookProp={currentBookInLoop}
                    ratingProp={this.state.ratings}
                  />
                );
              })}
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>Favorites</Grid.Column>
            {this.state.books
              .filter((x) => x.favorite === true)
              .map((currentBookInLoop) => {
                return (
                  <BookCard
                    getAllProp={this.getAllRefresh}
                    key={currentBookInLoop.id}
                    bookProp={currentBookInLoop}
                    ratingProp={this.state.ratings}
                  />
                );
              })}
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>Buy</Grid.Column>
            {this.state.books
              .filter((x) => x.ratingId === 1)
              .map((currentBookInLoop) => {
                return (
                  <BookCard
                    getAllProp={this.getAllRefresh}
                    key={currentBookInLoop.id}
                    bookProp={currentBookInLoop}
                    ratingProp={this.state.ratings}
                  />
                );
              })}
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>Borrow</Grid.Column>
            {this.state.books
              .filter((x) => x.ratingId === 2)
              .map((currentBookInLoop) => {
                return (
                  <BookCard
                    getAllProp={this.getAllRefresh}
                    key={currentBookInLoop.id}
                    bookProp={currentBookInLoop}
                    ratingProp={this.state.ratings}
                  />
                );
              })}
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>Burn</Grid.Column>
            {this.state.books
              .filter((x) => x.ratingId === 3)
              .map((currentBookInLoop) => {
                return (
                  <BookCard
                    getAllProp={this.getAllRefresh}
                    key={currentBookInLoop.id}
                    bookProp={currentBookInLoop}
                    ratingProp={this.state.ratings}
                  />
                );
              })}
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default BookList;
