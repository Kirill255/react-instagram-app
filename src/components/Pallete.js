import React, { Component } from "react";

import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

import InstaService from "../services/instaservice";

export default class Pallete extends Component {
  _InstaService = new InstaService();

  state = {
    photos: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.updatePallete();
  }

  updatePallete() {
    this._InstaService
      .getAllPhotos()
      .then((photos) => this.setState({ photos, error: false, loading: false }))
      .catch((err) => this.setState({ error: true, loading: false }));
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id, src, alt } = item;

      return <img key={id} src={src} alt={alt} />;
    });
  }

  render() {
    const { photos, error, loading } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    if (loading) {
      return <Loader />;
    }

    const items = this.renderItems(photos);

    return <div className="pallete">{items}</div>;
  }
}
