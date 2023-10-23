import { useState } from 'react'

import './App.css'

type Todo = {
  id: `${string}-${string}-${string}-${string}-${string}`
  text: string
}


function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [todoInput, setTodoInput] = useState('')

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: todoInput
    }

    setTodos([...todos, newTodo])

  }

  const deleteTodo = (todoD: Todo) => {
    setTodos(prevstate=> prevstate.filter(todo =>todo.id != todoD.id))
  }
  
  
  return (
    <>
    <main>
        <form onSubmit={addTodo}>
            <input required onChange={(event)=>{setTodoInput(event.target.value)}} value={todoInput} type="text" />
            <button type='submit'>Add</button> 
        </form>

        {todos.length === 0 ? (
          <h2>There are no elements in the list.</h2>
        ) : (
          <ul>
              {todos.map((todo: Todo)=>(
                <li onClick={()=>deleteTodo(todo)} key={todo.id}>{todo.text}</li>
              ))}
          </ul>
        )}    
    </main>
    </>
  )
}

export default App
