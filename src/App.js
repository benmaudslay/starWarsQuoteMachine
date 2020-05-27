import React, { Component } from "react"

import "./App.css"

class App extends Component {
  state = {
    quote: "",
  }

  componentDidMount() {
    this.handleFetchRequest()
  }

  handleFetchRequest = () => {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then((response) => response.json())
      .then((data) => this.setState({ quote: data.starWarsQuote }))
  }

  render() {
    return (
      <div className="App">
        <img
          alt="Star Wars"
          src="https://cdn.commonwealthclub.org/s3fs-public/styles/hero/public/2019-11/hero%20star%20wars.png?itok=waMDC-JL"
        />
        <h3>a random star wars quote</h3>
        <hr />
        <h1>{this.state.quote && this.state.quote.toLowerCase()}</h1>
        <button onClick={this.handleFetchRequest}>new quote</button>
      </div>
    )
  }
}

export default App
