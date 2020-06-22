import React from 'react';
class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
                        results: {},
                        loading: false,
                        message: '',
		};
	}
	render() {
		return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading">Live Search: React Application</h2>
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			)
	}
}
export default Search;




componentDidMount() {
    BookManager.getSearch(userSearch).then((books) => {
      this.setState({
        books: books,
      });
    });
  }
  <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.title}
              />
// search function? 
  handleFieldChange = (books) => {
    const stateToChange = {};
    stateToChange[books.target.id] = books.target.value;
    this.setState(stateToChange);
  };