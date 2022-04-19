import React, { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

//Query
import { officerCountReply } from "../../../functions/officer";
import { countMember } from "../../../functions/query";

//React Redux
import { useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBarMember = () => {
   const { user } = useSelector((state) => ({ ...state }));
   const [countQst, setCountQst] = useState({});
   const [options, setOptions] = useState({
      responsive: true,
      plugins: {
         legend: {
            position: "top",
         },
         title: {
            display: true,
            text: "ข้อมูลการตอบคำถาม",
         },
      },
   });

   const [labels, setLabels] = useState([""]);
   const [data, setData] = useState({
      labels,
      datasets: [
         {
            label: "คำถามทั้งหมด",
            data: labels.map(() => 40),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
         },
         {
            label: "คำถามทั้งหมดที่ตอบแล้ว",
            data: labels.map(() => 30),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
         },
         {
            label: "คำถามทั้งหมดที่ยังไม่ได้ตอบ",
            data: labels.map(() => 20),
            backgroundColor: "rgba(53, 255, 235, 0.5)",
         },
         {
            label: "คำถามที่เจ้าหน้าที่ตอบ",
            data: labels.map(() => 10),
            backgroundColor: "rgba(255, 162, 255, 0.5)",
         },
      ],
   });

   const charBar = () => {
      countMember(user.token)
         .then((res) => {
            setCountQst(res.data[0]);
            setData({
               labels,
               datasets: [
                  {
                     label: "ผู้ใช้",
                     data: labels.map(() => res.data[0].user_num),
                     backgroundColor: "rgba(0, 255, 64, 0.5)",
                  },
                  {
                     label: "เจ้าหน้าที่",
                     data: labels.map(() => res.data[0].officer_num),
                     backgroundColor: "rgba(53, 162, 235, 0.5)",
                  },
                  {
                     label: "ผู้ดูแลระบบ",
                     data: labels.map(() => res.data[0].admin_num),
                     backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                     label: "ถูกปิดการใช้",
                     data: labels.map(() => res.data[0].user_disble),
                     backgroundColor: "rgba(255, 240, 0, 0.5)",
                  },
               ],
            });
         })
         .catch((err) => {
            console.log(err.response.data);
         });
      // console.log("countQst : ", countQst);
      // console.log("cahrtDoughnutData", data);
   };

   useEffect(() => {
      charBar();
   }, []);

   return <Bar options={options} data={data} />;
};

export default ChartBarMember;
