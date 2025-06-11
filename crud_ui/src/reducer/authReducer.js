// const initialState = {
//   user: null,
//   error: null,
//   loading: false,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SIGNUP_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'SIGNUP_SUCCESS':
//       return { ...state, loading: false, user: action.payload, error: null };
//     case 'SIGNUP_FAILED':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default authReducer;
