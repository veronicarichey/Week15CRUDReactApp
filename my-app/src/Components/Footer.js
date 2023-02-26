import React, { useContext, useState} from 'react'
import { DataContext } from './DataProvider'

export default function () {
  const [checkAll, setcheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)

  const handleCheckAll = () => {

    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })

    setTodos(newTodos)
    setcheckAll(!checkAll)
  }

  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false)
  }


const deleteTodo = () => {
  setTodos(newTodosComplete())
  setcheckAll(false)
}

return (
    <> 
      {
        todos.length === 0 ? <h2>Congrats! No Tasks Left!</h2>
        : <div>
            <div className="row">
              <label htmlFor="all">
                <input type="checkbox" name="all" id="all"
                onChange={handleCheckAll} checked={checkAll} />
                All
              </label>
              <p>You have {newTodosComplete().length} to do tasks</p>
              <button id="delete" onClick={deleteTodo}>Delete</button>
            </div>
        </div>
      }
    </>
  )
}
