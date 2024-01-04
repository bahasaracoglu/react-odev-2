function List({ todoList, setTodoList, action }) {
  const filteredList = todoList.filter((element) => {
    if (action === "active") {
      return !element.done;
    } else if (action === "completed") {
      return element.done;
    } else {
      return true; // "All" seçeneği için tüm öğeleri göster
    }
  });
  const handleToggle = (index) => {
    const updatedList = todoList.map((element, i) => {
      if (i === index) {
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
    setTodoList((prevList) => {
      return prevList.filter((element, i) => index !== i);
    });
  };

  return (
    <ul className="todo-list">
      {filteredList.map((element, index) => {
        return (
          <li className="view" key={element.text}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={element.done}
                onChange={() => handleToggle(index)}
              />
              <label className={element.done && "todo-done"}>
                {element.text}
              </label>
              <button
                className="destroy"
                onClick={() => handleDelete(index)}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
