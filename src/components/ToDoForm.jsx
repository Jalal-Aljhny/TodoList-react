import FeatherIcon from "feather-icons-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ToDoForm = ({ addTodo, toggleFilter, mode, active }) => {
  const defaultTitle = mode === "edit" && active ? active.title : "";
  const [title, setTitle] = useState(defaultTitle);
  useEffect(() => {
    setTitle(defaultTitle);
  }, [defaultTitle]);
  const handleAdd = (title) => {
    if (!title.trim()) {
      return;
    }
    addTodo(title);
    setTitle("");
  };
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="todos-form">
      <div
        className={`todos-form_icon ${mode === "filter" ? "active" : ""}`}
        onClick={toggleFilter}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="Add new ToDo..."
          value={title}
          onChange={handleInput}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          onClick={() => {
            handleAdd(title);
          }}
          disabled={!title.trim()}
        >
          {mode === "edit" ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  active: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

export default ToDoForm;
