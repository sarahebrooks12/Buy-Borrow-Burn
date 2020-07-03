import React, { Component } from "react";
import BrowseCard from "./BrowseCard";
import BookManager from "../../modules/BookManager";
import { withRouter } from "react-router-dom";
import { Grid, Input, Label } from "semantic-ui-react";

class BrowseList extends Component {
  state = {
    titleSearch: "",
    ratings: [],
    authorSearch: "",
    items: [],
    ratingId: "",
    favorite: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    // console.log(evt.target)
  };


  componentDidMount() {
    BookManager.getRatings().then((ratings) => {
      const rateOption = ratings.map((x) => {
        return {
          key: x.id,
          text: x.name,
          value: x.id,
        };
      });
      this.setState({
        ratings: rateOption,
      });
    });
  }

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
      <>
        <div id="tommyCSS">
          <Grid columns={3} equal>
            <Grid.Row textAlign="center">
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
            <Grid.Row textAlign="center">
              {this.state.items.map((currentBookInLoop) => {
                return (
                  <BrowseCard
                    key={currentBookInLoop.id}
                    searchProp={currentBookInLoop}
                    ratingProp={this.state.ratings}
                  />
                );
              })}
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
  }
}

export default withRouter(BrowseList);
