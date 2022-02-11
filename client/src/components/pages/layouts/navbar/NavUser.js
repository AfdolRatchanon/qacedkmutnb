import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavUser = () => {
   const { user } = useSelector((state) => ({ ...state }));

   if (user) {
      if (user.lv_id === 3) {
         return (
            <li className="nav-item menu-open">
               <a href="#" className="nav-link">
                  {/* <i className="nav-icon fas fa-chart-pie" /> */}
                  <p>
                     ระบบคำถาม
                     <i className="right fas fa-angle-left" />
                  </p>
               </a>
               <ul className="nav nav-treeview">
                  <li className="nav-item">
                     <Link to="/user-question" className="nav-link">
                        {/* <i className="nav-icon fas fa-file" /> */}
                        {" \u00A0\u00A0\u00A0\u00A0"}
                        <p>คำถามของฉัน</p>
                     </Link>
                  </li>
               </ul>
            </li>
         );
      } else {
         return null;
      }
   } else {
      return null;
   }
};

export default NavUser;
