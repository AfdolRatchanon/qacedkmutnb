import React from "react";
import { Link } from "react-router-dom";

function Header() {
   return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
         {/* Left navbar links */}
         <ul className="navbar-nav">
            <li className="nav-item">
               <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                  <i className="fas fa-bars" />
               </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
               <a href="index3.html" className="nav-link">
                  หน้าแรก
               </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
               <a href="#" className="nav-link">
                  Contact
               </a>
            </li>
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
            <li className="nav-item d-none d-sm-inline-block">
               <Link to="/login" className="nav-link">
                  เข้าสู่ระบบ
               </Link>
            </li>
         </ul>
      </nav>
   );
}

export default Header;