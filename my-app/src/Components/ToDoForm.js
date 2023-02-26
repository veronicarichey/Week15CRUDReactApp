import React, { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from './DataProvider'

export default function ToDoForm() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoName('');
    todoInput.current.focus();
  }

  useEffect(() => {
    todoInput.current.focus();
  }, [])

  return (
    <form autoComplete="off" onSubmit={addTodo}>
    <input type="text" name="todos" id="todos" ref={todoInput} required placeholder="Add Task" value={todoName}
    onChange={e => setTodoName(e.target.value.toLocaleLowerCase())} />
    <button type="submit">Create Task</button>
  </form>
  )
}
