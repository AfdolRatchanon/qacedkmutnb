/* eslint-disable no-useless-escape */
// rafce
// Import
import React, { useState } from "react";
//fucntions
import { register } from "../../functions/auth";

import { Link } from "react-router-dom";

const Register = () => {
   const [value, setValue] = useState({
      mem_user: "",
      mem_pwd: "",
      con_mem_pwd: "",
      mem_name: "",
      mem_mail: null,
      mem_tal: null,
   });

   //เก็บข้อมูลจาก TextBox ลงตัวแปรต่าง ๆ
   const handleChang = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
   };
   // console.log(value);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit", value);
      if (value.mem_pwd !== value.con_mem_pwd) {
         alert("password not match");
      } else {
         register(value)
            .then((res) => {
               console.log(res.data);
               alert(res.data);
            })
            .catch((err) => {
               console.log(err.response.data);
               alert(err.response.data);
            });
      }
   };

   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>สมัครสมาชิก</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item font-weight-bold">สมัครสมาชิก</li>
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
                           <form onSubmit={handleSubmit}>
                              <div className="form-group row">
                                 <div class="col-sm-2"></div>
                                 <label className="col-sm-2 col-form-label">ชื่อ - นามสกุล</label>
                                 <input
                                    type="text"
                                    className="form-control col-sm-5"
                                    name="mem_name"
                                    placeholder="Input Your Name 1 characters or more"
                                    pattern="^\w(\w|\s){0,30}"
                                    title="Please input range 1 - 30 alphabet"
                                    onChange={handleChang}
                                 />
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">อีเมล</label>
                                 <input
                                    type="email"
                                    className="form-control col-sm-5"
                                    name="mem_mail"
                                    placeholder="example@example.com"
                                    pattern="^(?=\b[a-zA-Z0-9._-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9]{2,}\b).*$"
                                    title="Please input correct format Email"
                                    onChange={handleChang}
                                 />
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">เบอร์โทรศัพท์</label>
                                 <input
                                    type="tel"
                                    className="form-control col-sm-5"
                                    name="mem_tal"
                                    placeholder="0XXXXXXXXX"
                                    title="format 0xxxxxxxxx"
                                    pattern="^0\d{9}$"
                                    onChange={handleChang}
                                 />
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">ชื่อผู้ใช้</label>
                                 <input
                                    type="text"
                                    className="form-control col-sm-5"
                                    name="mem_user"
                                    placeholder="Input Username 4 characters or more"
                                    pattern="\w{4,30}"
                                    title="Please input range 4 - 30 alphabet"
                                    onChange={handleChang}
                                 />
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">รหัสผ่าน</label>
                                 <input
                                    type="password"
                                    className="form-control col-sm-5"
                                    name="mem_pwd"
                                    placeholder="Input Password 6 characters or more"
                                    pattern="\w{6,30}"
                                    title="Please input range 6 - 30 alphabet"
                                    onChange={handleChang}
                                 />
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">ยืนยันรหัสผ่าน</label>
                                 <input
                                    type="password"
                                    className="form-control col-sm-5"
                                    name="con_mem_pwd"
                                    placeholder="Input like a Password"
                                    onChange={handleChang}
                                 />
                              </div>
                              <div className="form-group" align="center">
                                 {" "}
                                 <button type="reset" className="btn btn-danger">
                                    ยกเลิก
                                 </button>
                                 <button className="btn btn-success">ยืนยัน</button>{" "}
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

export default Register;