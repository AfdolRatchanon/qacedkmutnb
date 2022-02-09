import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentOfficer } from "../functions/auth";

const OfficerRoute = ({ children }) => {
   // user มาจาก Redux
   const { user } = useSelector((state) => ({ ...state }));
   const [ok, setOk] = useState(false);

   useEffect(() => {
      if (user && user.token) {
         currentOfficer(user.token)
            .then((res) => {
               //res
               console.log(res);
               setOk(true);
            })
            .catch((err) => {
               alert(err);
               console.log(err);
               setOk(false);
            });
      }
   }, [user]);

   return ok ? children : <LoadingToRedirect />;
};

export default OfficerRoute;
