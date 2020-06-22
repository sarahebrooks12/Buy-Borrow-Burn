import React, { Component } from "react";
//import the components we will need
import ResourceCard from "./reusables/ResourceCard";
import BookManager from "../../modules/BookManager";
import "./EventList.css";
import { Button, Icon } from 'semantic-ui-react'

class BookList extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BookManager.getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  render() {
//     this.state.books.sort((a, b) => { 
//       return a.date > b.date ? 1 : -1;
//    });


    return (
      <>
      <Button animated>
      <Button.Content visible>Add Book</Button.Content>
      <Button.Content hidden>
        <Icon name='book' />
      </Button.Content>
      </Button>
        {/* //   <Button
        //   variant="outline-dark"
        //     type="button"
        //     className="btn"
        //     onClick={() => {
        //       this.props.history.push("/myBookshelf/new");
        //     }}
        //   >
        //     Add Event
        //   </Button> */}
          
          {this.state.books.map((currentBookInLoop) => {
            return (
              <ResourceCard
              
                key={currentBookInLoop.id}
                resource={currentBookInLoop}
              />
            
            );
            
          })}
          
      </>
    );
  }
}

export default BookList;
