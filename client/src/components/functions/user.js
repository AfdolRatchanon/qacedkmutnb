import axios from "axios";

export const addQuestion = async (authtoken, value) => {
   //    console.log("Func", authtoken);
   return await axios.post(process.env.REACT_APP_API + "/user-add-question", value, {
      headers: {
         authtoken,
         "Content-Type": "multipart/form-data",
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

export const readQuestion = async (authtoken, value) => {
   //    console.log("Func", authtoken);
   return await axios.post(process.env.REACT_APP_API + "/user-read-question", value, {
      headers: {
         authtoken,
      },
   });
};

export const updateQuestion = async (authtoken, value) => {
   return await axios.post(process.env.REACT_APP_API + "/user-update-question", value, {
      headers: {
         authtoken,
         "Content-Type": "multipart/form-data",
      },
   });
};

export const deleteQuestion = async (authtoken, value) => {
   return await axios.post(process.env.REACT_APP_API + "/user-delete-question", value, {
      headers: {
         authtoken,
      },
   });
};
