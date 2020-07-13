import React, { Component } from "react";
//import the components we will need
// import BookShelf from "./BookShelf";
import BookManager from "../../modules/BookManager";
import { Grid, Header, Icon, Menu, Segment } from "semantic-ui-react";
import BookCard from "./BookCard";
import "./Book.css";

class BookList extends Component {
  state = {
    books: [],
    ratings: [],
    activeItem: 'bio'
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
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //getAll that can change state --- send prop that can change state
  render() {
    const { activeItem } = this.state
    return (
      <>
        {/* Items are filtered then mapped into correct bookshelves */}
        <Grid divided="vertically">
          <br />

          <Grid.Row id="border" columns={1}>
            <Grid.Column>
              {" "}
              <Header as="h2">
                <Icon circular color='white' name='bookmark'/>
                <Header.Content>Currently Reading</Header.Content>
              </Header>
            </Grid.Column>
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
          <br />

          <Grid.Row id="border" columns={1}>
            <Grid.Column><Header as="h2">
                <Icon circular inverted color='yellow' name='star'/>
                <Header.Content>Favorites</Header.Content>
              </Header></Grid.Column>
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
          <br />
          <Grid.Row id="border" columns={1}>
            <Grid.Column><Header as="h2">
                <Icon circular inverted color='green' name='dollar'/>
                <Header.Content>Buy</Header.Content>
              </Header></Grid.Column>
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
          <br />
          <Grid.Row id="border" columns={1}>
            <Grid.Column><Header as="h2">
                <Icon circular inverted color='orange' name='recycle'/>
                <Header.Content>Borrow</Header.Content>
              </Header></Grid.Column>
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
          <br />
          <Grid.Row id="border" columns={1}>
            <Grid.Column><Header as="h2">
                <Icon circular inverted color='red' name='fire'/>
                <Header.Content>Burn</Header.Content>
              </Header></Grid.Column>
            {this.state.books
              .filter((x) => x.ratingId === 5)
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
          <br />
          <Grid.Row id="border" columns={1}>
            <Grid.Column><Header as="h2">
                <Icon circular inverted color='grey' name='bookmark outline'/>
                <Header.Content>Want to Read</Header.Content>
              </Header></Grid.Column>
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
        </Grid>
      </>
    );
  }
}

export default BookList;
