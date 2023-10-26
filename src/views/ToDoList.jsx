import { useEffect, useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDos from "../components/ToDos";
import Header from "../components/Header";

const ToDoList = () => {
  const initialData = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, setTodos] = useState(initialData);
  const [mode, setMode] = useState("add"); //add , filter , edit
  const [active, setActive] = useState(null);
  const [count, setCount] = useState(0);

  const toggleTodo = (id) => {
    const newData = todos.map((td) => {
      if (td.id === id) {
        td.done = !td.done;
      }
      return td;
    });
    setTodos(newData);
  };

  const deleteTodo = (id) => {
    const newData = todos.filter((td) => td.id !== id);
    setTodos(newData);
  };

  const addTodo = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: Date.now(),
        title: title.trim(),
        done: false,
      };
      setTodos([newTodo, ...todos]);
    } else {
      const newTodos = todos.map((td) => {
        if (td.id === active.id) {
          td.title = title;
        }
        return td;
      });
      setTodos(newTodos);
      setMode("add");
    }
  };

  const toggleFilter = () => {
    if (mode === "edit") {
      return;
    }
    if (mode === "filter") {
      setMode("add");
    } else {
      setMode("filter");
    }
  };

  const editTodo = (todo) => {
    setMode("edit");
    setActive(todo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    setCount(todos.length);
  }, [todos]);

  let currentData = [...todos];
  if (mode === "filter") {
    currentData = todos.filter((td) => !td.done);
  }
  if (mode === "edit") {
    currentData = [active];
  }

  return (
    <>
      <Header count={count} />
      <main>
        <div className="container">
          <div className="todos">
            <ToDoForm
              addTodo={addTodo}
              toggleFilter={toggleFilter}
              mode={mode}
              active={active}
            />
            <ToDos
              todos={currentData}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              mode={mode}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ToDoList;
