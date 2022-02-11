import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavAdmin = () => {
   const { user } = useSelector((state) => ({ ...state }));

   if (user) {
      if (user.lv_id === 1) {
         return (
            <>
               <li className="nav-item menu-open">
                  <a href="#" className="nav-link">
                     {/* <i className="nav-icon fas fa-chart-pie" /> */}
                     <p>
                        ข้อมูลทั่วไป
                        <i className="right fas fa-angle-left" />
                     </p>
                  </a>
                  <ul className="nav nav-treeview">
                     <li className="nav-item">
                        <Link to="/" className="nav-link">
                           {/* <i className="nav-icon fas fa-file" /> */}
                           {" \u00A0\u00A0\u00A0\u00A0"}
                           <p>หมวดคำถาม</p>
                        </Link>
                     </li>
                  </ul>
               </li>
               <li className="nav-item menu-open">
                  <a className="nav-link">
                     {/* <i className="nav-icon fas fa-chart-pie" /> */}
                     <p>
                        ข้อมูลระบบ
                        <i className="right fas fa-angle-left" />
                     </p>
                  </a>
                  <ul className="nav nav-treeview">
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
               </li>
            </>
         );
      } else {
         return null;
      }
   } else {
      return null;
   }
};

export default NavAdmin;
