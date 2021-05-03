import React from "react";

const Todo = ({ id, text, complete, setTodos,todos }) => {
  const changeStatus = (e) => {
    setTodos([
      ...todos,
      { text: text, id: id, completed: !complete },
    ]);
  };

  return (
    <div className="todo">
      <li className={complete ? "todo-item completed" : "todo-item"} id={id}>
        {text}
      </li>
      <button onClick={changeStatus} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
