// // import React from 'react'
// // import home from '../pages/home/home'
// // import login from '../pages/login/login'
// // import { Routes, Route } from 'react-router-dom';

// // function Routing() {
// //   return (
// //    <Routes>
// //     <Route path={"/"} element={<home/>}/>
// //     <Route path={"/signin"} element={<login/>}/>
// //     <Route path={"/signup"} element={<signup/>}/>

// //    </Routes>
// //   )
// // }

// // export default Route;

// import { Routes, Route } from "react-router-dom";

// import { routes } from "./Routes";
// import { useSelector } from "react-redux";
// // import login from "../pages/login/login";
// import Products from "../pages/product/Products";
// import Login from "../pages/login/login";
// function Routing() {
//   const isLoggedIn = useSelector((store) => {
//     return store.isLoggedIn;
//   });
//   return (
//     <Routes>
//       {routes.map((ele, index) => {
//         return (
//           <Route
//             // key={index + 100}
//             // path={ele.path}
//             // element={isLoggedIn ? ele.component : <Login />}
//           />
//         );
//       })}
//     </Routes>
//   );
// }

// export default Routing;
