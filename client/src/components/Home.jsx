import React, { useEffect, useState } from "react";

import Blogs from "./Blogs";
import { Link } from "react-router-dom";
import NewTopbar from "./NewTopbar";



function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/post').then(response=>{
      response.json().then(posts=>{
      setPosts(posts);
      })
    })
  },[]);

  return (
    <div>
      <NewTopbar />
  
      <div className="temp">
        {posts.map((item) => {
          return (
            <Blogs
              username={item.username}
              title={item.title}
              createdAt={item.createdAt}
              src={ 'http://localhost:4000/'+item.cover}
              paragraph={item.summary}
            key={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
