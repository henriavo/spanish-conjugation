import React from "react";

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
  }

  historyItems() {
    console.log("hello form search hisotry component!");
    return "chicago";
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.map((number) => <li>{number}</li>);
    return <ul>{result} </ul>;
  }
}

export default SearchHistory;
