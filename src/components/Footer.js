import React from "react";

function Footer({ action, setAction, todoList, setTodoList }) {
  const completeCount = todoList
    ? todoList.filter((element) => !element.done).length
    : 0;

  const handleClick = (action) => {
    switch (action) {
      case "active":
        setAction("active");
        break;
      case "completed":
        setAction("completed");
        break;
      case "all":
        setAction("all");
        break;
      default:
        break;
    }
  };

  const handleRemoveCompleteAll = () => {
    setTodoList(todoList.map((element) => ({ ...element, done: false })));
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{completeCount} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={action === "all" ? "selected" : ""}
            onClick={() => {
              handleClick("all");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              handleClick("active");
            }}
            className={action === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              handleClick("completed");
            }}
            className={action === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => handleRemoveCompleteAll()}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
