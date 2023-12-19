function Header({ input, setInput, setTodoList, todoList }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { text: input, done: false }]);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={input}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
