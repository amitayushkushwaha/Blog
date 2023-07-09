import React from "react";
import { Link } from "react-router-dom";
import {formatISO9075} from 'date-fns'
function Blogs(props) {

  return (
    <div className="blogs">
      <div className="image">
        <img src={props.src} alt="img" />
      </div>

      <div className="text">
        <h1 >{props.title}</h1>
        <p className="info">
          <a className="author">{props.username}</a>
           <time>{formatISO9075(new Date(props.createdAt))}</time>
        </p>
        <p className="summary">{props.paragraph.slice(0, 150)}  <Link to="../Blog" state={props} relative="path">
     ...... read more
      </Link> </p>
      </div>

    
    </div>
  );
}
export default Blogs;
