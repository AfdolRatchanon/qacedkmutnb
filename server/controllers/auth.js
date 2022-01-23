//IMPORT
const bcrypt = require("bcryptjs");
const db = require("../configs/DB");
const jwt = require("jsonwebtoken");

//POST
/* Pattern Data JSON
{
    "mem_user":"....",
    "mem_pwd":"....",
    "mem_name":"....",
    "mem_mail":"....@mail.com",
    "mem_tal":"....",
    "mem_img":"."
} */

exports.register = async (req, res) => {
   try {
      // Check user
      const { mem_user, mem_pwd, mem_name, mem_mail, mem_tal, mem_img } = req.body;
      //res.send(req.body);
      db.query(
         "SELECT * FROM tbl_member WHERE mem_user = ? OR mem_mail = ? OR mem_tal = ? ",
         [mem_user, mem_mail, mem_tal],
         async (err, result) => {
            if (err) {
               console.log(err);
               return res.status(500).send("Query Database ERROR!!!");
            } else {
               if (result.length > 0) {
                  // ถ้ามีคนใช้ Username นี้แล้วไม่ออก
                  return res.status(400).send("This Username or Email or Tel. Available");
               }
               // เข้ารหัส Encrypt
               const salt = await bcrypt.genSalt(10);
               const passwordHash = await bcrypt.hash(mem_pwd, salt);

               db.query(
                  "INSERT INTO tbl_member (mem_user, mem_pwd, mem_name, mem_mail, mem_tal, mem_img, lv_id, sta_id, date_create, date_update ) VALUES (?,?,?,?,?,?,?,?,now(),now())",
                  [mem_user, passwordHash, mem_name, mem_mail, mem_tal, mem_img, 1, 1],
                  (err, result) => {
                     if (err) {
                        console.log(err);
                     } else {
                        res.send("Register Success");
                     }
                  }
               );
            }
         }
      );
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

//POST
/* Pattern Data JSON
{
    "mem_user":"....",
    "mem_pwd":"....",
} */
exports.login = async (req, res) => {
   try {
      // Check user
      const { mem_user, mem_pwd } = req.body;
      //res.send(req.body);
      db.query("SELECT * FROM tbl_member WHERE mem_user = ?", [mem_user], async (err, result) => {
         if (err) {
            console.log(err);
            return res.status(400).send("Query Database ERROR!!!");
         } else {
            //res.send(result[0]);
            if (result[0] == null) {
               // Username มีข้อมูลหรือไม่
               //console.log(result);
               return res.status(400).send("This username does not exist. ");
            } else {
               // Username ไม่ได้ถูกปิดการใช้งาน
               if (!result[0].sta_id) {
                  return res.status(400).send("This Username Disable. ");
               }
               // check Password
               const isMatch = await bcrypt.compare(mem_pwd, result[0].mem_pwd);
               console.log(isMatch);
               if (!isMatch) {
                  return res.status(400).send("Password Invalid!!!");
               }

               // Create Payload
               const payLoad = {
                  user: {
                     mem_user: result[0].mem_user,
                     lv_id: result[0].lv_id,
                  },
               };

               // Genarate Token
               jwt.sign(payLoad, "jwtSecret", { expiresIn: 60 * 60 }, (err, token) => {
                  if (err) {
                     throw err;
                  } else {
                     res.send({ token, payLoad });
                  }
               });

               //res.send(payLoad);
            }
         }
      });
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

//GET
exports.listUser = async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

//PUT
exports.editUser = async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

//DELETE
exports.deleteUser = async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};
