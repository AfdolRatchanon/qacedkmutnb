import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//function
import { adminListUser, adminEnableAndDisenableMember } from "../../functions/admin";

//BootStrap Table
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

//Toastify
import { toast } from "react-toastify";

const AdminManageUser = () => {
   const [data, setData] = useState([]);
   const { user } = useSelector((state) => ({ ...state }));
   const [dataEnableAndDisable, setDataEnableAndDisable] = useState({
      sta_id: null,
   });

   const loadData = () => {
      adminListUser(user.token)
         .then((res) => {
            // console.log(res);
            setData(res.data);
         })
         .catch((err) => {
            console.log(err.response.data);
         });
   };

   useEffect(() => {
      loadData();
   }, [dataEnableAndDisable]);
   // dataEnableAndDisable

   //BootStrap Table

   const manageButoon = (cell, row) => {
      if (row.mem_id) {
         if (row.lv_id == 1) {
            return <></>;
         } else {
            return (
               <>
                  <div className="dropdown position-static">
                     <button
                        className="btn btn-primary dropdown-toggle "
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                     >
                        จัดการข้อมูล
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <p
                           className="dropdown-item"
                           onClick={() => {
                              handleEnable(user.token, row.mem_id);
                           }}
                        >
                           อนุญาติ
                        </p>
                        <p
                           className="dropdown-item"
                           onClick={() => {
                              handleDisable(user.token, row.mem_id);
                           }}
                        >
                           ไม่อนุญาติ
                        </p>
                     </div>
                  </div>
               </>
            );
         }
      }
   };

   const handleEnable = (token, id) => {
      setDataEnableAndDisable({ sta_id: 1 });
      adminEnableAndDisenableMember(token, { mem_id: id, sta_id: 1 })
         .then((res) => {
            toast.success(res.data);
         })
         .catch((err) => {
            console.log(err.response.data);
         });
   };

   const handleDisable = (token, id) => {
      setDataEnableAndDisable({ sta_id: 2 });
      adminEnableAndDisenableMember(token, { mem_id: id, sta_id: 2 })
         .then((res) => {
            toast.success(res.data);
         })
         .catch((err) => {
            console.log(err.response.data);
         });
   };

   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-3">
                     <h1>ข้อมูลสมาชิก</h1>
                  </div>
                  <div className="col-sm-3">
                     <Link className="btn btn-success btn-sm " to="/admin-add-member">
                        เพิ่มข้อมูลสมาชิก
                     </Link>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item font-weight-bold">ข้อมูลสมาชิก</li>
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
                           <h3 className="card-title">ข้อมูลสมาชิก</h3>
                           <div className="card-tools">
                              {/* <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                 <i className="fas fa-minus" />
                              </button> */}
                              {/* <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                 <i className="fas fa-times" />
                              </button> */}
                           </div>
                        </div>
                        <div className="card-body">
                           <h1>ข้อมูลสมาชิก</h1>
                           {/* <table className="table table-hover table-bordered">
                              <thead className="thead-dark">
                                 <tr>
                                    <th scope="col">ลำดับ</th>
                                    <th scope="col">ชื่อ - สกุล</th>
                                    <th scope="col">สถานะ</th>
                                    <th scope="col">ระดับการเข้าถึงข้อมูล</th>
                                    <th scope="col">การดำเนินการ</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.map((val, key) => (
                                    <tr>
                                       <th scope="row">{key + 1}</th>
                                       <td>{val.mem_name}</td>
                                       <td>{val.sta_name}</td>
                                       <td>{val.lv_name}</td>
                                       <td>
                                          <div className="dropdown">
                                             <button
                                                className="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                             >
                                                จัดการข้อมูล
                                             </button>
                                             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item">Action</a>
                                                <a className="dropdown-item">Another action</a>
                                                <a className="dropdown-item">Something else here</a>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table> */}
                           <BootstrapTable data={data} bordered={false} hover pagination search>
                              {/*  bordered={false} */}
                              <TableHeaderColumn dataSort isKey width="150" dataAlign="center" dataField="num_row">
                                 ลำดับ
                              </TableHeaderColumn>
                              {/* <TableHeaderColumn dataSort width="50" dataAlign="center" dataField="mem_id">
                                 ID
                              </TableHeaderColumn> */}
                              <TableHeaderColumn dataSort width="150" headerAlign="center" dataField="mem_name">
                                 ชื่อ - สกุล
                              </TableHeaderColumn>
                              <TableHeaderColumn dataSort width="150" dataAlign="center" dataField="sta_name">
                                 สถานะ
                              </TableHeaderColumn>
                              <TableHeaderColumn dataSort width="150" dataAlign="center" dataField="lv_name">
                                 ระดับการเข้าถึง
                              </TableHeaderColumn>
                              <TableHeaderColumn width="150" dataAlign="center" dataField="any" dataFormat={manageButoon}>
                                 การดำเนินการ
                              </TableHeaderColumn>
                           </BootstrapTable>
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

export default AdminManageUser;
