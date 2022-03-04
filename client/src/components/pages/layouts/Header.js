import React from "react";
//Route
import { Link, useNavigate } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
   const { user } = useSelector((state) => ({ ...state }));
   const dispatch = useDispatch();
   const navigate = useNavigate();
   // คำสั่ง Logout
   const logout = () => {
      dispatch({
         type: "LOGOUT",
      });
      navigate("/");
   };

   const clearLocalStorage = () => {
      localStorage.setItem("officer_type_id", null);
      localStorage.setItem("question_id", null);
      localStorage.setItem("level_id", null);
      localStorage.setItem("question_type_id", null);
   };

   return (
      <div>
         <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
               <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                     <i className="fas fa-bars" />
                  </a>
               </li>
               <li className="nav-item d-none d-sm-inline-block">
                  <Link className="nav-link" to="/" onClick={clearLocalStorage}>
                     ระบบบริการตอบคำถามสำหรับนักศึกษา
                  </Link>
               </li>
               {/*<li className="nav-item d-none d-sm-inline-block">
                  <a href="#" className="nav-link">
                     Contact
                  </a>
               </li> */}
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
               {/* Navbar Search */}
               {/* <li className="nav-item">
                  <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                     <i className="fas fa-search" />
                  </a>
                  <div className="navbar-search-block">
                     <form className="form-inline">
                        <div className="input-group input-group-sm">
                           <input
                              className="form-control form-control-navbar"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                           />
                           <div className="input-group-append">
                              <button className="btn btn-navbar" type="submit">
                                 <i className="fas fa-search" />
                              </button>
                              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                 <i className="fas fa-times" />
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </li> */}

               <li className="nav-item">
                  <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                     <i className="fas fa-expand-arrows-alt" />
                  </a>
               </li>
               {!user && (
                  <>
                     <li className="nav-item d-sm-inline-block">
                        <Link to="/login" className="nav-link">
                           เข้าสู่ระบบ
                        </Link>
                     </li>
                  </>
               )}
               {user && (
                  <>
                     <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                           {user.mem_user}
                        </a>

                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                           <span className=" dropdown-header">
                              <i className="nav-icon far fa-envelope ">{" \u00A0\u00A0" + user.mem_mail}</i>
                           </span>
                           <div className="dropdown-divider" />
                           <span className=" dropdown-header">
                              <i class="nav-icon far fa-address-card">{" \u00A0\u00A0" + user.lv_name}</i>
                           </span>
                           <div className="dropdown-divider" />
                           <a href="#" className="dropdown-item dropdown-footer" onClick={logout}>
                              <p className="nav-link" role="button">
                                 ออกจากระบบ
                              </p>
                           </a>
                        </div>
                     </li>
                     <li className="nav-item">
                        <img src="../../dist/img/AdminLTELogo.png" height={38} className="img-circle elevation-1" />
                     </li>
                  </>
               )}
            </ul>
         </nav>
      </div>
   );
}
