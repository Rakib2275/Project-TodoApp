import React, { useState } from 'react'
import style from './NewTodo.module.css'

export default function NewTodo(props) {

    const [todo,setTodo] = useState({title : "",desc : ""});

    const {title,desc} = todo;

    const handleChange = (event) =>{
        const name = event.target.name;
        setTodo((oldTodo) =>{
            return {...oldTodo,[name]:event.target.value}
        })
    }

    const Submited = (event) =>{
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"",desc:""})
    }
  return (
    <form className={style.form} onSubmit={Submited}>
        <div className={style["form-field"]}>
        <label htmlFor="title">Title : </label>
        <input type="text" id='title' name='title' value={title} onChange={handleChange}/>
        </div>

        <div className={style["form-field"]}>
        <label htmlFor="desc">Description : </label>
        <textarea type="text" name="desc" id="desc" value={desc}  onChange={handleChange}></textarea>
        </div>

        <button type="submit">Add Todo</button>
    </form>
    
  )
}
