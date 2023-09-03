import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoFilter } from './TodoFilter';

import React, { useState, useEffect } from 'react';

const defaultTodos =[
  {text:'Cortar cebolla',completed:true},
  {text:'Tomar el Curso de Intro a React.js',completed:false},
  {text:'Llorar con la llorona',completed:true},
  {text:'Work',completed:false},
]

function App() {
  const [todos,setTodos]=React.useState(defaultTodos);
  const[searchValue,setSearchValue]=React.useState('');

  const checkTodo = (text)=>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text==text
    );
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    setTodos(newTodos)
  };

  const uncheckTodo = (text)=>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text==text
    );
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
  };



  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  console.log(completedTodos);
  const totalTodos = todos.length;



  const [counterText, setCounterText] = React.useState('Haz completado');
  
  useEffect(() => {
    if (completedTodos === totalTodos) {
      setCounterText('¡Felicitaciones! completaste');
    } else{
      setCounterText('Haz completado');
    }
  }, [completedTodos, totalTodos]);
  

  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText=todo.text.toLowerCase();
      const searhText=searchValue.toLowerCase();
      return todoText.includes(searhText);
    }
  );

  // // Mostrar los todos NO completados
  // const showUTD = () => {
  //   const uncompletedTodos = todos.filter(todo => !todo.completed)
  //   setTodos(uncompletedTodos)
  //   console.log(todos);
  // };

  
  // // Mostrar los todos completados

  // const showCTD = () =>{
  //     const showCTD = todos.filter(todo => todo.completed);
  //     console.log(showCTD);
  //     setTodos(showCTD)
  //   };


  const [showCompleted, setShowCompleted] = useState(true);
  const [showUncompleted, setShowUncompleted] = useState(true);
  const [showAllTodos, setShowAllTodos] = useState(true);

  const showATD = () => {
    setShowAllTodos(true);
    setShowCompleted(true);
    setShowUncompleted(true);
  };
  
  // Show completed todos
  const showCTD = () => {
    setShowAllTodos(false);
    setShowCompleted(true);
    setShowUncompleted(false);
  };
  
  // Show uncompleted todos
  const showUTD = () => {
    setShowAllTodos(false);
    setShowCompleted(false);
    setShowUncompleted(true);
  };


  return (
    <>
      <TodoCounter
      completed={completedTodos}
      total={totalTodos}
      text={counterText}
      />
      
      <TodoFilter
      showAllTodo={showATD}
      showActiveTodo={showUTD}
      showCompletedTodo={showCTD}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <TodoList>
      {todos.map(todo => {
    // Show the todo if showAllTodos is true, or if showCompleted
    // is true and the todo is completed, or if showUncompleted
    // is true and the todo is uncompleted
            if (
              (showAllTodos || (showCompleted && todo.completed) || (showUncompleted && !todo.completed))
            ) {
              return (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => checkTodo(todo.text)}
                  onDelete={() => uncheckTodo(todo.text)}
                />
              );
            }
            return null; // Don't render anything if the condition doesn't match
          })}

        {/* {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>checkTodo(todo.text)}
          onDelete={()=>uncheckTodo(todo.text)}
          />
        ))} */}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;