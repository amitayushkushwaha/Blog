import React, { useEffect, useState } from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";
const items = [
  {
    username: "@Nishant_Bhagat",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95f52b0b-7803-4145-a11a-26368199ccde/d6wjhtt-d8ef7462-9a4d-4b9e-a6d3-8a57bd7ded84.jpg/v1/fill/w_1024,h_683,q_75,strp/bald_egale_by_korriedawnphoto_d6wjhtt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvOTVmNTJiMGItNzgwMy00MTQ1LWExMWEtMjYzNjgxOTljY2RlXC9kNndqaHR0LWQ4ZWY3NDYyLTlhNGQtNGI5ZS1hNmQzLThhNTdiZDdkZWQ4NC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1FNfJ1TYFT2XBgu3qGZvrPJq6wGwe0VXt40p30DDTIc",
    paragraph:
      " Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    username: "@Amit_kushwaha",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95f52b0b-7803-4145-a11a-26368199ccde/d6wjhtt-d8ef7462-9a4d-4b9e-a6d3-8a57bd7ded84.jpg/v1/fill/w_1024,h_683,q_75,strp/bald_egale_by_korriedawnphoto_d6wjhtt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvOTVmNTJiMGItNzgwMy00MTQ1LWExMWEtMjYzNjgxOTljY2RlXC9kNndqaHR0LWQ4ZWY3NDYyLTlhNGQtNGI5ZS1hNmQzLThhNTdiZDdkZWQ4NC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1FNfJ1TYFT2XBgu3qGZvrPJq6wGwe0VXt40p30DDTIc",
    paragraph:
      " Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    username: "@Nishant_Bhagat",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95f52b0b-7803-4145-a11a-26368199ccde/d6wjhtt-d8ef7462-9a4d-4b9e-a6d3-8a57bd7ded84.jpg/v1/fill/w_1024,h_683,q_75,strp/bald_egale_by_korriedawnphoto_d6wjhtt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvOTVmNTJiMGItNzgwMy00MTQ1LWExMWEtMjYzNjgxOTljY2RlXC9kNndqaHR0LWQ4ZWY3NDYyLTlhNGQtNGI5ZS1hNmQzLThhNTdiZDdkZWQ4NC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1FNfJ1TYFT2XBgu3qGZvrPJq6wGwe0VXt40p30DDTIc",
    paragraph:
      " Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    username: "@Amit_kushwaha",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95f52b0b-7803-4145-a11a-26368199ccde/d6wjhtt-d8ef7462-9a4d-4b9e-a6d3-8a57bd7ded84.jpg/v1/fill/w_1024,h_683,q_75,strp/bald_egale_by_korriedawnphoto_d6wjhtt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvOTVmNTJiMGItNzgwMy00MTQ1LWExMWEtMjYzNjgxOTljY2RlXC9kNndqaHR0LWQ4ZWY3NDYyLTlhNGQtNGI5ZS1hNmQzLThhNTdiZDdkZWQ4NC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1FNfJ1TYFT2XBgu3qGZvrPJq6wGwe0VXt40p30DDTIc",
    paragraph:
      " Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    username: "@Nishant_Bhagat",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95f52b0b-7803-4145-a11a-26368199ccde/d6wjhtt-d8ef7462-9a4d-4b9e-a6d3-8a57bd7ded84.jpg/v1/fill/w_1024,h_683,q_75,strp/bald_egale_by_korriedawnphoto_d6wjhtt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvOTVmNTJiMGItNzgwMy00MTQ1LWExMWEtMjYzNjgxOTljY2RlXC9kNndqaHR0LWQ4ZWY3NDYyLTlhNGQtNGI5ZS1hNmQzLThhNTdiZDdkZWQ4NC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1FNfJ1TYFT2XBgu3qGZvrPJq6wGwe0VXt40p30DDTIc",
    paragraph:
      " Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
];


function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/post').then(response=>{
      response.json().then(posts=>{
      setPosts(posts);
      })
    })
  },[]);
  console.log(posts);
  return (
    <div>
      <Header />
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
