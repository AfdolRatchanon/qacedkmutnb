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
import ForgotPassword from "./components/pages/auth/ForgotPassword";
import NewPassword from "./components/pages/auth/NewPassword";

// Page Admin
import HomeAdmin from "./components/pages/admin/Home";
import AdminManageUser from "./components/pages/admin/AdminManageUser";
import AdminAddMember from "./components/pages/admin/AdminAddMember";
import AdminManageLevel from "./components/pages/admin/AdminManageLevel";
import AdminEditLevel from "./components/pages/admin/AdminEditLevel";
import AdminManageQuestionType from "./components/pages/admin/AdminManageQuestionType";
import AdminEditQuestionType from "./components/pages/admin/AdminEditQuestionType";
import AdminAddQuestionType from "./components/pages/admin/AdminAddQuestionType";

// page Officer
import HomeOfficer from "./components/pages/officer/Home";
import OfficerQuestionType from "./components/pages/officer/OfficerQuestionType";
import OfficerReadQuestionType from "./components/pages/officer/OfficerReadQuestionType";
import OfficerAnswerQuestion from "./components/pages/officer/OfficerAnswerQuestion";

// Page User
import HomeUser from "./components/pages/user/Home";
import UserManageQusetion from "./components/pages/user/UserManageQusetion";
import AddQuestion from "./components/pages/user/AddQuestion";
import EditQuestion from "./components/pages/user/EditQuestion";

import { currentUser } from "./components/functions/auth";

//redux
import { useDispatch } from "react-redux";

//Protect Route
import UserRoute from "./components/routes/UserRoute";
import OfficerRoute from "./components/routes/OfficerRoute";
import AdminRoute from "./components/routes/AdminRoute";

//Toastfy
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const dispatch = useDispatch();
   const idtoken = localStorage.token;

   //เช็ค User เมื่อมีการ Refresh

   if (idtoken) {
      // console.log(idtoken);
      currentUser(idtoken)
         .then((res) => {
            // console.log(res.data);
            dispatch({
               type: "LOGIN",
               payload: {
                  token: idtoken,
                  mem_id: res.data.mem_id,
                  mem_mail: res.data.mem_mail,
                  mem_user: res.data.mem_user,
                  mem_name: res.data.mem_name,
                  lv_id: res.data.lv_id,
                  lv_name: res.data.lv_name,
               },
            });
         })
         .catch((err) => {
            //err
            // console.log(err);
            // alert(err);
            // localStorage.clear();
            console.log(err.response.data);
            alert(err.response.data + " โทเค็นหมดอายุกรุณาเข้าสู่ระบบใหม่อีกครั้ง");
         });
   }

   return (
      <div className="App">
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
         <Navbar />
         <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <Header />
            <div className="body flex-grow-1 px-3">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ForgotPassword" element={<ForgotPassword />} />
                  <Route path="/NewPassword" element={<NewPassword />} />
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
                     path="/admin-manage-question-type"
                     element={
                        <AdminRoute>
                           <AdminManageQuestionType />
                        </AdminRoute>
                     }
                  />
                  <Route
                     path="/admin-add-question-type"
                     element={
                        <AdminRoute>
                           <AdminAddQuestionType />
                        </AdminRoute>
                     }
                  />
                  <Route
                     path="/admin-edit-question-type"
                     element={
                        <AdminRoute>
                           <AdminEditQuestionType />
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

                  <Route
                     path="/admin-add-member"
                     element={
                        <AdminRoute>
                           <AdminAddMember />
                        </AdminRoute>
                     }
                  />
                  <Route
                     path="/admin-manage-level"
                     element={
                        <AdminRoute>
                           <AdminManageLevel />
                        </AdminRoute>
                     }
                  />
                  <Route
                     path="/admin-edit-level"
                     element={
                        <AdminRoute>
                           <AdminEditLevel />
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
                  <Route
                     path="/officer-question-type"
                     element={
                        <OfficerRoute>
                           <OfficerQuestionType />
                        </OfficerRoute>
                     }
                  />
                  <Route
                     path="/officer-read-question-type"
                     element={
                        <OfficerRoute>
                           <OfficerReadQuestionType />
                        </OfficerRoute>
                     }
                  />
                  <Route
                     path="/officer-answer-question"
                     element={
                        <OfficerRoute>
                           <OfficerAnswerQuestion />
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
                           <UserManageQusetion />
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
                  <Route
                     path="/user-edit-question"
                     element={
                        <UserRoute>
                           <EditQuestion />
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
