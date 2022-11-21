import { Routes, Route } from "react-router-dom"

import Users from './pages/Users'
import Posts from './pages/Posts'
import Todos from './pages/Todos'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  )
}

export default App