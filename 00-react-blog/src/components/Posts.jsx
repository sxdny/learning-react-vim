import './css/Posts.css'

export default function Posts() {

  let posts = localStorage.getItem('posts');
  
  if (posts.length != 0) {
    posts = localStorage.getItem('posts')
  } else {
    localStorage.setItem('posts', [])
  }

  return (
    <main>
      <h1>List of posts</h1>
      
    </main>
  );
}
