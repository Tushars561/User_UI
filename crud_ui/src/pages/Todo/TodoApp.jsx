import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setTodoCounts } from "../../redux/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [csvFile, setCsvFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const { total, pending, completed } = useSelector((state) => state.todo);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const fetchTodos = async () => {
    try {
      const res = await axios.get("https://localhost:7245/api/todo", axiosConfig);
      setTodos(res.data);
    } catch (err) {
      alert("Fetch failed: " + (err.response?.data?.message || "Unauthorized"));
    }
  };

  const fetchTodoCount = async () => {
    try {
      const res = await axios.get("https://localhost:7245/api/todo/todo-count", axiosConfig);
      dispatch(setTodoCounts({
        total: res.data.totalCount,
        pending: res.data.pendingCount,
        completed: res.data.completedCount
      }));
    } catch (err) {
      console.error("Fetch count failed", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchTodos();
      fetchTodoCount();
    } else {
      alert("Please log in first");
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addTodo = async () => {
    const payload = {
      title: formData.title,
      description: formData.description,
      isComplete: false,
    };

    try {
      await axios.post("https://localhost:7245/api/todo", payload, axiosConfig);
      setFormData({ title: "", description: "" });
      fetchTodos();
      fetchTodoCount();
    } catch (err) {
      if (err.response?.data?.errors) {
        const errorMessages = Object.values(err.response.data.errors).flat();
        alert("Add failed:\n" + errorMessages.join("\n"));
      } else {
        alert("Add failed: " + (err.response?.data?.message || "Invalid input"));
      }
    }
  };

  const toggleComplete = async (todo) => {
    try {
      await axios.put(`https://localhost:7245/api/todo/${todo.id}`, {
        ...todo,
        isComplete: !todo.isComplete,
      }, axiosConfig);
      fetchTodos();
      fetchTodoCount();
    } catch (err) {
      alert("Update failed: " + (err.response?.data?.message || "Error updating todo"));
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://localhost:7245/api/todo/${id}`, axiosConfig);
      fetchTodos();
      fetchTodoCount();
    } catch (err) {
      alert("Delete failed: " + (err.response?.data?.message || "Error"));
    }
  };

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const uploadCSV = async () => {
    if (!csvFile) return alert("Please select a CSV file");

    const form = new FormData();
    form.append("file", csvFile);

    try {
      await axios.post("https://localhost:7245/api/todo/upload-csv", form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setCsvFile(null);
      fetchTodos();
      fetchTodoCount();
    } catch (err) {
      console.error("CSV upload failed", err);
      alert("CSV Upload Failed");
    }
  };

  const searchTodos = async (query) => {
    try {
      const res = await axios.get(
        `https://localhost:7245/api/todo/search?title=${encodeURIComponent(query)}`,
        axiosConfig
      );
      setTodos(res.data);
    } catch (err) {
      alert("Search failed: " + (err.response?.data?.message || "Error"));
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">📝 Todo Application</h1>

      {/* Count Boxes */}
      <div className="row text-center mb-4">
        <div className="col">
          <div className="alert alert-primary">Total: {total}</div>
        </div>
        <div className="col">
          <div className="alert alert-warning">Pending: {pending}</div>
        </div>
        <div className="col">
          <div className="alert alert-success">Completed: {completed}</div>
        </div>
      </div>

      {/* CSV Upload */}
      <div className="mb-4">
        <div className="input-group">
          <input type="file" accept=".csv" className="form-control" onChange={handleFileChange} />
          <button className="btn btn-outline-secondary" onClick={uploadCSV}>Upload CSV</button>
        </div>
      </div>

      {/* Add Todo Form */}
      <div className="card p-3 mb-4">
        <h5>Add Todo</h5>
        <div className="row g-2">
          <div className="col-md-5">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="col-md-5">
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" onClick={addTodo}>Add</button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="🔍 Search Todos by Title"
          className="form-control"
          value={searchQuery}
          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);
            if (value.trim()) {
              searchTodos(value);
            } else {
              fetchTodos();
            }
          }}
        />
      </div>

      {/* Todo List */}
      <div className="card p-3">
        <h5>Todo List</h5>
        {todos.length === 0 ? (
          <p>No todos found.</p>
        ) : (
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={todo.isComplete}
                    onChange={() => toggleComplete(todo)}
                    id={`todo-${todo.id}`}
                  />
                  <label
                    className={`form-check-label ${todo.isComplete ? "text-decoration-line-through text-muted" : ""}`}
                    htmlFor={`todo-${todo.id}`}
                  >
                    {todo.title} - {todo.description}
                  </label>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
