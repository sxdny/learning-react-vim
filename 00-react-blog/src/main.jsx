import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import CreatePost from './components/CreatePosts.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/create-post' element={<CreatePost />} />
  </Routes>
  </BrowserRouter>,
)
