import React from "react";
import { Link } from "react-router-dom";

export default function User(props) {
  return (
    <Link to="/" className={props.min ? "user min" : "user"}>
      <img src={props.src} alt={props.alt} />
      <div>{props.name}</div>
    </Link>
  );
}
