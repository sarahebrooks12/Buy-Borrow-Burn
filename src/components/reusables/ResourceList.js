import React, { Component } from "react";
import ResourceCard from "./ResourceCard";
import BookManager from "../../modules/BookManager";
// import { Button, Icon } from "semantic-ui-react";

class ResourceList extends Component {
  state = {
    ratings: []
  };

  componentDidMount() {
    BookManager.getRatings().then((ratings) => {
      const rateOption = ratings.map(x => {

        return ({
         key: x.id,
         text: x.name,
         value: x.id
       })
      })
      this.setState({
        ratings: rateOption,
      });
    });
  }

  render() {
    return (
      <>
        <div>
          {/* {this.state.ratings.map((currentRatingInLoop) => {
            return (
              <SearchResultsCard
                key={currentRatingInLoop.id}
                ratingProp={currentRatingInLoop}
              />
            );
          })} */}
        </div>
        <div>
          {this.props.history.location.state.detail.map((currentBookInLoop) => {
            return (
              <ResourceCard
                key={currentBookInLoop.id}
                searchProp={currentBookInLoop}
                ratingProp={this.state.ratings}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default ResourceList;
