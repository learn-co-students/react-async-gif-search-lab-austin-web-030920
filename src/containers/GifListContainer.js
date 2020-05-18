import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
    };
  }

  handleSubmit = (e, search) => {
    e.preventDefault();
    this.getGIF(search);
  };

  componentDidMount() {
    this.getGIF('dolphi');
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSubmit={this.handleSubmit} />
      </div>
    );
  }

  getGIF = (searchTerm) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=XeKd6BSengx3MDFqKmZhb4F9Q4Z9mGlY&rating=g`
    )
      .then((r) => r.json())
      .then((j) => {
        this.setState({ gifs: j.data.slice(0, 3) });
      });
  };
}

export default GifListContainer;
