import React, { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

//Query
import { officerCountReply } from "../../../functions/officer";

//React Redux
import { useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBarComponent = () => {
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
      // console.log("mem_id", user.mem_id);
      officerCountReply(user.token, { mem_id: user.mem_id })
         .then((res) => {
            setCountQst(res.data[0]);
            setData({
               labels,
               datasets: [
                  {
                     label: "คำถามทั้งหมด",
                     data: labels.map(() => res.data[0].allQst),
                     backgroundColor: "rgba(0, 255, 64, 0.5)",
                  },
                  {
                     label: "คำถามทั้งหมดที่ตอบแล้ว",
                     data: labels.map(() => res.data[0].successQst),
                     backgroundColor: "rgba(53, 162, 235, 0.5)",
                  },
                  {
                     label: "คำถามทั้งหมดที่ยังไม่ได้ตอบ",
                     data: labels.map(() => res.data[0].waitReply),
                     backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                     label: "คำถามที่เจ้าหน้าที่ตอบ",
                     data: labels.map(() => res.data[0].ownReply),
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

export default ChartBarComponent;
