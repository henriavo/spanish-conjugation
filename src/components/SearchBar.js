import React from "react";
import "./SearchBar.css";

//  include SEARCH BAR and also SEARCH HISTORY
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "enter your query here bro." };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`you submit the form tio! ${this.state.value}`);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form class="example" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
