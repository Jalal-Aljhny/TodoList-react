import FeatherIcon from "feather-icons-react";
import PropTypes from "prop-types";

const ToDo = ({ todo, toggleTodo, deleteTodo, editTodo, mode }) => {
  return (
    <div className={`todos-todo ${todo.done ? "done" : ""}`}>
      <div
        className="todos-todo_icon"
        onClick={() => {
          toggleTodo(todo.id);
        }}
      >
        <FeatherIcon icon={todo.done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text">{todo.title}</div>
      {mode !== "edit" && (
        <div className="todos-todo_cta">
          <div
            className="todos-todo_cta-edit"
            onClick={() => {
              editTodo(todo);
            }}
          >
            <FeatherIcon icon="edit" size="20" />
          </div>
          <div
            className="todos-todo_cta-delete"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            <FeatherIcon icon="trash-2" size="20" />
          </div>
        </div>
      )}
    </div>
  );
};

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default ToDo;
