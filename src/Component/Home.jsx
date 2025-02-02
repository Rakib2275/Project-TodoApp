import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from 'uuid'


const Home = () => {
  const [todos, setTodo] = useState([]);

  const handleTodo = (todo) =>{
    setTodo((prevTodos) =>{
      return [...prevTodos,{id: uuidv4(),todo}]
    })
  }

  const TodoRemove =(id) =>{
    setTodo((prevTodo) =>{
      const filtereTodos = todos.filter((todo) => todo.id !== id);
      return filtereTodos;
    })
  }

  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo onAddTodo = {handleTodo} />
      <Todos todos={todos} onRemoveTodo={TodoRemove}/>
    </div>
  )
}

export default Home
