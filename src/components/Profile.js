import React from "react";

import User from "./User";
import Pallete from "./Pallete";

function Profile() {
  return (
    <div className="container profile">
      <User
        src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
        alt="какой-то мужик с бородой"
        name="man_with_beard"
      />

      <Pallete />
    </div>
  );
}

export default Profile;
