import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// BootStrap
import { Modal, Button, Form } from "react-bootstrap";
// import { Modal, Button } from "antd";

// import { Modal } from "antd";

// BootStrap Table
// import BootStrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// import TableHeaderColumn from "react-bootstrap-table-next";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

//Query
import { listQuestion } from "../../functions/user";
import { loadQuestionType } from "../../functions/query";

const UserQuestion = () => {
   const [data, setData] = useState([]);
   const [questionType, setQuestionType] = useState([]);
   const [tableIndex, setTableIndex] = useState(0);
   const [dataUpdate, setDataUpdate] = useState([]);
   const [value, setValue] = useState({
      type_id: 0,
      qst_title: "",
      qst_detail: "",
      qst_name: "",
      qst_mail: "",
   });

   const { user } = useSelector((state) => ({ ...state }));

   const loadData = () => {
      loadQuestionType(user.token, value)
         .then((res) => {
            console.log(res.data);
            setQuestionType(res.data);
         })
         .catch((err) => {
            console.log(err.response);
         });
      listQuestion(user.token)
         .then((res) => {
            console.log(res.data);
            setData(res.data);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);
            console.log(err.response.date);
         });
   };

   useEffect(() => {
      loadData();
   }, []);

   const handleChang = (e) => {
      setValue({ qst_title: document.getElementById("qst_title") });
   };

   // console.log(value);

   const handleSubmit = (e) => {
      e.preventDefault();
      setValue({ ...value, [e.target.name]: e.target.value });
      console.log("submit Add Question", value);
      // addQuestion(user.token, value)
      //    .then((res) => {
      //       console.log(res.data);
      //       alert(res.data);
      //       // navigate("/user-question");
      //    })
      //    .catch((err) => {
      //       console.log(err.response.data);
      //       alert(err.response.data);
      //    });
   };

   const handCancel = (e) => {
      setValue({ type_id: 0, qst_title: "", qst_detail: "", qst_name: "", qst_mail: "", mem_id: "" });
   };

   const indexN = (cell, row, enumObject, index) => {
      return <div>{index + 1}</div>;
   };

   const manageButoon = (cell, row) => {
      if (row.qst_id) {
         return (
            <div className="position-sticky">
               <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                     setModalViewValue(row);
                     console.log("รายละเอียด", modalViewValue);
                     toggleMVTrueFalse();
                  }}
               >
                  รายละเอียด
               </button>
               <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                     setModalEditValue(row);
                     console.log("แก้ไข", modalEditValue);
                     toggleMETrueFalse();
                  }}
               >
                  แก้ไข
               </button>
               <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                     setModalConfirmDeleteValue(row.qst_id);
                     console.log("ลบ", modalConfirmDeleteValue);
                     toggleMCDTrueFalse();
                  }}
               >
                  ลบ
               </button>
            </div>
         );
      }
   };

   //Modal Bootstrap
   const [modalConfirmDeleteValue, setModalConfirmDeleteValue] = useState([]);
   const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false);
   const [showMCD, setShowMCD] = useState(false);
   const handleMCDClose = () => setShowMCD(false);
   const handleMCDShow = () => setShowMCD(true);

   const handleOK_ModalConfirmDelete = () => {
      console.log("OK", modalConfirmDeleteValue);
      setShowMCD(false);
   };

   const toggleMCDTrueFalse = () => {
      setShowModalConfirmDelete(handleMCDShow);
   };

   const ModalConfirmDelete = () => {
      return (
         <Modal show={showMCD} onHide={handleMCDClose} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header>
               <Modal.Title>แจ้งเตือน</Modal.Title>
            </Modal.Header>
            <Modal.Body>คุณต้องการลบคำถามของคุณใช่หรือไม่ !!!</Modal.Body>
            <Modal.Footer>
               {/* onClick={props.onHide} */}
               <Button variant="primary" onClick={handleMCDClose}>
                  ปิด
               </Button>
               {/*  onClick={props.onOK} */}
               <Button variant="danger" onClick={handleOK_ModalConfirmDelete}>
                  ใช่
               </Button>
            </Modal.Footer>
         </Modal>
      );
   };

   /*****************************************************************************/

   const [modalViewValue, setModalViewValue] = useState([]);
   const [showModalView, setShowModalView] = useState(false);
   const [showMV, setShowMV] = useState(false);
   const handleMVClose = () => setShowMV(false);
   const handleMVShow = () => setShowMV(true);

   const handleOK_ModalView = () => {
      console.log("OK", modalViewValue);
      handleSubmit();
      setShowMV(false);
   };

   const toggleMVTrueFalse = () => {
      setShowModalView(handleMVShow);
   };

   const ModalView = (val) => {
      return (
         <Modal show={showMV} onHide={handleMVClose} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header>
               <Modal.Title>รายละเอียด</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <table className="table table-borderless">
                  {/* <thead>
                     <tr>
                        <th scope="col">หัวข้อ</th>
                        <th scope="col">ข้อมูล</th>
                     </tr>
                  </thead> */}
                  <tbody>
                     <tr>
                        <th width="125">หมวดคำถาม</th>
                        <td>{modalViewValue.type_name}</td>
                     </tr>
                     <tr>
                        <th>หัวข้อคำถาม</th>
                        <td>{modalViewValue.qst_title}</td>
                     </tr>
                     <tr>
                        <th>รายละเอียด</th>
                        <td>{modalViewValue.qst_detail}</td>
                     </tr>
                     <tr>
                        <th>ผู้ตั้งคำถาม</th>
                        <td>{modalViewValue.qst_name}</td>
                     </tr>
                     <tr>
                        <th>อีเมล</th>
                        <td>{modalViewValue.qst_mail}</td>
                     </tr>
                     <tr>
                        <th>คำตอบกลับ</th>
                        <td>กำลังดำเนินการสร้าง</td>
                     </tr>
                  </tbody>
               </table>
            </Modal.Body>
            <Modal.Footer>
               {/* onClick={props.onHide} */}
               <Button variant="primary" onClick={handleMVClose}>
                  ปิด
               </Button>
               {/*  onClick={props.onOK} */}
               {/* <Button variant="danger" onClick={handleOK_ModalConfirmDelete}>
                  ใช่
               </Button> */}
            </Modal.Footer>
         </Modal>
      );
   };

   /*****************************************************************************/

   const [modalEditValue, setModalEditValue] = useState([]);
   const [showModalEdit, setShowModalEdit] = useState(false);
   const [showME, setShowME] = useState(false);
   const handleMEClose = () => setShowME(false);
   const handleMEShow = () => setShowME(true);

   const handleOK_ModalEdit = () => {
      console.log("OK ME : ", modalEditValue);
      setShowME(false);
   };

   const toggleMETrueFalse = () => {
      setShowModalEdit(handleMEShow);
   };

   const ModalEdit = (val) => {
      return (
         <Modal show={showME} onHide={handleMEClose} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header>
               <Modal.Title>แก้ไขคำถาม</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form onSubmit={handleSubmit} className="col-12 container-fluid ">
                  <div className="form-group row">
                     <label className="col-sm-4 col-form-label">หมวดคำถาม</label>
                     <select name="type_id" className="form-control col-sm-8" onChange={handleChang}>
                        <option value={0}>กรุณาเลือก</option>
                        {questionType.map((questionType) => (
                           <option key={questionType.type_id} value={questionType.type_id}>
                              {questionType.type_name}
                           </option>
                        ))}
                     </select>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-4">หัวข้อคำถาม</label>
                     <input
                        type="text"
                        className="form-control col-sm-8"
                        name="qst_title"
                        placeholder="กรอกหัวข้อคำถาม"
                        onChange={handleChang}
                     />
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-4">รายละเอียด</label>
                     <textarea className="form-control col-sm-8" name="qst_detail" rows="3" onChange={handleChang}></textarea>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-4">ผู้ตั้งคำถาม</label>
                     <input
                        type="text"
                        className="form-control col-sm-8"
                        name="qst_name"
                        placeholder="Input Username 4 characters or more"
                        onChange={handleChang}
                     />
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-4">อีเมล</label>
                     <input
                        type="email"
                        className="form-control col-sm-8"
                        name="qst_mail"
                        placeholder="example@example.com"
                        pattern="^(?=\b[a-zA-Z0-9._-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9]{2,}\b).*$"
                        title="Please input correct format Email"
                        onChange={handleChang}
                     />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="primary" onClick={handleMEClose}>
                  ยกเลิก
               </Button>
               <Button variant="danger" onClick={handleOK_ModalEdit}>
                  ยืนยัน
               </Button>
            </Modal.Footer>
         </Modal>
      );
   };

   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-3">
                     <h1>คำถามของฉัน</h1>
                  </div>
                  <div className="col-sm-3">
                     <Link className="btn btn-success btn-sm " to="/user-add-question">
                        เพิ่มคำถาม
                     </Link>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item font-weight-bold">คำถามของฉัน</li>
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
                        <div className="card-header">
                           <h3 className="card-title">ข้อมูลคำถาม - ..................</h3>
                        </div>
                        <div className="card-body">
                           <h1>คำถามของฉัน</h1>

                           <BootstrapTable data={data} hover pagination search>
                              <TableHeaderColumn
                                 dataSort
                                 width="150"
                                 isKey
                                 dataAlign="center"
                                 dataField="any"
                                 dataFormat={indexN}
                              >
                                 ลำดับ
                              </TableHeaderColumn>
                              <TableHeaderColumn dataSort width="150" dataAlign="center" dataField="qst_id">
                                 ID
                              </TableHeaderColumn>
                              <TableHeaderColumn dataSort width="150" headerAlign="center" dataField="qst_title">
                                 หัวข้อคำถาม
                              </TableHeaderColumn>
                              <TableHeaderColumn dataSort width="150" dataAlign="center" dataField="sta_name">
                                 สถานะ
                              </TableHeaderColumn>
                              <TableHeaderColumn
                                 dataSort
                                 width="250"
                                 dataAlign="center"
                                 dataFormat={manageButoon}
                                 dataField="any"
                              >
                                 จัดการ
                              </TableHeaderColumn>

                              {/* <TableHeaderColumn dataField="any" dataFormat={manageButoon}>
                                 การดำเนินการ
                              </TableHeaderColumn> */}
                           </BootstrapTable>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer"></div>
                        {/* /.card-footer*/}
                     </div>
                     {/* /.card */}
                  </div>
               </div>
            </div>
         </section>
         {/* /.content */}
         {/* /modal */}
         {/* <ConfirmDelete /> */}
         {showMCD ? <ModalConfirmDelete /> : null}
         {showMV ? <ModalView /> : null}
         {showME ? <ModalEdit /> : null}
      </div>
   );
};

export default UserQuestion;
