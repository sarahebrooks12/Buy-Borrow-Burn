import React from "react";
import { Grid, Image } from "semantic-ui-react";

class ResourceCard extends React.Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ResourceCard;
