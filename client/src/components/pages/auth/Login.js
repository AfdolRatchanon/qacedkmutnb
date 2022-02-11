import React, { useState } from "react";
import { login } from "../../functions/auth";

import { Link, useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

const Login = () => {
   const [value, setValue] = useState({
      mem_user: "",
      mem_pwd: "",
   });
   const navigate = useNavigate();
   const dispatch = useDispatch();

   //เก็บข้อมูลจาก TextBox ลงตัวแปรต่าง ๆ
   const handleChang = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
   };
   // console.log(value);

   const roleBaseRedirect = (lv_id) => {
      console.log("lv_id : ", lv_id);
      if (lv_id === 1) {
         navigate("/index-admin");
      } else if (lv_id === 2) {
         navigate("/index-officer");
      } else if (lv_id === 3) {
         navigate("/index-user");
      } else {
         navigate("/login");
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit", value);

      login(value)
         .then((res) => {
            console.log(res.data);
            alert("ยินดีต้อนรับคุณ " + res.data.payLoad.user.mem_user + " เข้าสู่เว็บไซต์");
            dispatch({
               type: "LOGIN",
               payload: {
                  token: res.data.token,
                  mem_id: res.data.payLoad.user.mem_id,
                  mem_mail: res.data.payLoad.user.mem_mail,
                  mem_user: res.data.payLoad.user.mem_user,
                  lv_id: res.data.payLoad.user.lv_id,
               },
            });
            localStorage.setItem("token", res.data.token);
            roleBaseRedirect(res.data.payLoad.user.lv_id);
         })
         .catch((err) => {
            console.log(err.response.data);
            alert(err.response.data);
         });
   };

   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>เข้าสู่ระบบ</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item font-weight-bold">เข้าสู่ระบบ</li>
                     </ol>
                  </div>
               </div>
            </div>
            {/* /.container-fluid */}
         </section>
         {/* Main content */}
         <section className="content">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12">
                     {/* Default box */}
                     <div className="card">
                        {/* <div className="card-header">
                      <h3 className="card-title">Title</h3>
                      <div className="card-tools">
                         <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className="fas fa-minus" />
                         </button>
                         <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i className="fas fa-times" />
                         </button>
                      </div>
                   </div> */}
                        <div className="card-body">
                           {/* Form Register */}
                           <form className="form-horizontal" onSubmit={handleSubmit}>
                              <div className="form-group row">
                                 <div className="col-sm-1"></div>
                                 <label className="col-sm-2 col-form-label">ชื่อผู้ใช้</label>
                                 <div className="col-sm-5">
                                    <input
                                       type="text"
                                       className="form-control"
                                       name="mem_user"
                                       placeholder="ชื่อผู้ใช้"
                                       pattern="\w{4,30}"
                                       title="Please input range 4 - 30 alphabet"
                                       onChange={handleChang}
                                    />
                                    <div className="col-sm-4"></div>
                                 </div>
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-1"></div>
                                 <label className="col-sm-2 col-form-label">รหัสผ่าน</label>
                                 <div className="col-sm-5">
                                    <input
                                       type="password"
                                       className="form-control"
                                       name="mem_pwd"
                                       placeholder="รหัสผ่าน"
                                       pattern="\w{6,30}"
                                       title="Please input range 6 - 30 alphabet"
                                       onChange={handleChang}
                                    />
                                 </div>
                                 <div className="col-sm-1"></div>
                                 <Link className="btn btn-warning" to="/">
                                    ลืมรหัสผ่าน
                                 </Link>
                                 <div className="col-sm-1"></div>
                              </div>
                              <div className="form-group" align="center">
                                 <button type="reset" className="btn btn-danger ">
                                    ยกเลิก
                                 </button>
                                 <button className="btn btn-success">เข้าสู่ระบบ</button>
                                 <Link className="btn btn-primary" to="/Register">
                                    สมัครสมาชิก
                                 </Link>
                              </div>

                              {/*disabled={checkLength()} */}
                           </form>
                        </div>
                        {/* /.card-body */}
                        {/* <div className="card-footer"></div> */}
                        {/* /.card-footer*/}
                     </div>
                     {/* /.card */}
                  </div>
               </div>
            </div>
         </section>
         {/* /.content */}
      </div>
   );
};

export default Login;
