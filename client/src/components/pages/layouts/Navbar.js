import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
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
               <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
               {/* Sidebar user (optional) */}
               <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                     <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                  </div>
                  <div className="info">
                     <a href="#" className="d-block">
                        Alexander Pierce
                     </a>
                  </div>
               </div>
               {/* Sidebar Menu */}
               <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                     {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                     {/* <li className="nav-item has-treeview">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-tachometer-alt" />
                           <p>
                              Dashboard
                              <i className="right fas fa-angle-left" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="../../index.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Dashboard v1</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="../../index2.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Dashboard v2</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="../../index3.html" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Dashboard v3</p>
                              </a>
                           </li>
                        </ul>
                     </li> */}
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
                     <li className="nav-header">ข้อมูลทั่วไป</li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           <p>หมวดคำถาม</p>
                        </Link>
                     </li>
                     <li className="nav-header">ข้อมูลระบบ</li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           <p>ข้อมูลสมาชิก</p>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           <p>ระดับการเข้าถึงข้อมูล</p>
                        </Link>
                     </li>
                     <li className="nav-header">MISCELLANEOUS</li>
                     <li className="nav-item">
                        <a href="https://adminlte.io/docs/3.0" className="nav-link">
                           <i className="nav-icon fas fa-file" />
                           <p>Documentation</p>
                        </a>
                     </li>
                     <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="fas fa-circle nav-icon" />
                           <p>Level 1</p>
                        </a>
                     </li>
                     <li className="nav-item has-treeview">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-circle" />
                           <p>
                              Level 1
                              <i className="right fas fa-angle-left" />
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="#" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Level 2</p>
                              </a>
                           </li>
                           <li className="nav-item has-treeview">
                              <a href="#" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>
                                    Level 2
                                    <i className="right fas fa-angle-left" />
                                 </p>
                              </a>
                              <ul className="nav nav-treeview">
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">
                                       <i className="far fa-dot-circle nav-icon" />
                                       <p>Level 3</p>
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">
                                       <i className="far fa-dot-circle nav-icon" />
                                       <p>Level 3</p>
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">
                                       <i className="far fa-dot-circle nav-icon" />
                                       <p>Level 3</p>
                                    </a>
                                 </li>
                              </ul>
                           </li>
                           <li className="nav-item">
                              <a href="#" className="nav-link">
                                 <i className="far fa-circle nav-icon" />
                                 <p>Level 2</p>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="fas fa-circle nav-icon" />
                           <p>Level 1</p>
                        </a>
                     </li>
                     <li className="nav-header">LABELS</li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="nav-icon far fa-circle text-danger" />
                           <p className="text">Important</p>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="nav-icon far fa-circle text-warning" />
                           <p>Warning</p>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           <i className="nav-icon far fa-circle text-info" />
                           <p>Informational</p>
                        </a>
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
