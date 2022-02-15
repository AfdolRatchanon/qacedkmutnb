const db = require("../configs/DB");

exports.addQuestion = async (req, res) => {
   try {
      // Check user
      const { type_id, qst_title, qst_detail, qst_name, qst_mail } = req.body;
      console.log(req.body, req.user);

      //res.send(req.body);
      if (type_id === 0 || type_id === null) {
         return res.status(400).send("กรุณาเลือกหมวดคำถาม");
      } else {
         if (qst_title === "" || qst_title === null) {
            return res.status(400).send("กรุณากรอกหัวข้อคำถาม");
         } else {
            if (qst_detail === "" || qst_detail === null) {
               return res.status(400).send("กรุณากรอกรายระเอียด");
            } else {
               if (qst_name === "" || qst_name === null) {
                  return res.status(400).send("กรุณากรอกชื่อผู้ต้ังคำถาม");
               } else {
                  if (qst_mail === "" || qst_mail === null) {
                     return res.status(400).send("กรุณากรอกอีเมล");
                  } else {
                     db.query(
                        "INSERT INTO tbl_question (qst_title, qst_detail, qst_name, qst_mail, qst_date, type_id, mem_id,sta_id ) VALUES (?,?,?,?,now(),?,?,?)",
                        [qst_title, qst_detail, qst_name, qst_mail, type_id, req.user.mem_id, 3],
                        (err, result) => {
                           if (err) {
                              console.log(err);
                           } else {
                              res.send("บันทึกคำถามสำเร็จ");
                           }
                        }
                     );
                  }
               }
            }
         }
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.listQuestion = async (req, res) => {
   try {
      // Check user
      db.query(
         "SELECT * FROM tbl_question INNER JOIN tbl_type ON tbl_type.type_id = tbl_question.type_id INNER JOIN tbl_status ON tbl_status.sta_id = tbl_question.sta_id WHERE mem_id = ?",
         [req.user.mem_id],
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
