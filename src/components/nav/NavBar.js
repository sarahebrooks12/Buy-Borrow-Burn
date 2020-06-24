import React, { Component } from "react";
import { Input, Label, Menu, Sidebar } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import BookManager from "../../modules/BookManager";
import "./NavBar.css";
class NavBar extends Component {
  state = {
    activeItem: "inbox",
    searchBar: "",
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  add = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      BookManager.getGeneralSearch(this.state.searchBar).then((response) => {
        // console.log(this.props.history.location.state.detail[0].volumeInfo.title)
        // console.log(this.props.history.location.state.detail[0].volumeInfo.authors[0])
        // console.log(this.props.history.location.state.detail[0].volumeInfo.description)
        // console.log(this.props.history.location.state.detail[0].volumeInfo.averageRating)
        // console.log(this.state.searchBar, "what are you?");
        // console.log(response, "is this api?");
        this.props.history.push({
          pathname: "/searchResults",
          state: { detail: response.items },
        });
      });
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <>
      <p>Sarah</p>
      <Sidebar
        id="sideBar"
        as={Menu}
        animation="overlay"
        icon="labeled"
        direction="left"
        // inverted
        vertical
        visible
      >
        {/* add image to top corner? make it longer that way? */}
        <Menu 
        color="purple"
        vertical 
        fluid={true}>
          <Menu.Item
            id="buttonNav"
            as={NavLink}
            to="/home"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            id="buttonNav"
            as={NavLink}
            to="/myBookshelf"
            name="myBookshelf"
            active={activeItem === "myBookshelf"}
            onClick={this.handleItemClick}
          >
            <Label size="tiny">51</Label>
           Bookshelf
          </Menu.Item>

          <Menu.Item
            id="buttonNav"
            as={NavLink}
            to="/browse"
            name="browse"
            active={activeItem === "browse"}
            onClick={this.handleItemClick}
          >
            <Label size="tiny">51</Label>
            Browse
          </Menu.Item>

          <Menu.Item
            id="buttonNav"
            as={NavLink}
            to="/following"
            name="following"
            active={activeItem === "following"}
            onClick={this.handleItemClick}
          >
            <Label size="tiny">1</Label>
            Following
          </Menu.Item>
          <Menu.Item>
            <Input
              id="searchBar"
              icon="tiny search"
              placeholder="Search..."
              onChange={this.handleFieldChange}
              onKeyDown={this.add}
            />
          </Menu.Item>
        </Menu>
      </Sidebar>
      </>
    );
  }
}
export default withRouter(NavBar);
