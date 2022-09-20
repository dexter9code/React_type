import React from 'react'
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const TODO_DATA=[
  {id:'23',text:`starting text is here`},
  {id:'25',text:`something about next is so good`},
  {id:'28',text:`Might learn nest.js next`}
]


const App: React.FC=()=>{
  const newTodoList=(data:string)=>{
    console.log(data)
  }

  return (
    <>
    <TodoList items={TODO_DATA}/>
      <NewTodo getNewTodo={newTodoList}/>
    </>
  )
}

export default App;
