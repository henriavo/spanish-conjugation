import "./App.css";
import SearchBar from "./components/SearchBar";
import React from "react";

class App extends React.Component {
  numbers = [1, 2, 3, 4, 5];
  render() {
    return (
      <div>
        {/* NOTHING */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        {/* BIG LOGO */}
        <div>
          <img
            className="logo"
            src="https://henri-public-bucket.s3.us-east-2.amazonaws.com/asci_img.jpg"
            alt="CHICAGO"
          />
        </div>
        {/* SEARCH BAR & SEARCH HISTORY */}
        <SearchBar queries={this.numbers} />
      </div>
    );
  }
}

export default App;
