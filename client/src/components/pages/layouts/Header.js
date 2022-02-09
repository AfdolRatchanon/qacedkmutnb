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
               {/* <li className="nav-item d-none d-sm-inline-block">
                  <a href="index3.html" className="nav-link">
                     หน้าแรก
                  </a>
               </li>
               <li className="nav-item d-none d-sm-inline-block">
                  <a href="#" className="nav-link">
                     Contact
                  </a>
               </li> */}
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
               {/* Navbar Search */}
               <li className="nav-item">
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
               </li>

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
                     <li className="nav-item  d-sm-inline-block" onClick={logout}>
                        <a className="nav-link" role="button">
                           ออกจากระบบ
                        </a>
                     </li>
                  </>
               )}
            </ul>
         </nav>
      </div>
   );
}
