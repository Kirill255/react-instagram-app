import React from "react";

import User from "./User";

export default function Post(props) {
  return (
    <div className="post">
      <User
        src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
        alt="мужик с бородой"
        name="man_with_beard"
        min
      />

      <img src={props.src} alt={props.alt} />
      <div className="post__name">accaunt name</div>
      <div className="post__descr">description</div>
    </div>
  );
}
