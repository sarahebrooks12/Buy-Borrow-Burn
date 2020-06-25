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
                  <Card.Header>Title</Card.Header>
                  <Card.Meta>
                    <span>Author</span>
                  </Card.Meta>
                  <a>
                    <Icon name="star" />
                    
                    <br />
                    {/* if rating = this then print this ternary statement */}
                    <Icon name="dollar" />
                    
                    <br />
                    <Icon name="heart outline" />
                   
                    <br />
                    <Icon name="fire" />
                   
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column >To Read</Grid.Column>
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
