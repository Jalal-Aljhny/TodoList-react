import PropTypes from "prop-types";
import ToDo from "./ToDo";

const ToDos = ({ todos, toggleTodo, deleteTodo, editTodo, mode }) => {
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <ToDo
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          mode={mode}
        />
      ))}
      {todos.length === 0 && (
        <h3 className="no-todos">There isn&apos;t any tasks right now...</h3>
      )}
    </div>
  );
};
ToDos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default ToDos;
