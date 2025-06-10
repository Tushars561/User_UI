// // // const loginActionCreator = () => {
// // //   return {
// // //     type: "LOGIN",
// // //     payload: true,
// // //   };
// // // };

// // // export default loginActionCreator;

// // import axios from 'axios';

// // const loginActionCreator = ({ email, password }) => {
// //   return async (dispatch) => {
// //     try {
// //       const response = await axios.post('http://localhost:4000/customer/signin', {
// //         email,
// //         password,
// //       });

// //       const result = response.data;

// //       if (result.status === 'success') {
// //         const { token, name, email } = result.data;

// //         // Store token in localStorage for use in future API calls
// //         localStorage.setItem('token', token);

// //         dispatch({
// //           type: 'LOGIN',
// //           payload: {
// //             token,
// //             name,
// //             email,
// //           },
// //         });
// //       } else {
// //         alert(result.error || 'Login failed');
// //       }
// //     } catch (error) {
// //       alert('An error occurred during login. Please try again.');
// //       console.error(error);
// //     }
// //   };
// // };

// // export default loginActionCreator;


// const loginActionCreator = (email, password) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(
//         // "http://localhost:4000/customer/signin"
//          `https://localhost:7245/api/User/login?email=${email}&password=${password}`,

//         {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();

//       if (result.status === "success") {
//         dispatch({
//           type: "LOGIN",
//           payload: true,
//         });

//         // Optional: store the token if needed
//         localStorage.setItem("token", result.data.token);
//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       alert("Login failed. Please try again.");
//       console.error(error);
//     }
//   };
// };

// export default loginActionCreator;
