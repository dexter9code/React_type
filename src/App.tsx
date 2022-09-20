import React,{useState} from 'react'
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './helper/todo.model';


const App: React.FC=()=>{

  const [Todo, setTodoList] = useState<Todo[]>([])

  const newTodoList=(data:string)=>{
    console.log(data)
    const todoData={
      id:Math.random().toString(),
      text:data
    }
    setTodoList(prevTodos=>[...prevTodos,todoData])
  }

  const onTodoDeleteHandler=(todoId:string)=>{
    setTodoList(prevTodo=>prevTodo.filter(item=>item.id !==todoId))
  }

  return (
    <>
    <TodoList items={Todo} onDeleteHandler={onTodoDeleteHandler}/>
    <NewTodo getNewTodo={newTodoList}/>
    </>
  )
}

export default App;
