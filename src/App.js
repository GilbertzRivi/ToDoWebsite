import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';
import ToDoSummary from './ToDoSummary';

const LOCAL_STORAGE_KEY = 'todoapp.todos'

function App() {

  const [todoelements, setTodoelements] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoelements))
  }, [todoelements])

  return (
    <>
      <ToDoList todoelements={todoelements} setTodoelements={setTodoelements}/>
      <ToDoInput todoelements={todoelements} setTodoelements={setTodoelements}/>
      <ToDoSummary todoelements={todoelements}/>
    </>
  )
}

export default App;
