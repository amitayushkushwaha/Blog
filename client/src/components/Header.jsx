import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);
  function signout() {
    fetch("http://localhost:4000/signout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }
  return (
    <div className="header">
      <h1>DAILY BLOGS</h1>
      <div className="header_p">
        <a href="home">
          <p>HOME</p>
        </a>
        {!username && (
          <>
            <a href="signin">
              <p>SIGN IN</p>
            </a>
            <a href="signup">
              <p>SIGN UP</p>
            </a>
          </>
        )}
        {username && (
          <>
            <Link to="../create" state={username} relative="path">
              <p style={{ color: "white" }}>CREATE POST</p>
            </Link>

            <a href="/" onClick={signout}>
              <p>SIGN OUT</p>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
export default Header;
