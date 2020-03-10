import React, {useState, useContext, useReducer} from 'react'
import { Context } from './context';
import reducer from './reducer'


export default function TodoItem({title, id, completed}) {

  const {dispatch} = useContext(Context)

  let cls = ['todo']

  if(completed) cls.push("completed");
  
  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          onClick = {() => dispatch({
            type: 'toggle',
            payload: id
          })}
          checked={completed}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick = {() => dispatch({
            type: 'remove',
            payload: id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}