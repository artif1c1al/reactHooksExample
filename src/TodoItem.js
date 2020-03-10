import React, {useState, useContext} from 'react'
import { Context } from './context';

export default function TodoItem({title, id, completed}) {

  const {toggleTodo, removeTodo} = useContext(Context)

  let cls = ['todo']

  if(completed) cls.push("completed");
  
  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          onClick = {() => toggleTodo(id)}
          checked={completed}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick = {() => removeTodo(id)}
        >
          delete
        </i>
      </label>
    </li>
  )
}