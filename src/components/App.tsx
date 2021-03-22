import React from 'react'
import AddTodo from "./AddTodo";
import TodoList from './TodoList';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
  )
}

export default App
