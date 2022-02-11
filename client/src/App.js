import React, { useState, useEffect } from "react";

import Footer from "./components/pages/layouts/Footer";
import Header from "./components/pages/layouts/Header";
import Navbar from "./components/pages/layouts/Navbar";

// Router
import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

// Page Admin
import HomeAdmin from "./components/pages/admin/Home";
import AdminManageUser from "./components/pages/admin/AdminManageUser";

// page Officer
import HomeOfficer from "./components/pages/officer/Home";

// Page User
import HomeUser from "./components/pages/user/Home";
import UserQuestion from "./components/pages/user/UserQuestion";
import AddQuestion from "./components/pages/user/AddQuestion";

import { currentUser } from "./components/functions/auth";

//redux
import { useDispatch } from "react-redux";

//Protect Route
import UserRoute from "./components/routes/UserRoute";
import OfficerRoute from "./components/routes/OfficerRoute";
import AdminRoute from "./components/routes/AdminRoute";

function App() {
   const dispatch = useDispatch();
   const idtoken = localStorage.token;

   //เช็ค User เมื่อมีการ Refresh

   if (idtoken) {
      // console.log(idtoken);
      currentUser(idtoken)
         .then((res) => {
            //
            // console.log(res.data);
            dispatch({
               type: "LOGIN",
               payload: {
                  token: idtoken,
                  mem_id: res.data.mem_id,
                  mem_mail: res.data.mem_mail,
                  mem_user: res.data.mem_user,
                  lv_id: res.data.lv_id,
               },
            });
         })
         .catch((err) => {
            //err
            console.log("app.js ", err);
         });
   }

   return (
      <div className="App">
         <Navbar />
         <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Header />
            <div className="body flex-grow-1 px-3">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/about" element={<About />} />
                  {/*NOTE ADMIN */}
                  <Route
                     path="/index-admin"
                     element={
                        <AdminRoute>
                           <HomeAdmin />
                        </AdminRoute>
                     }
                  />
                  <Route
                     path="/admin-manage-user"
                     element={
                        <AdminRoute>
                           <AdminManageUser />
                        </AdminRoute>
                     }
                  />
                  {/*NOTE OFFICER */}
                  <Route
                     path="/index-officer"
                     element={
                        <OfficerRoute>
                           <HomeOfficer />
                        </OfficerRoute>
                     }
                  />
                  {/*NOTE USER */}
                  <Route
                     path="/index-user"
                     element={
                        <UserRoute>
                           <HomeUser />
                        </UserRoute>
                     }
                  />
                  <Route
                     path="/user-question"
                     element={
                        <UserRoute>
                           <UserQuestion />
                        </UserRoute>
                     }
                  />
                  <Route
                     path="/user-add-question"
                     element={
                        <UserRoute>
                           <AddQuestion />
                        </UserRoute>
                     }
                  />
               </Routes>
            </div>
            <Footer />
         </div>
      </div>
   );
}

export default App;
