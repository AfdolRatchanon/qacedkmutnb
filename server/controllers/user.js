const db = require("../configs/DB");

exports.addQuestion = async (req, res) => {
   try {
      // Check user
      const { type_id, qst_title, qst_detail, qst_name, qst_mail } = req.body;
      // console.log(req.body, req.user);

      //res.send(req.body);
      if (type_id === 0 || type_id == null) {
         return res.status(400).send("กรุณาเลือกหมวดคำถาม");
      } else {
         if (qst_title === "" || qst_title == null) {
            return res.status(400).send("กรุณากรอกหัวข้อคำถาม");
         } else {
            if (qst_detail === "" || qst_detail == null) {
               return res.status(400).send("กรุณากรอกรายระเอียด");
            } else {
               if (qst_name === "" || qst_name == null) {
                  return res.status(400).send("กรุณากรอกชื่อผู้ต้ังคำถาม");
               } else {
                  if (qst_mail === "" || qst_mail == null) {
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
         'SELECT ROW_NUMBER() OVER(ORDER BY q.qst_id) AS num_row,q.qst_id,t.type_name,q.qst_title,q.qst_detail,q.qst_name,q.qst_name,q.qst_mail,q.qst_date,q.type_id,q.mem_id,s.sta_id,s.sta_name,r.reply_id,r.reply_detail,DATE_FORMAT(qst_date, "%d-%m-%Y") AS date_q,DATE_FORMAT(reply_date, "%d-%m-%Y") AS date_a FROM tbl_reply r RIGHT JOIN (tbl_question q INNER JOIN tbl_status s ON q.sta_id = s.sta_id INNER JOIN tbl_type t ON t.type_id = q.type_id) ON r.reply_id = q.reply_id WHERE q.mem_id = ?',
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

exports.readQuestion = async (req, res) => {
   try {
      // Check user
      console.log(req.body, req.user);
      db.query(
         "SELECT * FROM tbl_question WHERE mem_id = ? and qst_id = ?;",
         [req.user.mem_id, req.body.qst_id],
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

exports.updateQuestion = async (req, res) => {
   try {
      // Check user
      const { sta_id, type_id, qst_title, qst_detail, qst_name, qst_mail, qst_id } = req.body;

      // console.log(req.body, req.user);

      //res.send(req.body);
      if (sta_id === 4 || sta_id == null) {
         return res.status(400).send("ไม่สามารถแก้ไขได้เนื่องจากได้คำถามได้รับการตอบแล้ว");
      } else {
         if (type_id === 0 || type_id == null) {
            return res.status(400).send("กรุณาแก้ไขข้อมูลก่อนกดยืนยัน หรือ กรุณาเลือกหมวดคำถาม");
         } else {
            if (qst_title === "" || qst_title == null) {
               return res.status(400).send("กรุณาแก้ไขข้อมูลก่อนกดยืนยัน หรือ กรุณากรอกหัวข้อคำถาม");
            } else {
               if (qst_detail === "" || qst_detail == null) {
                  return res.status(400).send("กรุณาแก้ไขข้อมูลก่อนกดยืนยัน หรือ กรุณากรอกรายระเอียด");
               } else {
                  if (qst_name === "" || qst_name == null) {
                     return res.status(400).send("กรุณาแก้ไขข้อมูลก่อนกดยืนยัน หรือ กรุณากรอกชื่อผู้ต้ังคำถาม");
                  } else {
                     if (qst_mail === "" || qst_mail == null) {
                        return res.status(400).send("กรุณาแก้ไขข้อมูลก่อนกดยืนยัน หรือ กรุณากรอกอีเมล");
                     } else {
                        console.log(req.body);
                        db.query(
                           "UPDATE tbl_question SET type_id = ? , qst_title = ?, qst_detail = ? , qst_name = ? , qst_mail = ?  WHERE qst_id = ?",
                           [type_id, qst_title, qst_detail, qst_name, qst_mail, qst_id],
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
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};
