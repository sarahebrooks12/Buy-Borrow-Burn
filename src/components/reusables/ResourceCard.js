import React from "react";
import { Grid, Image, Card, Icon } from "semantic-ui-react";

class ResourceCard extends React.Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>Favorite</Grid.Column>
          <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
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
