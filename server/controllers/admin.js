//IMPORT
const bcrypt = require("bcryptjs");
const db = require("../configs/DB");
const jwt = require("jsonwebtoken");

exports.adminListUser = async (req, res) => {
   try {
      // Check user
      db.query(
         "SELECT * FROM `tbl_member` INNER JOIN tbl_status ON tbl_member.sta_id = tbl_status.sta_id INNER JOIN tbl_level ON tbl_member.lv_id=tbl_level.lv_id",
         async (err, result) => {
            if (err) {
               console.log(err);
               return res.status(400).send("Query Database ERROR!!!");
            } else {
               if (result[0] == null) {
                  // Username มีข้อมูลหรือไม่
                  //console.log(result);
                  return res.status(400).send("This username does not exist. ");
               } else {
                  return res.send(result);
               }
            }
         }
      );
      //res.send("adminListUser");
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.adminReadUser = async (req, res) => {
   try {
      // Check user
      const id = req.params.id;
      db.query("SELECT * FROM tbl_member WHERE mem_id = ?", [id], async (err, result) => {
         if (err) {
            console.log(err);
            return res.status(400).send("Query Database ERROR!!!");
         } else {
            if (result[0] == null) {
               // Username มีข้อมูลหรือไม่
               //console.log(result);
               return res.status(400).send("Can't find user.");
            } else {
               return res.send(result);
            }
         }
      });
      // res.send("adminReadUser");
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.adminEditUser = async (req, res) => {
   try {
      // Check user
      res.send("adminEditUser");
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.adminDeleteUser = async (req, res) => {
   try {
      // Check user
      const id = req.params.id;
      db.query("DELETE FROM tbl_member WHERE mem_id = ?", id, (err, result) => {
         if (err) {
            console.log(err);
         } else {
            res.send("Delete User Success.");
         }
      });
      // res.send("adminDeleteUser");
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};
