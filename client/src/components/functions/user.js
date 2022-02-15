import axios from "axios";

export const addQuestion = async (authtoken, value) => {
   //    console.log("Func", authtoken);
   return await axios.post(process.env.REACT_APP_API + "/user-add-question", value, {
      headers: {
         authtoken,
      },
   });
};

export const listQuestion = async (authtoken) => {
   //    console.log("Func", authtoken);
   return await axios.get(process.env.REACT_APP_API + "/user-list-question", {
      headers: {
         authtoken,
      },
   });
};

export const deleteQuestion = async (authtoken) => {
   //    console.log("Func", authtoken);
   return await axios.get(process.env.REACT_APP_API + "/user-delete-question", {
      headers: {
         authtoken,
      },
   });
};
