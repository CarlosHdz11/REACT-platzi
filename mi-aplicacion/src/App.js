import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import TodoSearch from "./TodoSearch";
 

const todos =[
  {text:'Cortar cebolla', complete:false},
  {text:'Tomar el curso de intro a react', complete:false},
  {text:'Jugar free fire', complete:false},
  {text:'Jugar hALO', complete:false}
]



function App() {
  return (
    <React.Fragment>
       <TodoCounter/>
        

        <TodoSearch/>
        
        <TodoList>
          {todos.map(todo=>(
            <TodoItem key={todo.text}
            textO={todo.text}
            />
          
          ))}
        </TodoList>

        <CreateTodoButton/>
       

    </React.Fragment>
       
       
       
      
  );
}

export default App;
