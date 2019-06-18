import React, { Component } from "react";

import User from "./User";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

import InstaService from "../services/instaservice";

export default class Users extends Component {
  _InstaService = new InstaService();

  state = {
    users: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this._InstaService
      .getAllUsers()
      .then((users) => this.setState({ users, error: false, loading: false }))
      .catch((err) => this.setState({ error: true, loading: false }));
  }

  renderProps(arr) {
    return arr.map((item) => {
      const { id, name, altname, photo } = item;

      return <User key={id} src={photo} alt={altname} name={name} min />;
    });
  }

  render() {
    const { users, error, loading } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    if (loading) {
      return <Loader />;
    }

    const items = this.renderProps(users);

    return (
      <div className="right">
        <User
          src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
          alt="какой-то мужик с бородой"
          name="man_with_beard"
        />

        <div className="users__block">{items}</div>
      </div>
    );
  }
}
