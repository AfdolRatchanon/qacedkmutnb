import React, { useState, useEffect } from "react";
// Redux
import { useSelector } from "react-redux";

// Query
import { officerCountReply } from "../../functions/officer";

// import chart
import ChartDoughnutComponent from "./Chart/ChartDoughnutComponent";
import ChartBarComponent from "./Chart/ChartBarComponent";

const Home = () => {
   const { user } = useSelector((state) => ({ ...state }));
   const [countQst, setCountQst] = useState({});

   const [bgSmallBox, setBgSmallBox] = useState({
      0: "rgba(0, 255, 64, 0.5)",
      1: "rgba(53, 162, 235, 0.5)",
      2: "rgba(255, 99, 132, 0.5)",
      3: "rgba(255, 240, 0, 0.5)",
   });

   const Small_Boxes = (props) => {
      const { type_id, count, name, p_key } = props;

      return (
         <div className="col-lg-6 col-6">
            <div className={"small-box "} style={{ backgroundColor: bgSmallBox[p_key] }}>
               <div className="inner">
                  <div className="row">
                     <h1 style={{ margin: " auto 5px auto 5px" }}>{count}</h1>
                     {/* <h4 style={{ margin: " auto 5px auto 5px" }}> คำถาม</h4> */}
                  </div>

                  <h6 style={{ height: "45px" }}>{name}</h6>
               </div>
               {/* <div className="icon">
                  <i className="ion ion-pie-graph" />
               </div> */}
               {/* <div
                  className="small-box-footer"
                  onClick={() => {
                     console.log("type_id : ", type_id);
                     localStorage.setItem("officer_type_id", type_id);
                  }}
               >
                  ดูข้อมูล <i className="fas fa-arrow-circle-right" />
               </div> */}
            </div>
         </div>
      );
   };

   const loadDataCount = () => {
      officerCountReply(user.token, { mem_id: user.mem_id })
         .then((res) => {
            console.log(res.data[0]);
            setCountQst(res.data[0]);
         })
         .catch((err) => {
            console.log(err.response.data);
         });
   };

   useEffect(() => {
      loadDataCount();
   }, []);

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
                        <li className="breadcrumb-item font-weight-bold">หน้าแรก</li>
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
                              
                           </div>
                        </div> */}
                        <div className="card-body">
                           <h1>สถิติการตอบคำถาม</h1>
                           <section className="content">
                              <div className="container-fluid">
                                 <div className="row">
                                    <div className="col-md-6">
                                       <div className="card card-warning">
                                          <div className="card-header">
                                             <h3 className="card-title"></h3>
                                             <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                   <i className="fas fa-minus" />
                                                </button>
                                             </div>
                                          </div>
                                          <div className="card-body">
                                             <div className="chart">
                                                {/* <Doughnut data={chartDoughnutData} /> */}
                                                {/* <Doughnut data={data} /> */}
                                                <div className="row">
                                                   {/* BOX BOX BOX */}
                                                   <Small_Boxes name={"คำถามทั้งหมด"} count={countQst.allQst} p_key={0} />
                                                   <Small_Boxes
                                                      name={"คำถามทั้งหมดที่ตอบแล้ว"}
                                                      count={countQst.successQst}
                                                      p_key={1}
                                                   />
                                                   <Small_Boxes
                                                      name={"คำถามทั้งหมดที่ยังไม่ได้ตอบ"}
                                                      count={countQst.waitReply}
                                                      p_key={2}
                                                   />
                                                   <Small_Boxes
                                                      name={"คำถามที่เจ้าหน้าที่ตอบ"}
                                                      count={countQst.ownReply}
                                                      p_key={3}
                                                   />
                                                   {/* BOX BOX BOX */}
                                                </div>
                                             </div>
                                          </div>
                                          {/* /.card-body */}
                                       </div>
                                       <div className="card card-primary">
                                          <div className="card-header">
                                             <h3 className="card-title">Bar Chart</h3>
                                             <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                   <i className="fas fa-minus" />
                                                </button>
                                             </div>
                                          </div>
                                          <div className="card-body">
                                             <div className="chart">
                                                <ChartBarComponent />
                                             </div>
                                          </div>
                                       </div>

                                       {/* /.card */}
                                       {/* DONUT CHART */}

                                       {/* /.card */}
                                    </div>
                                    {/* /.col (LEFT) */}
                                    <div className="col-md-6">
                                       {/* BAR CHART */}
                                       <div className="card card-success">
                                          <div className="card-header">
                                             <h3 className="card-title">Donut Chart</h3>
                                             <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                   <i className="fas fa-minus" />
                                                </button>
                                             </div>
                                          </div>
                                          <div className="card-body">
                                             <div className="chart">
                                                <ChartDoughnutComponent />
                                             </div>
                                          </div>
                                          {/* /.card-body */}
                                       </div>
                                       {/* /.card */}
                                    </div>
                                    {/* /.col (RIGHT) */}
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

export default Home;
