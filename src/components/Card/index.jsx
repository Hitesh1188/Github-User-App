import React from "react";
import "./index.css";

const Card = ({ userName, profilePic,profile_Url }) => {
  return (
    <div>
      <div className="card">
        <img src={profilePic} alt="User Profile" class="profile-img" />
        <h3>{userName}</h3>
        <a href={profile_Url} target="blank" className="btn">
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
