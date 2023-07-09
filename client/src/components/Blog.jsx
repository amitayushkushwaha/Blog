import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { formatISO9075 } from "date-fns";
function Blog() {
  let { state } = useLocation();
  return (
    <div>
      <Header />
      <div className="blogs" 
      style={{marginTop: "1rem"}}
      >
        <div className="image">
          <img
            src={state.src}
            style={{
              marginLeft: "120px",
              marginRight: "20px",
              borderRadius: "10px",
            }}
            alt="img"
          />
        </div>

        <div className="text">
          <h1>
            {state.title}
          </h1>
          <p className="info">
            <a className="author">{state.username}</a>
            <time>{formatISO9075(new Date(state.createdAt))}</time>
          </p>
          <p className="summary">{state.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
export default Blog;
