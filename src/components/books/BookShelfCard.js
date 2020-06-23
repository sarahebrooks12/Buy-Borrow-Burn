import React, { Component } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import BookManager from "../../modules/BookManager";

class NavBar extends Component {
  state = {
    activeItem: "inbox",
    searchBar: ""
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
        BookManager.getSearch(this.state.searchBar).then((response) =>
        this.props.history.push({
          pathname: '/browse',
          state: { detail: response.data }
        }))}}

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
          <Input
            id="searchBar"
            icon="search"
            placeholder="Search bookshelves..."
            onChange={this.handleFieldChange}
            onKeyDown={this.add}
          />
        </Menu.Item>
      </Menu>
    );
  }
}
// export default NavBar
export default withRouter(NavBar);


<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>