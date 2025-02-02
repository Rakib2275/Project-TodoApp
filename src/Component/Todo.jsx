import React from 'react'
import style from './todo.module.css'

export default function Todo(props) {
    const {title,desc} = props.todo;
    const {id} =props;

    const btnClick = (id) =>{
      props.onRemoveTodo(id);
    }
  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className={style.btn} onClick={() =>{
              btnClick(id);
            }}>
              <i className="fa fa-trash fa-2x"></i>
            </button>
        </div>
    </article>
  )
}
