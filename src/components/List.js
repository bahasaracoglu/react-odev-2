function List({ todoList }) {
  return (
    <ul className="todo-list">
      {todoList.map((element) => {
        return (
          <li className="view" key={element.text}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{element.text}</label>
              <button className="destroy"></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
