import React, { Component } from "react"
import { Image } from "semantic-ui-react";
import "./Home.css"

class Home extends Component {
  render() {
    return (
      <div id="backgroundImage">
          <h3 id="homePage">
            BUY BORROW BURN
          </h3>
          <p>Most of us enjoyed playing 'Kiss, Marry, Kill' as adolescents. Our friends would give us three people to choose between and you had to go through and make the choice between what you would do with each person. <br />
          Now you can do the same thing but with the books you've read. <br />
          When you rate a book on the common star system, it's hard to know what to purchase or whether to try and find a copy at your local library. Is it worth reading it to talk about the hype of a popular title or is it life changing? <br />
          You can keep track of books that you want to read, currently reading, your favorites and then BBB. Would you spend your hand earned cash on a book or would you rather just borrow it from someone else? And my personal favorite category, burn - books you think should've never existed.  </p>
        </div>
    );
  }
}

export default Home;