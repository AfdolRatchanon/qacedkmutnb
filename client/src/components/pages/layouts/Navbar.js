import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
   const { user } = useSelector((state) => ({ ...state }));
   return (
      <div>
         <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="../../index3.html" className="brand-link elevation-4">
               <img
                  src="../../dist/img/AdminLTELogo.png"
                  alt="AdminLTE Logo"
                  className="brand-image img-circle elevation-3"
                  style={{ opacity: ".8" }}
               />
               <span className="brand-text font-weight-light">QA CED</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
               {/* Sidebar user (optional) */}

               {user && (
                  <>
                     <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                           <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                           <a className="d-block">{user.mem_name}</a>
                        </div>
                     </div>
                  </>
               )}

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
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           <p>ระบบคำถาม</p>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>คำถามของฉัน</p>
                        </Link>
                     </li>
                     <li className="nav-header">ข้อมูลทั่วไป</li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>หมวดคำถาม</p>
                        </Link>
                     </li>
                     <li className="nav-header">ข้อมูลระบบ</li>
                     <li className="nav-item">
                        <Link to="/admin-manage-user" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>ข้อมูลสมาชิก</p>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>ระดับการเข้าถึงข้อมูล</p>
                        </Link>
                     </li>
                  </ul>
               </nav>
               {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
         </aside>
      </div>
   );
}
