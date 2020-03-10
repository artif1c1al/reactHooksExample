import React, { Component, useState, useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from './context'

export default function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: true},
  ])

  const [todoTitle, setTodoTitle] = useState('')
  

  useEffect(() => {
    const raw = localStorage.getItem('todos') || []
    setTodos(JSON.parse(raw))
  }, []);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);


  const addTodo = (e) => {
    if(e.key == "Enter"){
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        }
      ])
      setTodoTitle('');
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    }));
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => (
      todo.id !== id
    )));
  }

  return (
    <Context.Provider 
    value = {{ toggleTodo, removeTodo }}>
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text"
            value = {todoTitle} 
            onChange = { e => setTodoTitle(e.target.value) }
            onKeyPress = {e => addTodo(e)}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}