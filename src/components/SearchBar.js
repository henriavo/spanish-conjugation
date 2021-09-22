import React from "react";
import "./SearchBar.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

//  include SEARCH BAR and also SEARCH HISTORY
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const axios = require("axios");

    console.log(`you submit the form tio! ${this.state.value}`);

    let self = this;
    axios
      .get(
        `https://dictionaryapi.com/api/v3/references/spanish/json/${this.state.value}`,
        {
          params: {
            key: process.env.REACT_APP_MERRIAM_API_KEY,
          },
        }
      )
      .then(function (response) {
        // sucess scenario
        console.log(response);
        let shortDefinition = response.data[0].shortdef[0];
        console.log(shortDefinition);
        self.setState({
          value: event.target.value,
          result: shortDefinition,
        });
      })
      .catch(function (error) {
        //error scenario
        console.log(error);
      })
      .then(function () {
        // always executed
      });
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
            autofocus
            placeholder="enter spanish word"
            pattern="[A-Za-z]+"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button type="submit">
            <i class="fa fa-search"></i>
          </Button>
        </form>
        <br></br>
        <Alert variant="primary">
          <div class="response">{this.state.result}</div>
        </Alert>
      </div>
    );
  }
}

export default SearchBar;
