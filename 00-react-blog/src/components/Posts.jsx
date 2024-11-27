import './css/Posts.css'

export default function Posts() {

  const posts = [
    {
      'id' : 1,
      'name' : 'The best post!'
    },
    {
      'id' : 2,
      'name' : 'Not the best post :('
    }
  ]

  return (
    <main>
      <h1>List of posts</h1>
      {
        posts.map((post) => {
          return <p key={post.id}> {post.name} </p>
        })
      }
    </main>
  );
}
