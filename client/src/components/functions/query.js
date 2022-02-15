import axios from "axios";

export const loadQuestionType = async (authtoken) => {
   //    console.log("Func", authtoken);
   return await axios.get(process.env.REACT_APP_API + "/query-question-type", {
      headers: {
         authtoken,
      },
   });
};

export const loadQuestionLevel = async (authtoken) => {
   //    console.log("Func", authtoken);
   return await axios.get(process.env.REACT_APP_API + "/query-question-Level", {
      headers: {
         authtoken,
      },
   });
};
