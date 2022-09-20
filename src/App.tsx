import React from 'react'
import TodoList from './components/TodoList';

const TODO_DATA=[
  {id:'23',text:`starting text is here`},
  {id:'25',text:`something about next is so good`},
  {id:'28',text:`Might learn nest.js next`}
]


const App: React.FC=()=>{
  return (
    <TodoList items={TODO_DATA}/>
  )
}

export default App;
