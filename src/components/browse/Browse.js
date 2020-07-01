import React, { Component } from "react";
import { Grid, Image, Input, Button, Icon, Label, Card } from "semantic-ui-react";
import BookManager from "../../modules/BookManager";
// import { NavLink, withRouter } from "react-router-dom";

class Browse extends Component {
  state = {
    titleSearch: "",
    authorSearch: "",
    results: ""
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  title = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      BookManager.getTitleSearch(this.state.titleSearch).then((response) => {
      });
    }
  };
  author = (event) => {
      if (event.keyCode === 13) {
          event.preventDefault()
          BookManager.getAuthorSearch(this.state.authorSearch).then((response) => {})
      }
  }

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
          <Grid.Column>
            {/* <Input placeholder='Search...' />
          <Label>Search to see if title is a Free E-book!</Label> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
}
}
export default Browse;
