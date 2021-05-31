import React from "react";

class SearchBar extends React.Component {
  state = { input: "" };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <div style={{backgroundColor:'#30475e', }} className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{color:"#ffffff"}}>Search Any Video</label>
            <input
              type="text"
              value={this.state.input}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
