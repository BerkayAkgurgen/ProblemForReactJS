import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const removeExtraSpace = (value) => {
    return value.trim().split(/ +/).join(" ");
  };

  const inputTextHandler = (e) => {
    if (e.which === 32 && e.target.value === "") {
      e.preventDefault();
    }
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    } else {
      setTodos([
        ...todos,
        {
          text: `${removeExtraSpace(inputText)}`,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
        onKeyPress={inputTextHandler}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
      <i className="fas fa-location-arrow"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
