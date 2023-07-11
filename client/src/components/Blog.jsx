import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { formatISO9075 } from "date-fns";
import NewTopbar from "./NewTopbar";
function Blog() {
  let { state } = useLocation();
  return (
    <div>
      {/* <Header /> */}
      {/* <div className="blogs" 
      style={{marginTop: "1rem",height: "auto"}}

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
      </div> */}
      <div>
        <p style={{marginLeft:"7%",marginRight:"7%", marginTop: "6rem"}}>
        <img
            src={state.src}
            style={{
              marginRight: "20px",
              borderRadius: "10px",
              height: "20rem",
              width: "20rem",
              float: "left",
              marginBottom: "10px"
            }}
            alt="img"
          />
           <h1 className="blog_title">
            {state.title}
          </h1>
         
          <p className="info">
            <a className="author">{state.username}</a>
            <time style={{marginLeft: "1rem"}}>{formatISO9075(new Date(state.createdAt))}</time>
          </p>
          {state.paragraph}
        </p>
      </div>
      <NewTopbar />
    </div>
  );
}
export default Blog;
