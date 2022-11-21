import { FC, useEffect, useState } from "react"
import { ITodo } from "../types/types"
import List from "../components/List/List"
import TodoItem from "../components/TodoItem"
import axios from "axios"

const Todos:FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data } = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos")
    setTodos(data)
  }

  return (
    <div>
      <h1 className="title">Задачи</h1>
      <List
        mass={todos}
        render={(todo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </div>
  )
}

export default Todos