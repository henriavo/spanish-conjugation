import React from "react";
import "./SearchBar.css";
import SearchHistory from "./SearchHistory";

//  include SEARCH BAR and also SEARCH HISTORY
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "enter your query here bro." };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // this.setState( prevState => (
    //     {
    //         items: ...
    //     }
    // )
    // )
    console.log("you submit the form tio!");
    //alert("where do this submits even show up?");
  }

  render() {
    return (
      <div>
        <form class="example" onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>

        <h1>Seach History:</h1>
        <SearchHistory />
      </div>
    );
  }
}

export default SearchBar;
