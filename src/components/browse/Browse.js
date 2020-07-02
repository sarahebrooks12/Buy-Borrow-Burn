import React, { Component } from "react";
import {
  Grid,
  Image,
  Input,
  Button,
  Icon,
  Label,
  Card,
} from "semantic-ui-react";
import BookManager from "../../modules/BookManager";
import "./Browse.css"
// import { NavLink, withRouter } from "react-router-dom";

class Browse extends Component {
  state = {
    titleSearch: "",
    authorSearch: "",
    items: [],
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    // console.log(evt.target)
  };
  title = (event) => {
    if (event.keyCode === 13) {
      // event.preventDefault();
      BookManager.getTitleSearch(this.state.titleSearch).then((response) => {
        // console.log(response)
        this.setState({ items: response.items });
      });
    }
  };
  author = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      BookManager.getAuthorSearch(this.state.authorSearch).then((response) =>
        this.setState({ items: response.items })
      );
    }
  };

  render() {
    return (
      <div>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Input
                id="titleSearch"
                onChange={this.handleFieldChange}
                onKeyDown={this.title}
                placeholder="Search..."
              />
              <Label>Search by Title</Label>
            </Grid.Column>
            <Grid.Column>
              <Input
                id="authorSearch"
                onChange={this.handleFieldChange}
                onKeyDown={this.author}
                placeholder="Search..."
              />
              <Label>Search by Author</Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {this.state.items.map((currentResponseInLoop) => {
              return (
                <Card id="cardSize">
                  {currentResponseInLoop.volumeInfo.imageLinks ? (
                    <Image
                      src={
                        currentResponseInLoop.volumeInfo.imageLinks
                          .smallThumbnail
                      }
                      wrapped
                      id="imageSize"
                      size="mini"
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
                      {currentResponseInLoop.volumeInfo.title}
                    </Card.Header>
                    <Card.Meta>
                      <span>{currentResponseInLoop.volumeInfo.authors}</span>
                    </Card.Meta>
                    <Card.Description>
                      {currentResponseInLoop.volumeInfo.averageRating}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              );
            })}
            {/* Map to call cards */}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Browse;
