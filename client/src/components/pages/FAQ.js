import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadQuestionTypeFAQ, readFAQType } from "../functions/query";

import { toast } from "react-toastify";

const FAQ = () => {
   const frequently_asked_question_ID = localStorage.faq_id;
   const navigate = useNavigate();
   const { user } = useSelector((state) => ({ ...state }));
   const [questionType, setQuestionType] = useState([]);
   const [type_ID_State, setType_ID_State] = useState(0);
   const [data, setData] = useState([]);
   const [value, setValue] = useState({
      type_id: 0,
      faq_title: "",
      faq_detail: "",
   });
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
   // const [numEng, setNumEng] = useState({
   //    0: "One",
   //    1: "Two",
   //    2: "Three",
   //    3: "Four",
   //    4: "Five",
   //    5: "Six",
   //    6: "Seven",
   //    7: "Eight",
   //    8: "Nine",
   //    9: "Ten",
   //    10: "Eleven",
   //    11: "Twelve",
   //    12: "Thirteen",
   //    13: "Fourteen",
   //    14: "Fifteen",
   //    15: "Sixteen",
   //    16: "Seventeen",
   //    17: "Eighteen",
   //    18: "Nineteen",
   //    19: "Twenty",
   // });

   const loadDataTypeQ = async () => {
      loadQuestionTypeFAQ(value)
         .then((res) => {
            console.log("Data :", res.data);
            setQuestionType(res.data);
         })
         .catch((err) => {
            console.log(err.response);
         });
   };
   const loadData = () => {
      readFAQType({ type_id: type_ID_State })
         .then((res) => {
            console.log(res.data);
            setData(res.data);
         })
         .catch((err) => {
            // console.log(err);
            // console.log(err.response);
            setData([]);
            console.log(err.response);
            // toast.error(err.response.data);
         });
   };

   useEffect(() => {
      loadDataTypeQ();
      loadData();
   }, [type_ID_State]);

   return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
         <section className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>FAQ</h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                           <Link to="/">หน้าแรก</Link>
                        </li>
                        <li className="breadcrumb-item active">FAQ</li>
                     </ol>
                  </div>
               </div>
            </div>
            {/* /.container-fluid */}
         </section>

         <section className="content">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-md-3">
                     <div className="sticky-top mb-3">
                        <div className="card">
                           <div className="card-header">
                              <h4 className="card-title">โหมดคำถาม</h4>
                           </div>
                           <div className="card-body">
                              {questionType.map((value, key) => (
                                 <div
                                    key={key}
                                    className={"external-event " + bgSmallBox[key % 10]}
                                    onClick={() => {
                                       setType_ID_State(value.type_id);
                                       console.log(type_ID_State);
                                    }}
                                 >
                                    {value.type_name}
                                 </div>
                              ))}
                           </div>
                           {/* /.card-body */}
                        </div>
                        {/* /.card */}
                     </div>
                  </div>
                  {/* /.col */}
                  <div className="col-md-9">
                     <div class="col-12" id="accordion">
                        {type_ID_State == 0 ? <>กรูณาเลือกเหมวดคำถาม</> : <></>}
                        {data.map((value, key) => (
                           <div class="card card-primary card-outline">
                              <a class="d-block w-100" data-toggle="collapse" href={"#collapse" + key}>
                                 <div class="card-header">
                                    <h4 class="card-title w-100">{value.faq_title}</h4>
                                 </div>
                              </a>
                              <div id={"collapse" + key} class={key == 0 ? "collapse show" : "collapse"} data-parent="#accordion">
                                 <div class="card-body">{value.faq_detail + key}</div>
                              </div>
                           </div>
                        ))}
                     </div>
                     {/* /.card */}
                  </div>
                  {/* /.col */}
               </div>
               {/* /.row */}
            </div>
            {/* /.container-fluid */}
         </section>

         {/* /.content */}
      </div>
   );
};

export default FAQ;
