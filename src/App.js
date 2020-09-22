import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Main from "./components/Main";
import Todolist from "./components/Todolist"
const App = (todoSelected) => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  return(
    <React.Fragment>
      <Header/>
      <main>
      <Main input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      {        
        todos.map(
          (todos) => 
          ( <Todolist todos={todos} text={todos.text} key={todos.id} />)
        )
      }
      
      </main>
    </React.Fragment>
  )
}

export default App;
