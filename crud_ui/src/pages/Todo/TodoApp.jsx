



// // Frontend: React (TodoApp.jsx)
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./TodoApp.css";
// import { useSelector, useDispatch } from "react-redux";
// // import { setTodoCount } from "../redux/todoSlice";
// // import { setTodoCount, incrementCount } from "../../redux/todoSlice";

// import { setTodoCounts } from "../../redux/todoSlice"; // ✅ Updated


// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [formData, setFormData] = useState({ title: "", description: "" });
//   const token = localStorage.getItem("token");
  

//   const axiosConfig = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };

//   // const fetchTodos = async () => {
//   //   try {
//   //     const res = await axios.get("https://localhost:7245/api/todo", axiosConfig);
//   //     setTodos(res.data);
//   //   } catch (err) {
//   //     alert("Fetch failed: " + (err.response?.data?.message || "Unauthorized"));
//   //   }
//   // };

//   useEffect(() => {
//     if (token) fetchTodos();
//     else alert("Please log in first");
//   }, [token]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const addTodo = async () => {
//   //   try {
//   //     await axios.post("https://localhost:7245/api/todo", {
//   //       title: formData.title,
//   //       description: formData.description,
//   //       isComplete: false,
//   //     }, axiosConfig);
//   //     setFormData({ title: "", description: "" });
//   //     fetchTodos();
//   //   } catch (err) {
//   //     alert("Add failed: " + (err.response?.data?.message || "Invalid input"));
//   //   }
//   // };

 


//   const addTodo = async () => {
//   const todoPayload = {
//     title: formData.title,
//     description: formData.description,
//     isComplete: false,
//   };

//   try {
//     await axios.post("https://localhost:7245/api/todo", todoPayload, axiosConfig);
//     setFormData({ title: "", description: "" });
//     fetchTodos();
//     fetchTodoCount(); 
//   } catch (err) {
//     if (err.response?.data?.errors) {
//       const errorMessages = Object.values(err.response.data.errors).flat();
//       alert("Add failed:\n" + errorMessages.join("\n"));
//     } else {
//       alert("Add failed: " + (err.response?.data?.message || "Invalid input"));
//     }
//   }
// };

// // const [todoCount, setTodoCount] = useState(0);
// const { total, pending, completed } = useSelector((state) => state.todo);

// const fetchTodoCount = async () => {
//   try {
//     const res = await axios.get("https://localhost:7245/api/todo/todo-count", axiosConfig);
//     // setTodoCount(res.data.todoCount);
//      dispatch(setTodoCounts(res.data))
//   } catch (err) {
//     console.error("Fetch count failed", err);
//   }
// };
//  const dispatch = useDispatch();
// const todoCount = useSelector((state) => state.todo.count);

// const fetchTodos = async () => {
//   try {
//     const res = await axios.get("https://localhost:7245/api/todo", axiosConfig);
//     setTodos(res.data);
//     dispatch(setTodoCounts(res.data.length)); // Update Redux state here
//   } catch (err) {
//     alert("Fetch failed: " + (err.response?.data?.message || "Unauthorized"));
//   }
// };

// useEffect(() => {
//   if (token) {
//     fetchTodos();
//     fetchTodoCount(); // 👈 fetch count here
//   } else {
//     alert("Please log in first");
//   }
// }, [token]);


// const [csvFile, setCsvFile] = useState(null);

// const handleFileChange = (e) => {
//   setCsvFile(e.target.files[0]);
// };

// const uploadCSV = async () => {
//   if (!csvFile) return alert("Please select a CSV file");

//   const formData = new FormData();
//   formData.append("file", csvFile);

//   try {
//     await axios.post("https://localhost:7245/api/todo/upload-csv", formData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     setCsvFile(null);
//     fetchTodos();
//     fetchTodoCount(); // update count after bulk insert
//   } catch (err) {
//     console.error("CSV upload failed", err);
//     alert("CSV Upload Failed");
//   }
// };


//   const toggleComplete = async (todo) => {
//     try {
//       await axios.put(`https://localhost:7245/api/todo/${todo.id}`, {
//         ...todo,
//         isComplete: !todo.isComplete,
//       }, axiosConfig);
//       fetchTodos();
//       fetchTodoCount(); 
//     } catch (err) {
//       alert("Update failed: " + (err.response?.data?.message || "Error updating todo"));
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`https://localhost:7245/api/todo/${id}`, axiosConfig);
//       fetchTodos();
//       fetchTodoCount(); 
//     } catch (err) {
//       alert("Delete failed: " + (err.response?.data?.message || "Error"));
//     }
//   };

// //   return (
// //     <div className="todo-container">
// //       <h1>Todo Application</h1>
// //       <div className="todo-form">
// //         <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
// //         <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
// //         <button onClick={addTodo}>Add Todo</button>
// //       </div>
// //       <ul className="todo-list">
// //         {todos.map((todo) => (
// //           <li key={todo.id}>
// //             <input type="checkbox" checked={todo.isComplete} onChange={() => toggleComplete(todo)} />
// //             <span className={todo.isComplete ? "complete" : ""}>{todo.title} - {todo.description}</span>
// //             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// return (
//   <div className="todo-container">
//     <h1>Todo Application</h1>

//     {/* Todo Count */}
//     <div className="todo-count-box">
//       {/* <h2>Todo Count</h2> */}
//       {/* <div className="count-square">{todoCount}</div> */}
//       <h2>Total Todos: {todoCount}</h2>

//     </div>
//      {/* Count Boxes */}
//       <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
//         <div className="box">Total: {total}</div>
//         <div className="box">Pending: {pending}</div>
//         <div className="box">Completed: {completed}</div>
//       </div>

//     {/* CSV Upload */}
//     <div className="csv-upload">
//       <input type="file" accept=".csv" onChange={handleFileChange} />
//       <button onClick={uploadCSV}>Upload CSV</button>
//     </div>

//     {/* Add Todo Form */}
//     <div className="todo-form">
//       <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
//       <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//       <button onClick={addTodo}>Add Todo</button>
//     </div>

//     {/* Todo List */}
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           <input type="checkbox" checked={todo.isComplete} onChange={() => toggleComplete(todo)} />
//           <span className={todo.isComplete ? "complete" : ""}>{todo.title} - {todo.description}</span>
//           <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// )}


// export default TodoApp;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TodoApp.css";
import { useSelector, useDispatch } from "react-redux";
import { setTodoCounts } from "../../redux/todoSlice";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [csvFile, setCsvFile] = useState(null);
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const { total, pending, completed } = useSelector((state) => state.todo);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const res = await axios.get("https://localhost:7245/api/todo", axiosConfig);
      setTodos(res.data);
    } catch (err) {
      alert("Fetch failed: " + (err.response?.data?.message || "Unauthorized"));
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
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



  // Fetch todo counts
  const fetchTodoCount = async () => {
    try {
      const res = await axios.get("https://localhost:7245/api/todo/todo-count", axiosConfig);
      // dispatch(setTodoCounts(res.data));
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

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new todo
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

  // Toggle completion
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

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://localhost:7245/api/todo/${id}`, axiosConfig);
      fetchTodos();
      fetchTodoCount();
    } catch (err) {
      alert("Delete failed: " + (err.response?.data?.message || "Error"));
    }
  };

  // Handle CSV upload
  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

//   const [page, setPage] = useState(1);
// const [pageSize] = useState(5); // Or allow user to choose
// const [totalPages, setTotalPages] = useState(1);
// const fetchTodos = async () => {
//   try {
//     const res = await axios.get(`https://localhost:7245/api/todo?pageNumber=${page}&pageSize=${pageSize}`, axiosConfig);
//     setTodos(res.data.data);
//     setTotalPages(res.data.totalPages);
//   } catch (err) {
//     alert("Fetch failed: " + (err.response?.data?.message || "Unauthorized"));
//   }
// };
// useEffect(() => {
//   if (token) {
//     fetchTodos();
//     fetchTodoCount();
//   }
// }, [token, page]);



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

  return (
    <div className="todo-container">
      <h1>Todo Application</h1>

      {/* Count Boxes */}
      <div className="count-container">
        <div className="box">Total: {total}</div>
        <div className="box">Pending: {pending}</div>
        <div className="box">Completed: {completed}</div>
      </div>

      {/* CSV Upload */}
      <div className="csv-upload">
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={uploadCSV}>Upload CSV</button>
      </div>

      {/* Add Todo Form */}
      <div className="todo-form">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <button onClick={addTodo}>Add Todo</button>
      </div>

<input
  type="text"
  placeholder="Search Todos by Title"
  value={searchQuery}
  onChange={(e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      searchTodos(value);
    } else {
      fetchTodos(); // fallback to all todos
    }
  }}
/>


      <div> 
       <h1>
        
       </h1>
      </div>
      Todo List
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isComplete} onChange={() => toggleComplete(todo)} />
            <span className={todo.isComplete ? "complete" : ""}>
              {todo.title} - {todo.description}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

    
  );
}

export default TodoApp;
