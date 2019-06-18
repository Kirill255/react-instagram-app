import React, { Component } from "react";

import User from "./User";
// // import Post from "./Post";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

import InstaService from "../services/instaservice";

export default class Posts extends Component {
  _InstaService = new InstaService();

  state = {
    posts: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this._InstaService
      .getAllPosts()
      .then((posts) => this.setState({ posts, error: false, loading: false }))
      .catch((err) => this.setState({ error: true, loading: false }));
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id, name, altname, photo, src, alt, descr } = item;

      return (
        <div key={id} className="post">
          <User src={photo} alt={altname} name={name} min />

          <img src={src} alt={alt} />
          <div className="post__name">{name}</div>
          <div className="post__descr">{descr}</div>
        </div>
      );
    });
  }

  render() {
    const { posts, error, loading } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    if (loading) {
      return <Loader />;
    }

    const items = this.renderItems(posts);

    return (
      <div className="left">
        {items}

        {/* <Post src="https://i.ytimg.com/vi/XPjn2VexgMw/maxresdefault.jpg" alt="nature" /> */}
        {/* <Post src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="nature" /> */}
      </div>
    );
  }
}
