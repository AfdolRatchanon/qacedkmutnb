import axios from "axios";

export const officerReadQuestionType = async (authtoken, value) => {
   //    console.log("Func", authtoken);
   return await axios.post(process.env.REACT_APP_API + "/officer-read-question-type", value, {
      headers: {
         authtoken,
      },
   });
};

export const officerReadQuestion = async (authtoken, value) => {
   //    console.log("Func", authtoken);
   return await axios.post(process.env.REACT_APP_API + "/officer-read-question", value, {
      headers: {
         authtoken,
      },
   });
};

export const replyQuestion = async (authtoken, value) => {
   //    console.log("Func", authtoken);
   return await axios.post(process.env.REACT_APP_API + "/officer-reply-question", value, {
      headers: {
         authtoken,
      },
   });
};
