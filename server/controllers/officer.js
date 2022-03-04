const db = require("../configs/DB");

exports.officerReadQuestionType = async (req, res) => {
   try {
      // Check user
      const { type_id } = req.body;
      console.log(req.body, req.user);
      db.query(
         'SELECT  *, DATE_FORMAT(qst_date, "%d-%m-%Y") AS date_format  FROM tbl_question INNER JOIN tbl_status ON tbl_question.sta_id = tbl_status.sta_id WHERE type_id = ? ORDER BY tbl_status.sta_name , date_format ASC;',
         [type_id],
         async (err, result) => {
            if (err) {
               console.log(err);
               return res.status(400).send("Query Database ERROR!!!");
            } else {
               if (result[0] == null) {
                  // Username มีข้อมูลหรือไม่
                  //console.log(result);
                  return res.status(400).send("ไม่พบข้อมูล");
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

exports.officerReadQuestion = async (req, res) => {
   try {
      // Check user
      const { qst_id } = req.body;
      console.log(req.body, req.user);
      db.query(
         'SELECT *, DATE_FORMAT(qst_date, "%d-%m-%Y") AS date_q FROM tbl_reply r RIGHT JOIN (tbl_question q INNER JOIN tbl_status s ON q.sta_id = s.sta_id INNER JOIN tbl_type t ON t.type_id = q.type_id) ON r.reply_id = q.reply_id WHERE q.qst_id = ?',
         [qst_id],
         async (err, result) => {
            if (err) {
               console.log(err);
               return res.status(400).send("Query Database ERROR!!!");
            } else {
               if (result[0] == null) {
                  // Username มีข้อมูลหรือไม่
                  //console.log(result);
                  return res.status(400).send("ไม่พบข้อมูล");
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

exports.replyQuestion = async (req, res) => {
   try {
      // Check user
      const { reply_detail, qst_id, mem_id } = req.body;
      console.log(req.body, req.user);
      db.query("SELECT reply_id FROM tbl_question WHERE qst_id = ?", [qst_id], async (err, result) => {
         if (err) {
            console.log(err);
            return res.status(400).send("Query Database ERROR!!!");
         } else {
            if (result[0].reply_id != 0) {
               const { reply_id } = result[0];
               console.log("Select reply_id :", reply_id);
               db.query(
                  "UPDATE tbl_reply SET reply_detail = ? WHERE reply_id = ?",
                  [reply_detail, reply_id],
                  async (err, result) => {
                     if (err) {
                        console.log(err);
                        return res.status(400).send("Query Database ERROR!!!");
                     }
                     return res.send("บันทึกคำตอบสำเร็จ");
                  }
               );
               // return res.status(400).send("ไม่สามารถบันทึกได้เนื่องจากได้รับคำตอบแล้ว");
            } else {
               db.query(
                  "INSERT INTO tbl_reply (reply_detail,reply_date,qst_id,mem_id) VALUES (?,now(),?,?)",
                  [reply_detail, qst_id, mem_id],
                  async (err, result) => {
                     if (err) {
                        console.log(err);
                        return res.status(400).send("Query Database ERROR!!!");
                     } else {
                        db.query("SELECT reply_id FROM tbl_reply WHERE qst_id = ?", [qst_id], async (err, result) => {
                           if (err) {
                              console.log(err);
                              return res.status(400).send("Query Database ERROR!!!");
                           } else {
                              const { reply_id } = result[0];
                              db.query(
                                 "UPDATE tbl_question SET reply_id = ?, sta_id = 4 WHERE qst_id = ?",
                                 [reply_id, qst_id, mem_id],
                                 async (err, result) => {
                                    if (err) {
                                       console.log(err);
                                       return res.status(400).send("Query Database ERROR!!!");
                                    }
                                    return res.send("บันทึกคำตอบสำเร็จ");
                                 }
                              );
                           }
                        });
                     }
                  }
               );
            }
         }
      });

      // res.send("adminListUser");
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};
