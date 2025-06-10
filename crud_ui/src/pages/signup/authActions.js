// // // src/store/actions/authActions.js
// // export const signupUser = (formData) => {
// //   return async (dispatch) => {
// //     try {
// //       // Normally you'd make an API call here
// //       console.log('Signup payload:', formData);
// //       dispatch({ type: 'SIGNUP_SUCCESS', payload: formData });
// //     } catch (error) {
// //       dispatch({ type: 'SIGNUP_FAIL', payload: error.message });
// //     }
// //   };
// // };

// import axios from 'axios';

// export const signupUser = (userData) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         // 'http://localhost:4000/customer/signup', 
//         'https://localhost:7245/api/User/SignUp', 
//         userData);

//       console.log('Signup success:', response.data);

//       dispatch({
//         type: 'SIGNUP_SUCCESS',
//         payload: response.data.message,
//       });
//     } catch (error) {
//       console.error('Signup failed:', error.response?.data || error.message);
//       dispatch({
//         type: 'SIGNUP_FAILED',
//         payload: error.response?.data?.error || 'Signup failed',
//       });
//     }
//   };
// };
