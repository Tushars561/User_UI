// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserUi from './components/UserUi';
// import Nav from "./components/nav/Nav";
// import Routing from "./Routing/Routing"
// import { useSelector } from 'react-redux';
// // import store from './store/store';

// function App() {

//   // let isLoggedIn = useSelector((storedata)=>{
//   //   return storedata.isLoggedIn
//   // })

//   return (
   
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<UserUi />} /> */}
//        {/* <Route path="/" element={<Nav />} /> */}
//        <Route path="/" element={<Routing/>} />
//       {/* {
//         isLoggedIn ? <Nav/> : null
//       } */}
//       </Routes>
//     </Router>
    
//   );
// }


// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/Signup";
import Products from "./pages/product/Products";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Nav from "./components/nav/Nav"; 
import UserUi from "./components/UserUi"
import TodoApp from "./pages/Todo/TodoApp";
import NoteApp from "./pages/Note/NoteApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<UserUi />} />
      <Route path="/todoApp" element={<TodoApp />} />
      <Route path="/noteApp" element={<NoteApp />} />


      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}


export default App;



