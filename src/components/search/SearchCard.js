import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

class Search extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={3}>
        <Card>
          <Image
            src={this.props.searchProp.volumeInfo.imageLinks.smallThumbnail}
            wrapped
            ui={false}n
          />
          <Card.Content>
            <Card.Header>{this.props.searchProp.volumeInfo.title}</Card.Header>
            <Card.Meta>
              <span>{this.props.searchProp.volumeInfo.authors}</span>
            </Card.Meta>
            <Card.Description>
              {this.props.searchProp.volumeInfo.description}
            </Card.Description>
          </Card.Content>
          <Button animated>
            <Button.Content visible>Add to Shelf</Button.Content>
            <Button.Content hidden>
              <Icon name="book" />
            </Button.Content>
          </Button>
        </Card>
      </Card.Group>
    );
  }
}
export default Search;
