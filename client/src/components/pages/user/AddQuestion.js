import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//fucntions
import { register } from "../../functions/auth";
import { useSelector } from "react-redux";
import { loadQuestionType } from "../../functions/query";

const AddQuestion = () => {
   const [questionType, setQuestionType] = useState([]);
   const [value, setValue] = useState({
      type_id: {},
      qst_title: "",
      qst_detail: "",
      qst_name: "",
      qst_mail: "",
   });
   const navigate = useNavigate();
   const { user } = useSelector((state) => ({ ...state }));

   const loadDataTypeQ = () => {
      loadQuestionType(user.token)
         .then((res) => {
            console.log(res.data);
            // setQuestionType(res.data);
         })
         .catch((err) => {
            console.log(err.response);
         });
   };
   useEffect(() => {
      loadDataTypeQ();
   }, []);

   //เก็บข้อมูลจาก TextBox ลงตัวแปรต่าง ๆ
   const handleChang = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
   };

   // console.log(value);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit Add Question", value);

      //   if (value.mem_pwd !== value.con_mem_pwd) {
      //      alert("password not match");
      //   } else {
      //      register(value)
      //         .then((res) => {
      //            console.log(res.data);
      //            alert(res.data);
      //            navigate("/login");
      //         })
      //         .catch((err) => {
      //            console.log(err.response.data);
      //            alert(err.response.data);
      //         });
      //   }
   };
   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>เพิ่มคำถาม</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item float-sm-right">
                           <Link to="/user-question">คำถามของฉัน</Link>
                        </li>
                        <li className="breadcrumb-item font-weight-bold">เพิ่มคำถาม</li>
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
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2 col-form-label">หมวดคำถาม</label>
                                 <select name="type_id" className="form-control col-sm-5" onChange={handleChang}>
                                    <option value={0}>กรุณาเลือก</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                 </select>
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">หัวข้อคำถาม</label>
                                 <input
                                    type="text"
                                    className="form-control col-sm-5"
                                    name="qst_title"
                                    placeholder="Input Username 4 characters or more"
                                    pattern="\w{4,30}"
                                    title="Please input range 4 - 30 alphabet"
                                    onChange={handleChang}
                                 />
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">รายละเอียด</label>
                                 <textarea
                                    className="form-control col-sm-5"
                                    name="qst_detail"
                                    rows="3"
                                    onChange={handleChang}
                                 ></textarea>
                                 {/* <input
                                    type="tel"
                                    className="form-control col-sm-5"
                                    name="qst_detail"
                                    placeholder="0XXXXXXXXX"
                                    title="format 0xxxxxxxxx"
                                    pattern="^0\d{9}$"
                                    onChange={handleChang}
                                 /> */}
                              </div>
                              <div className="form-group row">
                                 <div className="col-sm-2"></div>
                                 <label className="col-sm-2">ผู้ตั้งคำถาม</label>
                                 <input
                                    type="text"
                                    className="form-control col-sm-5"
                                    name="qst_name"
                                    placeholder="Input Username 4 characters or more"
                                    pattern="\w{4,30}"
                                    title="Please input range 4 - 30 alphabet"
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
                              <div className="form-group" align="center">
                                 <button type="reset" className="btn btn-danger">
                                    ยกเลิก
                                 </button>
                                 <button className="btn btn-success">ยืนยัน</button>
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

export default AddQuestion;
