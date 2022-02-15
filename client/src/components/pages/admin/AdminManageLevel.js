import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// BootStrap
import { Modal, Button } from "react-bootstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { loadQuestionLevel } from "../../functions/query";

const AdminManageLevel = () => {
   const [data, setData] = useState([]);
   //    const [tableIndex, setTableIndex] = useState(0);

   const { user } = useSelector((state) => ({ ...state }));

   const loadData = () => {
      loadQuestionLevel(user.token)
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

   const indexN = (cell, row, enumObject, index) => {
      return <div>{index + 1}</div>;
   };

   const manageButoon = (cell, row) => {
      if (row.lv_id) {
         return (
            <div className="position-sticky">
               <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                     alert("กำลังดำเนินการสร้าง");
                  }}
               >
                  แก้ไข
               </button>
               <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                     setModalConfirmDeleteValue(row.lv_id);
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
               <table className="table borderless">
                  {/* <thead>
                     <tr>
                        <th scope="col">หัวข้อ</th>
                        <th scope="col">ข้อมูล</th>
                     </tr>
                  </thead> */}
                  {/* <tbody> */}
                  <tr>
                     <th width="115">หมวดคำถาม</th>
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

                  {/* </tbody> */}
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
                              <TableHeaderColumn dataSort width="150" dataField="lv_id">
                                 ID
                              </TableHeaderColumn>
                              <TableHeaderColumn dataSort width="150" headerAlign="center" dataField="lv_name">
                                 ชื่อระดับการเข้าถึง
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
      </div>
   );
};

export default AdminManageLevel;
