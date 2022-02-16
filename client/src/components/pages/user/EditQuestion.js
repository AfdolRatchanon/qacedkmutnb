import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//fucntions
import { readQuestion } from "../../functions/user";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Query
import { loadQuestionType } from "../../functions/query";
import { updateQuestion } from "../../functions/user";

const EditQuestion = () => {
   // const { qst_id } = useParams();
   const question_id = localStorage.question_id;
   const [editValue, setEditValue] = useState([]);
   const [questionType, setQuestionType] = useState([]);
   const [value, setValue] = useState({
      type_id: 0,
      qst_title: "",
      qst_detail: "",
      qst_name: "",
      qst_mail: "",
   });

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => ({ ...state }));

   const loadDataTypeQ = async () => {
      loadQuestionType(user.token)
         .then((res) => {
            console.log("EditQ Type :", res.data);
            setQuestionType(res.data);
         })
         .catch((err) => {
            console.log(err.response);
         });
   };

   const loadDataQuestion = async () => {
      readQuestion(user.token, { qst_id: question_id })
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
         navigate("/user-question");
      } else {
         loadDataTypeQ();
         loadDataQuestion();
         console.log("editValue : ", question_id);
      }
   }, []);

   //เก็บข้อมูลจาก TextBox ลงตัวแปรต่าง ๆ
   const handleChang = (e) => {
      setValue({ ...editValue[0], [e.target.name]: e.target.value });
   };

   // console.log(value);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (value.type_id === 0) {
         alert("คุณยังไม่ได้แก้ไขข้อมูล");
      } else {
         console.log("submit Edit Question", value);
      }

      updateQuestion(user.token, value)
         .then((res) => {
            console.log(res.data);
            alert(res.data);
            navigate("/user-question");
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
                     <h1>แก้ไขคำถาม</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item float-sm-right">
                           <Link
                              to="/user-question"
                              onClick={() => {
                                 localStorage.setItem("question_id", null);
                                 dispatch({
                                    type: "REMOVEQUESTION",
                                 });
                              }}
                           >
                              คำถามของฉัน
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
                                    <label className="col-sm-2 col-form-label">หมวดคำถาม</label>
                                    <select
                                       name="type_id"
                                       className="form-control col-sm-6"
                                       onChange={handleChang}
                                       defaultValue={value.type_id}
                                    >
                                       <option value={0}>กรุณาเลือก</option>
                                       {questionType.map((questionType) => (
                                          <option key={questionType.type_id} value={questionType.type_id}>
                                             {questionType.type_name}
                                          </option>
                                       ))}
                                    </select>
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
                                       placeholder="กรอกหัวข้อคำถาม"
                                       onChange={handleChang}
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
                                       onChange={handleChang}
                                    ></textarea>
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
                                       placeholder="Input Username 4 characters or more"
                                       onChange={handleChang}
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
                                       placeholder="example@example.com"
                                       pattern="^(?=\b[a-zA-Z0-9._-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9]{2,}\b).*$"
                                       title="Please input correct format Email"
                                       onChange={handleChang}
                                    />
                                    <div className="col-sm-2"></div>
                                 </div>
                                 <div className="form-group" align="center">
                                    <button className="btn btn-success">ยืนยัน</button>
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

export default EditQuestion;