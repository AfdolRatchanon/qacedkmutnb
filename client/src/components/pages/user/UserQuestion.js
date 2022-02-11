import React from "react";
import { Link } from "react-router-dom";

const UserQuestion = () => {
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
                           <h3 className="card-title">คำถามของฉัน</h3>
                        </div>
                        <div className="card-body">
                           <h1>คำถามของฉัน</h1>
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

export default UserQuestion;
