import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//fucntions
import { readQuestion } from "../../functions/user";
import { officerReadQuestion, replyQuestion } from "../../functions/officer";

//Redux
import { useSelector } from "react-redux";

//Query
// import { updateQuestion } from "../../functions/user";

//Toastify
import { toast } from "react-toastify";

const OfficerAnswerQuestion = () => {
   // const { qst_id } = useParams();
   const navigate = useNavigate();
   const { user } = useSelector((state) => ({ ...state }));
   const question_id = localStorage.question_id;
   const [editValue, setEditValue] = useState([]);
   const [value, setValue] = useState({
      reply_detail: "",
      qst_id: question_id,
      mem_id: user.mem_id,
   });

   const loadDataQuestion = async () => {
      officerReadQuestion(user.token, { qst_id: question_id })
         .then((res) => {
            console.log(res.data);
            setEditValue(res.data);
         })
         .catch((err) => {
            console.log(err.response);
         });
   };

   useEffect(() => {
      if (question_id == null) {
         navigate("/officer-read-question-type");
      } else {
         loadDataQuestion();
         console.log("editValue : ", question_id);
      }
   }, []);

   //เก็บข้อมูลจาก TextBox ลงตัวแปรต่าง ๆ
   const handleChang = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
   };

   // console.log(value);
   const handCancel = (e) => {
      setValue({ ...value, reply_detail: "" });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (value.type_id === 0) {
         toast.warning("คุณยังไม่ได้แก้ไขข้อมูล");
      } else {
         console.log("submit Edit Question", value);
         replyQuestion(user.token, value)
            .then((res) => {
               console.log(res.data);
               toast.success(res.data);
               navigate("/officer-read-question-type");
            })
            .catch((err) => {
               console.log(err.response.data);
               toast.warning(err.response.data);
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
                     <h1>แก้ไขคำถาม</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item float-sm-right">
                           <Link
                              to="/officer-question-type"
                              onClick={() => {
                                 localStorage.setItem("question_id", null);
                              }}
                           >
                              หมวดคำถาม
                           </Link>
                        </li>
                        <li className="breadcrumb-item float-sm-right">
                           <Link
                              to="/officer-read-question-type"
                              onClick={() => {
                                 localStorage.setItem("question_id", null);
                              }}
                           >
                              ตอบคำถามตามหมวดคำถาม
                           </Link>
                        </li>
                        <li className="breadcrumb-item font-weight-bold">แก้ไขคำถาม</li>
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
                           {editValue.map((value, key) => (
                              <form key={key} onSubmit={handleSubmit}>
                                 <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-2">หมวดคำถาม</label>
                                    <input
                                       type="text"
                                       className="form-control col-sm-6"
                                       name="qst_title"
                                       defaultValue={value.type_name}
                                       readOnly
                                    />
                                    <div className="col-sm-2"></div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-2">หัวข้อคำถาม</label>
                                    <input
                                       type="text"
                                       className="form-control col-sm-6"
                                       name="qst_title"
                                       defaultValue={value.qst_title}
                                       readOnly
                                    />
                                    <div className="col-sm-2"></div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-2">รายละเอียด</label>
                                    <textarea
                                       className="form-control col-sm-6"
                                       name="qst_detail"
                                       defaultValue={value.qst_detail}
                                       rows="3"
                                       readOnly
                                    ></textarea>
                                    <div className="col-sm-2"></div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-2">วันที่ตั้งคำถาม</label>
                                    <input
                                       className="form-control col-sm-6"
                                       name="qst_detail"
                                       defaultValue={value.date_q}
                                       rows="3"
                                       readOnly
                                    />
                                    <div className="col-sm-2"></div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-2">ผู้ตั้งคำถาม</label>
                                    <input
                                       type="text"
                                       className="form-control col-sm-6"
                                       name="qst_name"
                                       defaultValue={value.qst_name}
                                       readOnly
                                    />
                                    <div className="col-sm-2"></div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-2">อีเมล</label>
                                    <input
                                       type="email"
                                       className="form-control col-sm-6"
                                       name="qst_mail"
                                       defaultValue={value.qst_mail}
                                       readOnly
                                    />
                                    <div className="col-sm-2"></div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <label className="col-sm-2">ตอบ</label>
                                    <textarea
                                       className="form-control col-sm-6"
                                       name="reply_detail"
                                       rows="3"
                                       onChange={handleChang}
                                       defaultValue={value.reply_detail}
                                    ></textarea>
                                    <div className="col-sm-2"></div>
                                 </div>

                                 <div className="form-group" align="center">
                                    {/* onClick={handCancel} */}
                                    {/* {value.sta_id == 3 && (
                                       <> */}
                                    <button
                                       style={{ width: "110px", margin: " 0px 5px 0px 5px" }}
                                       type="reset"
                                       className="btn btn-danger"
                                       onClick={handCancel}
                                    >
                                       ยกเลิก
                                    </button>
                                    <button style={{ width: "110px", margin: " 0px 5px 0px 5px" }} className="btn btn-success">
                                       ยืนยัน
                                    </button>
                                    {/* </>
                                    )} */}
                                 </div>
                              </form>
                           ))}
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

export default OfficerAnswerQuestion;