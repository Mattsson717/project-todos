import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import todos from "reducers/todos";
import { FlexItem } from "./StyledComponents";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <section>
      {items.map((item) => (
        <FlexItem key={item.id}>
        <p>{item.text}</p>
        <input 
          type="checkbox" 
          checked={item.isComplete}
          onChange={() => onToggleTodo(item.id)}
        />
        <p>{moment(item.createdAt).fromNow()}</p>
        <button onClick={() => onDeleteTodo(item.id)}>
          <span role="img" aria-label="delete">🗑️</span>
        </button>
        </FlexItem>
      ))}
    </section>
  )
}

export default TodoList