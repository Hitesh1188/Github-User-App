import React, { useEffect, useState } from "react";
import Card from "./components/Card";
const App = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setuserData(data);
      });
  }, []);

  return (
    <>
      <h1>Github Card</h1>
      <div className="card-container">
        {userData.map((user) => {
          return <Card userName={user.login} profilePic={user.avatar_url} profile_Url={user.html_url}/>;
        })}
      </div>
    </>
  );
};

export default App;
