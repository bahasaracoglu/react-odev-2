import { useState } from "react";

function List({ todoList, setTodoList, action }) {
  const [editTodo, setEditTodo] = useState(null);
  const filteredList = todoList.filter((element) => {
    if (action === "active") {
      return !element.done;
    } else if (action === "completed") {
      return element.done;
    } else {
      return true;
    }
  });
  const handleToggle = (tittle) => {
    console.log("toggle tıklandı", tittle);
    const updatedList = todoList.map((element, i) => {
      if (tittle === element.text) {
        return {
          ...element,
          done: !element.done,
        };
      }
      return element;
    });
    setTodoList(updatedList);
  };
  const handleDelete = (index) => {
    console.log("silme");
    setTodoList((prevList) => {
      return prevList.filter((element, i) => index !== i);
    });
  };

  const handleEditClick = (e, element) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("edit tıklandı", element);

    if (editTodo) {
      setEditTodo(null); // Eğer zaten düzenleme modundaysa, iptal et
    } else {
      setEditTodo(element); // Düzenleme modunu başlat
    }
    console.log(editTodo);
  };
  const handleEditChange = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value,
    });
  };
  const handleEditSubmit = () => {
    const updatedList = todoList.map((element) =>
      element.text === editTodo.text ? editTodo : element
    );
    setTodoList(updatedList);
    setEditTodo(null); // Düzenleme modunu kapat
  };

  return (
    <ul className="todo-list">
      {filteredList.map((element, index) => (
        <li className="view" key={element.text}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={element.done}
              onChange={() => handleToggle(element.text)}
            />
            <label
              onClick={(e) => handleEditClick(e, element)}
              className={element.done ? "todo-done" : ""}
            >
              {editTodo && editTodo.text === element.text ? (
                <input
                  className="edit"
                  value={editTodo.text}
                  onChange={handleEditChange}
                  onBlur={handleEditSubmit}
                  autoFocus
                />
              ) : (
                element.text
              )}
            </label>
            <button
              className="destroy"
              onClick={() => handleDelete(index)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
