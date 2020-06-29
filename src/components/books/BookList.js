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

  render() {
    return (
      <>
        {this.state.books.map((currentBookInLoop) => {
          return (
            <BookCard
              key={currentBookInLoop.id}
              bookProp={currentBookInLoop}
              ratingProp={this.state.ratings}
            />
          );
        })}
        <Grid divided="vertically">
          <br />

          {/* 4 divs if true place in div */}
          {this.state.books.ratingId === 4 ? (
            <Grid.Row columns={1}>
              <Grid.Column>Want to Read</Grid.Column>
              <BookCard />
            </Grid.Row>
          ) : (
            <Grid.Row columns={1}>
              <Grid.Column>Want to Read</Grid.Column>
            </Grid.Row>
          )}

          {this.state.books.favorite === true ? (
            <Grid.Row columns={1}>
              <Grid.Column>Favorites</Grid.Column>
              <BookCard
                bookProp={this.props.bookProp}
                ratingProp={this.props.ratingProp}
                {...this.props}
              />
            </Grid.Row>
          ) : (
            <Grid.Row columns={1}>
              <Grid.Column>Favorites</Grid.Column>
            </Grid.Row>
          )}

          {this.state.books.ratingId === 1 ? (
            <Grid.Row columns={1}>
              <Grid.Column>Buy</Grid.Column>
              <BookCard 
              bookProp={this.props.bookProp}
              ratingProp={this.props.ratingProp}
              {...this.props} />
            </Grid.Row>
          ) : (
            <Grid.Row columns={1}>
              <Grid.Column>Buy</Grid.Column>
            </Grid.Row>
          )}

          {this.state.books.ratingId === 2 ? (
            <Grid.Row columns={1}>
              <Grid.Column>Borrow</Grid.Column>
              <BookCard 
              bookProp={this.props.bookProp}
              ratingProp={this.props.ratingProp}
              {...this.props}
              />
            </Grid.Row>
          ) : (
            <Grid.Row columns={1}>
              <Grid.Column>Borrow</Grid.Column>
            </Grid.Row>
          )}

          {this.state.books.ratingId === 3 ? (
            <Grid.Row columns={1}>
              <Grid.Column>Burn</Grid.Column>
              <BookCard 
              bookProp={this.props.bookProp}
              ratingProp={this.props.ratingProp}
              {...this.props}
              />
            </Grid.Row>
          ) : (
            <Grid.Row columns={1}>
              <Grid.Column>Burn</Grid.Column>
            </Grid.Row>
          )}
        </Grid>
      </>
    );
  }
}

export default BookList;
