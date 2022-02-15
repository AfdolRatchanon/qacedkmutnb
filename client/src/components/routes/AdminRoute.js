import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from "../functions/auth";

const AdminRoute = ({ children }) => {
   // user มาจาก Redux
   const [ok, setOk] = useState(false);
   const { user } = useSelector((state) => ({ ...state }));

   useEffect(() => {
      if (user && user.token) {
         currentAdmin(user.token)
            .then((res) => {
               //res
               console.log(res);
               setOk(true);
            })
            .catch((err) => {
               alert(err.response.data);
               console.log(err.response);
               console.log(err.response.data);
               setOk(false);
            });
      }
   }, [user]);

   return ok ? children : <LoadingToRedirect />;
};

export default AdminRoute;
