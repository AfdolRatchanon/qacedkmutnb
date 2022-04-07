import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Query
import { officerCountQuestionTypeAll } from "../../../functions/officer";

//React Redux
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnutComponent = () => {
   const { user } = useSelector((state) => ({ ...state }));
   const [data, setData] = useState({
      labels: [],
      datasets: [
         {
            label: "",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
         },
      ],
   });

   const chartDoughnut = () => {
      let countType = [];
      let nameType = [];

      officerCountQuestionTypeAll(user.token)
         .then((res) => {
            // console.log("res.data", res.data);
            for (const dataObj of res.data) {
               countType.push(parseInt(dataObj.count_type_All));
               nameType.push(dataObj.type_name);
            }
            setData({
               labels: nameType,
               datasets: [
                  {
                     label: "# of Votes",
                     data: countType,
                     backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 0, 0, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(0, 255, 0, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(0, 0, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                     ],
                     borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(255, 0, 0, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(0, 255, 0, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(0, 0, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                     ],
                     borderWidth: 1,
                  },
               ],
            });
         })
         .catch((err) => {
            console.log(err.response.data);
         });
      // console.log("countType", countType);
      // console.log("nameType", nameType);
      // console.log("cahrtDoughnutData", data);
   };

   useEffect(() => {
      chartDoughnut();
   }, []);

   return <Doughnut data={data} />;
};

export default ChartDoughnutComponent;
