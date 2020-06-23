import React, { Component } from "react";
import { Input, Label, Menu, Sidebar, Icon } from "semantic-ui-react";
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
      BookManager.getSearch(this.state.searchBar).then((response) => {
        // console.log(this.props.history.location.state.detail[0].volumeInfo.title)
        // console.log(this.props.history.location.state.detail[0].volumeInfo.authors[0])
        // console.log(this.props.history.location.state.detail[0].volumeInfo.description)
        // console.log(this.props.history.location.state.detail[0].volumeInfo.averageRating)
        // console.log(this.state.searchBar, "what are you?");
        // console.log(response, "is this api?");
        this.props.history.push({
          pathname: "/browse",
          state: { detail: response.items },
        });
      });
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
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
        <Menu vertical fluid={true}>
          <Menu.Item
            id="button"
            as={NavLink}
            to="/home"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            id="button"
            as={NavLink}
            to="/myBookshelf"
            name="myBookshelf"
            active={activeItem === "myBookshelf"}
            onClick={this.handleItemClick}
          >
            <Label>51</Label>
            My Bookshelf
          </Menu.Item>

          <Menu.Item
            id="button"
            as={NavLink}
            to="/following"
            name="following"
            active={activeItem === "following"}
            onClick={this.handleItemClick}
          >
            <Label>1</Label>
            Following
          </Menu.Item>
          <Menu.Item>
            <Input
              id="searchBar"
              icon="search"
              placeholder="Search..."
              onChange={this.handleFieldChange}
              onKeyDown={this.add}
            />
          </Menu.Item>
        </Menu>
      </Sidebar>
    );
  }
}
export default withRouter(NavBar);
