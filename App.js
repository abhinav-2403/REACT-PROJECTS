import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';


// advance react codes


 function App() {
  return (
    <div className='todo-app'>

      {/* <h1>Todo app</h1> */}

      {/* <TodoForm/> */}
      <TodoList/>

    </div>
  );
}

export default App;