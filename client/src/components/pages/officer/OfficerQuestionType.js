import React, { useState, useEffect } from "react";

// Routert
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

//function
import { countQuestionType } from "../../functions/query";

const OfficerQuestionType = () => {
   const [dataQuestionType, setDataQuestionType] = useState([]);
   const [bgSmallBox, setBgSmallBox] = useState({
      0: "bg-primary",
      1: "bg-secondary",
      2: "bg-info",
      3: "bg-success",
      4: "bg-warning",
      5: "bg-danger",
      6: "bg-light",
      7: "bg-purple",
      8: "bg-indigo",
      9: "bg-orange",
   });
   const { user } = useSelector((state) => ({ ...state }));

   const loadData = () => {
      countQuestionType(user.token)
         .then((res) => {
            // console.log(res.data);
            setDataQuestionType(res.data);
         })
         .catch((err) => {
            console.log(err.response.data);
         });
   };

   useEffect(() => {
      loadData();
   }, []);

   const Small_Boxes = (props) => {
      const { type_id, count_type_id, type_name, p_key } = props;

      return (
         <div className="col-lg-3 col-6">
            <div className={"small-box " + bgSmallBox[p_key % 10]}>
               <div className="inner">
                  <div className="row">
                     <h1 style={{ margin: " auto 5px auto 5px" }}>{count_type_id}</h1>
                     <h4 style={{ margin: " auto 5px auto 5px" }}> คำถาม</h4>
                  </div>

                  <h6 style={{ height: "60px" }}>หมวด {type_name}</h6>
               </div>
               {/* <div className="icon">
                  <i className="ion ion-pie-graph" />
               </div> */}
               <Link
                  to="/officer-read-question-type"
                  className="small-box-footer"
                  onClick={() => {
                     // console.log("type_id : ", type_id);
                     localStorage.setItem("officer_type_id", type_id);
                  }}
               >
                  ดูข้อมูล <i className="fas fa-arrow-circle-right" />
               </Link>
            </div>
         </div>
      );
   };

   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>หมวดคำถาม</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           {user.lv_id == 1 ? (
                              /* /index-admin */
                              <Link to="/index-admin">
                                 {/* <i className="nav-icon fas fa-file" /> */}
                                 <p>หน้าแรก</p>
                              </Link>
                           ) : user.lv_id == 2 ? (
                              <Link to="/index-officer">
                                 {/* <i className="nav-icon fas fa-file" /> */}
                                 <p>หน้าแรก</p>
                              </Link>
                           ) : (
                              <></>
                           )}
                        </li>
                        <li className="breadcrumb-item font-weight-bold">หมวดคำถาม</li>
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
                  {dataQuestionType.map((value, key) => {
                     return (
                        <Small_Boxes
                           type_name={value.type_name}
                           count_type_id={value.count_type_id}
                           p_key={key}
                           type_id={value.type_id}
                           key={key}
                        />
                     );
                  })}
               </div>
            </div>
         </section>
         {/* /.content */}
      </div>
   );
};

export default OfficerQuestionType;
