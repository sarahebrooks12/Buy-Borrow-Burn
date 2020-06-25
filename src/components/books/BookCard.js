import React from "react";
import { Grid, Image, Card, Icon } from "semantic-ui-react";

class ResourceCard extends React.Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>Favorite</Grid.Column>
          <div class="test" id="searchCard">
            <Card.Group itemsPerRow={4}>
              <Card>
                <Card.Content>
                  <Card.Header>{this.props.bookProp.title}</Card.Header>
                  <Card.Meta>
                    <span>{this.props.bookProp.author}</span>
                  </Card.Meta>
                  <a>
                    <Icon name="star" />
                      {this.props.bookProp.googleBooksRating}
                    <br />
                    {/* if rating = this then print this ternary statement */}
                    {this.props.bookProp.ratingId === 1 ? (
               <Icon name="dollar" />
              ) : this.props.bookProp.ratingId === 2 ? (<Icon name="heart outline" />) : this.props.bookProp.ratingId === 3 ? ( <Icon name="fire" />) : ("")}
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>To Read</Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>Buy</Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>Borrow</Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>Burn</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ResourceCard;
