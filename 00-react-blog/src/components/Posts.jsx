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
      <div className='heading-div'>
        <h1>List of posts</h1>
        <p>All the posts of the blog.</p>
      </div>
      <div className='posts-list'>
      {
        posts.map((post) => {
          return (
            <div className='post' key={post.title}>
              <header>
                <h1 > {post.title} </h1>
                <p>Author: {post.author} </p>
              </header>
              <p className='content'> {post.content} </p>
            </div>
          ) 
        })
      }
      </div>
    </main>
  );
}
