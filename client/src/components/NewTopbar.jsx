import { useState } from "react";

export default function NewTopbar() {
  const [isAuthenticated, setAuthenticated] = useState(true);

  return (
    <>
      <nav className="topbar">
        <div className="brand">DAILY BLOGS</div>
        <div className="actions">
          <div className="post_actions">
            {isAuthenticated && (
              <>
               {/* <a href="/home">
                <button className="topbar_button">Home</button>
              </a>
               <a href="/create">
                <button className="topbar_button">Create Post</button>
              </a>
              <a href="/signout">
                <button className="topbar_button sign">Sign Out</button>
              </a> */}
              <a href="/home">
                <button className="topbar_button">Home</button>
              </a>
               <a href="/signin">
                <button className="topbar_button">Sign In</button>
              </a>
              <a href="/signup">
                <button className="topbar_button sign">Sign Up</button>
              </a>
              </>

            )}
          </div>
          <div className="auth_actions">
            {/* {isAuthenticated ?? (
              <a href="/signin">
                <button className="topbar_button">Sign In</button>
              </a>
            )}
            {isAuthenticated && (
              <a href="/signout">
                <button className="topbar_button">Sign Out</button>
              </a>
            )} */}
          </div>
        </div>
      </nav>
    </>
  );
} // Bro tu design kr jaisa dikha rha h time waste ho rha h okk mai kr ke btata hu t