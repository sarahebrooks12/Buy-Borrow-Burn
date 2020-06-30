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
import "./Book.css";

class BookCard extends React.Component {
  state = {
    ratingId: "",
    favorite: false,
    loadingStatus: false,
  };

  handleDropDownChange = (event, { value }) => {
    this.setState({ ratingId: value });
  };

  handleFavorite = (event, { checked }) => {
    this.setState({ favorite: checked });
  };

  updateBook = (evt) => {
    evt.preventDefault();
    const bookObject = {
      id: this.props.bookProp.id,
      title: this.props.bookProp.title,
      author: this.props.bookProp.author,
      ratingId: this.state.ratingId,
      googleBooksRating: this.props.bookProp.googleBooksRating,
      image: this.props.bookProp.image,
      userId: this.props.bookProp.userId,
      favorite: this.state.favorite,
    };
    BookManager.updateBook(bookObject).then(
      () => this.props.getAll,
      // this.confirmClick
    );
  };

  deleteBook = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true });
    BookManager.deleteBook(this.props.bookProp.id).then(() =>
      this.props.history.push("/myBookshelf#class")
    );
  };
  

  // confirmClick = (event, data) => {
  //   this.props.handleClose();
  // };

  // sizeSmall = () => {
  //   {this.props.bookProp.image}
  // }
  ternary = (that) => {
    if (this.props.bookProp.ratingId === 1) {
      that = "Buy";
    } else if (this.props.bookProp.ratingId === 2) {
      that = "Borrow";
    } else if (this.props.bookProp.ratingId === 3) {
      that = "Burn";
    }
  };

  render() {
    return (
      <>
        <div>
          <Modal
            id="resizeThat"
            trigger={
              <Card
                id="resizeThis"
                href="#class"
                header={this.props.bookProp.title}
                meta={this.props.bookProp.author}
                image={this.props.bookProp.image}
                description={this.ternary}
              />
            }
          >
            <Modal.Header>{this.props.bookProp.title}</Modal.Header>
            <Modal.Content>
              <Header>{this.props.bookProp.author}</Header>
            </Modal.Content>
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
            </Modal.Content>

            <Checkbox label="Favorite" onChange={this.handleFavorite} />
            <Dropdown
              placeholder="Select Rating"
              selection
              options={this.props.ratingProp}
              onChange={this.handleDropDownChange}
            />
            <br />

            <Button animated onClick={this.updateBook}>
              <Button.Content visible>Update</Button.Content>
              <Button.Content hidden>
                <Icon name="edit outline" />
              </Button.Content>
            </Button>
            <Button animated onClick={this.deleteBook}>
              <Button.Content visible>Delete</Button.Content>
              <Button.Content hidden>
                <Icon name="trash alternate outline" />
              </Button.Content>
            </Button>
          </Modal>
        </div>
      </>
    );
  }
}

export default BookCard;
