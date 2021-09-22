import "./App.css";
import SearchBar from "./components/SearchBar";
import React from "react";

class App extends React.Component {
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
            src="https://henri-public-bucket.s3.us-east-2.amazonaws.com/span-eng-dict.png"
            alt="que paso?"
          />
        </div>
        {/* SEARCH BAR & SEARCH HISTORY */}
        <SearchBar />
      </div>
    );
  }
}

export default App;
