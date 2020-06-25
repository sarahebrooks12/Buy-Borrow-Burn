import React from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  Icon,
  Image,
  Button,
  Modal,
  Header,
  Checkbox,
  Dropdown,
} from "semantic-ui-react";
import "./SearchCard.css";
import BookManager from "../../modules/BookManager";
//grid nor card group is working? take off description and try again?
//connect modal into this card

class SearchResultsCard extends React.Component {
  state = {
    ratingId: "",
    favorite: false
  };

  createNewBook = (evt) => {
    console.log(this.state.ratingId);
    evt.preventDefault();
    const bookObject = {
      title: this.props.searchProp.volumeInfo.title,
      author: this.props.searchProp.volumeInfo.authors,
      ratingId: this.state.ratingId,
      googleBooksRating: this.props.searchProp.volumeInfo.averageRating,
      userId: 1,
      favorite: this.state.favorite,
    };
    BookManager.postBook(bookObject).then(() =>
      this.props.history.push("/myBookshelf")
    );
  };

 handleDropDownChange= (event, {value}) => {
    this.setState({ratingId: value})
}
//evt.target.checked=true or false
//setState
//set Favorite property in state to either true or false
  handleFavorite = (event, {checked}) => {
    this.setState({ favorite: checked });
  }
  

  render() {
    return (
      <>
        <div id="searchCard">
          <Card.Group itemsPerRow={4}>
            <Card>
              {this.props.searchProp.volumeInfo.imageLinks ? (
                <Image
                  src={
                    this.props.searchProp.volumeInfo.imageLinks.smallThumbnail
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

              <Card.Content>
                <Card.Header>
                  {this.props.searchProp.volumeInfo.title}
                </Card.Header>
                <Card.Meta>
                  <span>{this.props.searchProp.volumeInfo.authors}</span>
                </Card.Meta>
                <div className="ui divider">
                  <a>
                    <Icon name="star" />
                    {this.props.searchProp.volumeInfo.averageRating}
                  </a>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
        <div>
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
              {this.props.searchProp.volumeInfo.title}
            </Modal.Header>
            <Modal.Content image>
              {this.props.searchProp.volumeInfo.imageLinks ? (
                <Image
                  src={
                    this.props.searchProp.volumeInfo.imageLinks.smallThumbnail
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
                <Header>{this.props.searchProp.volumeInfo.authors}</Header>
                {this.props.searchProp.volumeInfo.description}
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
        </div>
      </>
    );
  }
}

export default withRouter(SearchResultsCard);
