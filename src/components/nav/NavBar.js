import React, { Component } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

export default class NavBar extends Component {
  state = { 
    activeItem: "myBookshelf"
   };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    const { activeItem } = this.state;

 
    return (
      <Menu vertical>
        <Menu.Item
          as={NavLink}
          to="/home"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
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
          <Input icon="search"
          placeholder="Search bookshelves..."
          onChange={this.handleFieldChange} 
          />
        </Menu.Item>
      </Menu>
    );
  }
}
