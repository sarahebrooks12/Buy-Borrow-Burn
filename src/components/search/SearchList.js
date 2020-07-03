import React, { Component } from "react";
import SearchResultsCard from "./SearchResultsCard";
import BookManager from "../../modules/BookManager";
import { Grid } from "semantic-ui-react";

class SearchList extends Component {
  state = {
    ratings: [],
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

  render() {
    return (
      <>
        <div id="tommyCSS">
          <Grid columns={3} equal>
            <Grid.Row textAlign="center">
                {this.props.history.location.state.detail.map(
                  (currentBookInLoop) => {
                    return (
                      <SearchResultsCard
                        key={currentBookInLoop.id}
                        searchProp={currentBookInLoop}
                        ratingProp={this.state.ratings}
                      />
                    );
                  }
                )}
      
            </Grid.Row>
          </Grid>
        </div>
      </>
    );
  }
}

export default SearchList;
