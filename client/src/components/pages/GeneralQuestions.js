import React, { useState, useEffect } from "react";
import { loadAllQuestion } from "../functions/query";
const GeneralQuestions = () => {
   const [data, setData] = useState([{ 0: { num_row: 1 } }]);
   const [limit, setLimit] = useState(6);
   const loadData = () => {
      loadAllQuestion({ limit: limit })
         .then((res) => {
            // console.log(res.data);
            setData(res.data);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);
            // console.log(err.response.date);
         });
   };
   useEffect(() => {
      loadData();
   }, [limit]);
   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>หน้าแรก</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item font-weight-bold">
                           หน้าแรก
                        </li>
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
                        {/* <div className="card-body">
                     <h1>Home Page</h1>
                  </div> */}
                        <div className="card-body">
                           <h1 className="col-12">คำถามทั่วไป</h1>
                           <section className="content">
                              <div className="container-fluid">
                                 <div className="row">
                                    {data &&
                                       data.map((value, key) => (
                                          <div
                                             key={key}
                                             className="post col-10 col-md-10 col-lg-10 col-xl-5 mx-5"
                                          >
                                             <hr />
                                             {value.mem_img != null ? (
                                                <div className="user-block">
                                                   
                                                   <img
                                                      className="img-circle img-bordered-sm"
                                                      src={
                                                         process.env
                                                            .REACT_APP_API_MEM_IMG +
                                                         "/" +
                                                         value.mem_img
                                                      }
                                                      // alt="user image"
                                                   />
                                                   <span className="username">
                                                      <h5 className="text-primary">
                                                         {/* {value.mem_name} */}
                                                      </h5>
                                                   </span>
                                                   <span className="description">
                                                      {value.date}
                                                   </span>
                                                </div>
                                             ) : (
                                                <div className="user-block">
                                                   <img
                                                      className="img-circle img-bordered-sm"
                                                      src={
                                                         "../../dist/img/avatar6.jpg"
                                                      }
                                                      // alt="user image"
                                                   />
                                                   <span className="username">
                                                      <h5 className="text-primary">
                                                         {/* {value.mem_name} */}
                                                      </h5>
                                                   </span>
                                                   <span className="description">
                                                      {value.date}
                                                   </span>
                                                </div>
                                             )}

                                             {/* /.user-block */}
                                             <h4>{value.qst_title}</h4>
                                             <p>{value.qst_detail}</p>
                                             {value.sta_id == 3 ? (
                                                <p className="text-warning">
                                                   กำลังดำเนินการ
                                                </p>
                                             ) : (
                                                <p className="text-success">
                                                   ตอบแล้ว
                                                </p>
                                             )}
                                          </div>
                                       ))}
                                    <div className="user-block"></div>
                                    {limit < data[0].num_row ? (
                                       <div className="col-12">
                                          <div
                                             className="btn btn-primary m-2 col-12"
                                             onClick={() => {
                                                setLimit(limit + 6);
                                             }}
                                          >
                                             + โหลดคำถามเพิ่ม
                                          </div>
                                       </div>
                                    ) : (
                                       <></>
                                    )}
                                 </div>
                                 {/* /.row */}
                              </div>
                              {/* /.container-fluid */}
                           </section>
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

export default GeneralQuestions;
