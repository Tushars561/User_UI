// // src/features/todo/todoSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   count: 0,
// };

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//   reducers: {
//     setTodoCount: (state, action) => {
//       state.count = action.payload;
//     },
//   },
// });

// export const { setTodoCount } = todoSlice.actions;
// export default todoSlice.reducer;


// src/features/todo/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
  pending: 0,
  completed: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoCounts: (state, action) => {
      state.total = action.payload.total;
      state.pending = action.payload.pending;
      state.completed = action.payload.completed;
    },
  },
});

export const { setTodoCounts } = todoSlice.actions;
export default todoSlice.reducer;
