import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import NavAdmin from "./navbar/NavAdmin";
import NavUser from "./navbar/NavUser";
import NavOfficer from "./navbar/NavOfficer";

export default function Navbar() {
   const [userLv, setUserLv] = useState([]);
   const { user } = useSelector((state) => ({ ...state }));
   useEffect(() => {
      setUserLv(user);
   });
   const menuAdmin = () => {
      if (user) {
         if (user.lv_id === 1) {
            return (
               <div>
                  <h1>ADMIN</h1>
               </div>
            );
         }
      }
   };

   //console.log("admin");

   //console.log("User", userLv);

   //const [userData, setUserdate] = useState(user.lv_id);
   // console.log("user", user);
   //console.log("userData", userData);
   return (
      <div>
         <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="/" className="brand-link elevation-4">
               <img
                  src="../../dist/img/AdminLTELogo.png"
                  alt="AdminLTE Logo"
                  className="brand-image img-circle elevation-3"
                  style={{ opacity: ".8" }}
               />
               <span className="brand-text font-weight-light">QA CED</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
               {/* Sidebar Menu */}
               <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           <p>หน้าแรก</p>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/about" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}

                           <p>เกี่ยวกับระบบ</p>
                        </Link>
                     </li>
                     {!user && (
                        <li className="nav-item">
                           <Link to="/login" className="nav-link">
                              {/* <i className="nav-icon fas fa-file" /> */}

                              <p>ระบบถามคำถาม</p>
                           </Link>
                        </li>
                     )}

                     <NavUser />
                     <NavOfficer />
                     <NavAdmin />
                     {/* <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> 
                           <p>ระบบคำถาม</p>
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> 
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>คำถามของฉัน</p>
                        </Link>
                     </li> */}

                     {/* {menuAdmin} */}
                     {/* <li className="nav-header">ข้อมูลทั่วไป</li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="nav-icon fas fa-file" /> 
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>หมวดคำถาม</p>
                        </Link>
                     </li>
                     <li className="nav-header">ข้อมูลระบบ</li>
                     <li className="nav-item">
                        <Link to="/admin-manage-user" className="nav-link">
                            <i className="nav-icon fas fa-file" /> 
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>ข้อมูลสมาชิก</p>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="nav-icon fas fa-file" /> 
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>ระดับการเข้าถึงข้อมูล</p>
                        </Link>
                     </li> 
                     */}
                     {/* <li className="nav-item menu-open">
                        <a href="#" className="nav-link">
                           {/* <i className="nav-icon fas fa-chart-pie" /> 
                           <p>
                              ข้อมูลทั่วไป
                              <i className="right fas fa-angle-left" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <Link to="/" className="nav-link">
                                 {/* <i className="nav-icon fas fa-file" /> 
                                 {" \u00A0\u00A0\u00A0\u00A0"}
                                 <p>หมวดคำถาม</p>
                              </Link>
                           </li>
                        </ul>
                     </li> */}
                     {/* <li className="nav-item menu-open">
                        <a href="#" className="nav-link">
                           {/* <i className="nav-icon fas fa-chart-pie" /> 
                           <p>
                              ข้อมูลระบบ
                              <i className="right fas fa-angle-left" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <Link to="/admin-manage-user" className="nav-link">
                                 {/* <i className="nav-icon fas fa-file" /> 
                                 {" \u00A0\u00A0\u00A0\u00A0"}
                                 <p>ข้อมูลสมาชิก</p>
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link to="/" className="nav-link">
                                 {/* <i className="nav-icon fas fa-file" /> 
                                 {" \u00A0\u00A0\u00A0\u00A0"}
                                 <p>ระดับการเข้าถึงข้อมูล</p>
                              </Link>
                           </li>
                        </ul>
                     </li> 
                     */}
                  </ul>
               </nav>

               {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
         </aside>
      </div>
   );
}
