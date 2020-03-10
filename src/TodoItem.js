import React, {useState} from 'react'

export default function TodoItem({title, id, completed}) {
  const [checked, setChecked] = useState(completed);

  let cls = ['todo']

  if(checked) cls.push("completed");
  
  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          onClick = {() => setChecked(!checked)}
          checked={checked}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}