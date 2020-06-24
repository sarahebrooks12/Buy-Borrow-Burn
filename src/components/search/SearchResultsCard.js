import React from "react";
import { Card, Icon, Image, Button, Modal, Header } from "semantic-ui-react";
import "./SearchCard.css";
//grid nor card group is working? take off description and try again?
//connect modal into this card
class SearchResults extends React.Component {
  render() {
    return (
      <>
        <div id="searchCard">
          <Card.Group itemsPerRow={4}>
            <Card>
              {/* <Image
          // can I do ternary statement? so this will contain to work?
            src={this.props.searchProp.volumeInfo.imageLinks.smallThumbnail}
            wrapped
            size="small"
            ui={false}
            n
          /> */}
              <Card.Content>
                <Card.Header>
                  {this.props.searchProp.volumeInfo.title}
                </Card.Header>
                <Card.Meta>
                  <span>{this.props.searchProp.volumeInfo.authors}</span>
                </Card.Meta>
                <Card.Description>
                  {this.props.searchProp.volumeInfo.description}
                </Card.Description>
              </Card.Content>
             
            </Card>
          </Card.Group>
        </div>
        <div>
          <Modal trigger={ <Button animated>
                <Button.Content visible>Add to Shelf</Button.Content>
                <Button.Content hidden>
                  <Icon name="book" />
                </Button.Content>
              </Button>}>
            <Modal.Header>{this.props.searchProp.volumeInfo.title}</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="medium"
                src={this.props.searchProp.volumeInfo.imageLinks.smallThumbnail}
              />
              <Modal.Description>
                <Header>{this.props.searchProp.volumeInfo.authors}</Header>
                {this.props.searchProp.volumeInfo.description}
              </Modal.Description>
            </Modal.Content>
            <Button animated>
                <Button.Content visible>Add to Shelf</Button.Content>
                <Button.Content hidden>
                  <Icon name="book" />
                </Button.Content>
              </Button>
          </Modal>
        </div>
      </>
    );
  }
}
export default SearchResults;
