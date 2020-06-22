import React from 'react';
class Search extends  React.Component {

  
render() {
    return (
        <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                value={this.state.animalName}
              />
    )}
      
    
}
export default Search