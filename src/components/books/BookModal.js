import React from "react";
import { Image, Icon, Modal, Header, Button } from "semantic-ui-react";

class BookModal extends React.Component {
]

  render() {
    return (
        <Modal
        trigger={
          <Button animated>
            <Button.Content visible>Add to Shelf</Button.Content>
            <Button.Content hidden>
              <Icon name="book" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>
          {this.props.bookProp.title}
        </Modal.Header>
        <Modal.Content image>
          {this.props.bookProp.image ? (
            <Image
              src={
                this.props.bookProp.image
              }
              wrapped
              size="small"
              ui={false}
            />
          ) : (
            <Image
              src={require("./No_Img_Avail.jpg")}
              alt="Not Available"
              size="small"
            />
          )}
          <Modal.Description>
            <Header>{this.props.bookProp.author}</Header>
          </Modal.Description>
        </Modal.Content>

        <Checkbox
        label="Favorite"
        onChange={this.handleFavorite}
        />
        <Dropdown
          placeholder="Select Rating"
          fluid
          selection
          options={this.props.ratingProp}
          onChange={this.handleDropDownChange}
        />
        <br />

        <Button animated onClick={this.createNewBook}>
          <Button.Content visible>Add to Shelf</Button.Content>
          <Button.Content hidden>
            <Icon name="book" />
          </Button.Content>
        </Button>
      </Modal>
    );
  }
}

export default BookModal;