import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div>
          <img
            className="logo"
            src="https://henri-public-bucket.s3.us-east-2.amazonaws.com/asci_img.jpg"
            alt="CHICAGO"
          />
        </div>

        <body>
          <form class="example" action="/action_page.php">
            <input type="text" placeholder="Search.." name="search2" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </body>
      </div>
    );
  }
}

export default App;
