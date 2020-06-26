import React from "react";
import {
  Image,
  Card,
  Icon,
  Modal,
  Header,
  Button,
  Checkbox,
  Dropdown,
} from "semantic-ui-react";
import BookManager from "../../modules/BookManager";

class BookCard extends React.Component {
  state = {
    ratingId: "",
    favorite: false,
  };

  handleDropDownChange = (event, { value }) => {
    this.setState({ ratingId: value });
  };

  handleFavorite = (event, { checked }) => {
    this.setState({ favorite: checked });
  };
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//
// This is currently not working --- is it an application views problem? I'm gonna assume that delete will do the same damn thing.
  updateBook = (evt) => {
    evt.preventDefault();
    const bookObject = {
      title: this.props.bookProp.title,
      author: this.props.bookProp.author,
      ratingId: this.state.ratingId,
      googleBooksRating: this.props.bookProp.googleBooksRating,
      image: this.props.bookProp.image,
      userId: "",
      favorite: this.state.favorite,
    }
    BookManager.updateBook(bookObject).then(() =>
      this.props.history.push("/myBookshelf")
    )
  };

  ternary = (that) => {
    if (this.props.bookProp.ratingId === 1) {
      that = "dollar";
    } else if (this.props.bookProp.ratingId === 2) {
      that = "heart outline";
    } else if (this.props.bookProp.ratingId === 3) {
      that = "fire";
    }
  };

  render() {
    return (
      <>
        <div>
          <Modal
            trigger={
              <Card
                href="#class"
                header={this.props.bookProp.title}
                meta={this.props.bookProp.author}
                image={this.props.bookProp.image}
                icon={this.ternary}
              />
            }
          >
            <Modal.Header>{this.props.bookProp.title}</Modal.Header>
            <Modal.Content image>
              {this.props.bookProp.image ? (
                <Image
                  src={this.props.bookProp.image}
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

            <Checkbox label="Favorite" onChange={this.handleFavorite} />
            <Dropdown
              placeholder="Select Rating"
              fluid
              selection
              options={this.props.ratingProp}
              onChange={this.handleDropDownChange}
            />
            <br />

            <Button animated onClick={this.updateBook}>
              <Button.Content visible>Update</Button.Content>
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

export default BookCard;
