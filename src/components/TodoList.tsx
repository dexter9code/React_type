import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteHandler:(todoId:string)=>void
}

const TodoList: React.FC<TodoListProps> = function (props) {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}><span>{todo.text} <button onClick={props.onDeleteHandler.bind(null,todo.id)}>Delete</button></span></li>
      ))}
    </ul>
  );
};

export default TodoList;
