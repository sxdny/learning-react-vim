import './App.css'
import Posts from './components/Posts';

export default function App() {
  return (
    <>
      <nav>
        <header>
          <h1>El Blog de Sidney</h1>
          <p>Este es el blog de Sidney</p>
        </header>
        <ul>
          <li>
            <a href="/create-post">Crear un nuevo post +</a>
          </li>
        </ul>
      </nav>
      <Posts />
    </>
  )
}
