import React, { Component } from "react";
import { Input, Image, Menu, Sidebar, Button, Icon } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import BookManager from "../../modules/BookManager";
import "./NavBar.css";
class NavBar extends Component {
  state = {
    activeItem: "inbox",
    searchBar: "",
    // isAuthenticated: false
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
        this.props.history.push({
          pathname: "/searchResults",
          state: { detail: response.items },
        });
      });
    }
  };

  isAuthenticated = () => localStorage.getItem("userId") !== null;

  clearStorage = () => {
    localStorage.clear();
    this.props.history.push("/home");
  };

  goToLogin = () => this.props.history.push("/");

  render() {
    const { activeItem } = this.state;

    return (
      <>
        
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
          <Image id="BBB" src={require("./BBB.png")} alt="Logo" size="small" />
          <Menu color="black" vertical fluid={true}>
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
              {/* <Label size="small">51</Label> */}
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
              {/* <Label size="tiny"></Label> */}
              Browse
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
            <Menu.Item>
              {localStorage.getItem("isAuthenticated") === null ? (
                <Button animated onClick={this.goToLogin}>
                  <Button.Content visible>Login</Button.Content>
                  <Button.Content hidden>
                    <Icon name="handshake outline" />
                  </Button.Content>
                </Button>
              ) : (
                <Button animated onClick={this.clearStorage}>
                  <Button.Content visible>Logout</Button.Content>
                  <Button.Content hidden>
                    <Icon name="hand peace outline" />
                  </Button.Content>
                </Button>
              )}
            </Menu.Item>
          </Menu>
        </Sidebar>
      </>
    );
  }
}
export default withRouter(NavBar);

{
  /* <Menu.Item
id="buttonNav"
as={NavLink}
to="/following"
name="following"
active={activeItem === "following"}
onClick={this.handleItemClick}
>
<Label size="small">1</Label>
Following
</Menu.Item> */
}
