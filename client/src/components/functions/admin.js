import axios from "axios";

export const adminListUser = async (authtoken) => {
   //    console.log("Func", authtoken);
   return await axios.get(process.env.REACT_APP_API + "/admin-list-user", {
      headers: {
         authtoken,
      },
   });
};

export const adminEnableAndDisenableMember = async (authtoken, value) => {
   //    console.log("Func", authtoken);
   return await axios.post(process.env.REACT_APP_API + "/admin-enable-and-disenable-member", value, {
      headers: {
         authtoken,
      },
   });
};
