import React from "react";

const Todo = ({ id, text, completed, setTodos, todos }) => {
  const changeStatus = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !completed,
          };
        }
        return item;
      })
    );
  };

  const removeElement = (e) => {
    let targetTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...targetTodo]);
  };


  return (
    <div className="todo">
      <li className={completed ? "todo-item completed" : "todo-item"} id={id}>
        {text}
      </li>
      <button onClick={changeStatus} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeElement} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
