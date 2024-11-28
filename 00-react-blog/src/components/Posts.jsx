import './css/Posts.css'
import { useEffect, useState } from 'react';

export default function Posts() {

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <main>
      <h1>List of posts</h1>
      {
        posts.map((post) => {
          return (
            <div key={post.title}>
              <h1> {post.title} </h1>
              <p> {post.author} </p>
              <p> {post.content} </p>
            </div>
          )
          
        })
      }
    </main>
  );
}
