import React from "react";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
import BookCard from "./BookCard";

class ResourceCard extends React.Component {
  render() {
    return (
      <Grid divided="vertically">
        <br />

        {/* 4 divs if true place in div */}
        {this.props.bookProp.favorite === true ? (
          <Grid.Row columns={1}>
            <Grid.Column>Favorites</Grid.Column>
            <BookCard bookProp={this.props.bookProp} 
            ratingProp={this.props.ratingProp}/>
          </Grid.Row>
        ) : (
            <Grid.Row columns={1}>
            <Grid.Column>Favorites</Grid.Column>
          </Grid.Row>
        )}

        {this.props.bookProp.ratingId === 1 ? (
          <Grid.Row columns={1}>
            <Grid.Column>Buy</Grid.Column>
            <BookCard bookProp={this.props.bookProp}
            ratingProp={this.props.ratingProp} />
          </Grid.Row>
        ) : (
            <Grid.Row columns={1}>
            <Grid.Column>Buy</Grid.Column>
          </Grid.Row>
        )}

        {this.props.bookProp.ratingId === 2 ? (
          <Grid.Row columns={1}>
            <Grid.Column>Borrow</Grid.Column>
            <BookCard bookProp={this.props.bookProp}
            ratingProp={this.props.ratingProp} />
          </Grid.Row>
        ) : (
            <Grid.Row columns={1}>
            <Grid.Column>Borrow</Grid.Column>
          </Grid.Row>
        )}

        {this.props.bookProp.ratingId === 3 ? (
          <Grid.Row columns={1}>
            <Grid.Column>Burn</Grid.Column>
            <BookCard bookProp={this.props.bookProp}
            ratingProp={this.props.ratingProp} />
          </Grid.Row>
        ) : (
          <Grid.Row columns={1}>
            <Grid.Column>Burn</Grid.Column>
          </Grid.Row>
        )}
        {this.props.bookProp.ratingId === 4 ? (
          <Grid.Row columns={1}>
            <Grid.Column>Want to Read</Grid.Column>
            <BookCard bookProp={this.props.bookProp}
            ratingProp={this.props.ratingProp} />
          </Grid.Row>
        ) : (
            <Grid.Row columns={1}>
            <Grid.Column>Want to Read</Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    );
  }
}

export default ResourceCard;
