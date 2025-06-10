// const initialData = {
//   isLoggedIn: false,
// };
// const loginReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "LOGOUT":
//       state = {
//         isLoggedIn: action.payload,
//       };
//       break;

//     case "LOGIN":
//       state = {
//         isLoggedIn: action.payload,
//       };
//       break;
//   }
//   return state;
// };
// export default loginReducer;
// const initialData = {
//   isLoggedIn: false,
// };

// const loginReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "LOGIN":
//     case "LOGOUT":
//       return {
//         ...state,
//         isLoggedIn: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default loginReducer;
