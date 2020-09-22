import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Main = ({input, setInput, setTodos, todos}) => {


    return (
        <div className="form-container">
            <form>
            <input 
                value={input}
                type="text" 
                className="todo-input" 
                onChange={(e)=>{setInput(e.target.value)}}/>
                
            <button 
                className="todo-btn" 
                id="plus-btn" 
                type="submit" 
                onClick={(e) => {
                    e.preventDefault()
                    if(input === ""){
                        alert("Enter Something")
                    }else{
                        setTodos([
                            ...todos, {id: uuidv4() , text : input, Status: false }
                        ])
                        setInput("")  
                    }
                }}>
                Add
            </button>
            
            
            </form>
            <p className="alert-text">Todo note can not be empty!</p>
        </div>
        
    )
}

export default Main
