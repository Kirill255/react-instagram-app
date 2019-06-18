import React, { Component } from "react";

import ErrorMessage from "./ErrorMessage";

import InstaService from "../services/instaservice";

export default class Pallete extends Component {
  _InstaService = new InstaService();

  state = {
    photos: [],
    error: false
  };

  componentDidMount() {
    this.updatePallete();
  }

  updatePallete() {
    this._InstaService
      .getAllPhotos()
      .then((photos) => this.setState({ photos, error: false }))
      .catch((err) => this.setState({ error: true }));
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id, src, alt } = item;

      return <img key={id} src={src} alt={alt} />;
    });
  }

  render() {
    const { photos, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(photos);

    return <div className="pallete">{items}</div>;
  }
}
