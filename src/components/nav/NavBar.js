import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" id="navBar">
          <Navbar.Brand href="/"><b>B</b>uy, <b>B</b>orrow, <b>B</b>uy</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">My Bookshelf</Nav.Link>
            <Nav.Link href="/events">Friends' Bookshelves</Nav.Link>
            <Nav.Link href="/tasks">Search</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default NavBar;
