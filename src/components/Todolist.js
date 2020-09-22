import React from 'react'

function Todolist({ todos, setTodos }) {

    return (
        
        <div className="todo-container">
            <ul className="todo-list">
            <div className="todo-item">
                
                <p>{todos.text}</p>
                {/* <button id="checked-btn" className="todo-btn" >
                <span role="img" aria-label="Thumbs Up" onClick={completeTodo}>👍🏻</span>
                
                </button>
                <button id="delete-btn" className="todo-btn">
                <span role="img" aria-label="Thumbs Down" onClick={deleteTodos}>👎🏻</span> 
                </button>  */}
            </div>
            </ul>
            
        </div>
        
    )
}

export default Todolist
