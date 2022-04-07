const db = require("../configs/DB");

exports.question_Type = async (req, res) => {
   try {
      //res.send(req.body);
      db.query("SELECT ROW_NUMBER() OVER(ORDER BY type_id) AS num_row, type_id, type_name FROM tbl_type", async (err, result) => {
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
      });
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.question_Type_Name = async (req, res) => {
   try {
      const { type_id } = req.body;
      console.log(req.body);
      //res.send(req.body);
      db.query("SELECT type_name FROM tbl_type WHERE type_id = ?", [type_id], async (err, result) => {
         if (err) {
            console.log(err);
            return res.status(400).send("Query Database ERROR!!!");
         } else {
            if (result[0] == null) {
               // Username มีข้อมูลหรือไม่
               // console.log(result);
               return res.status(400).send("This username does not exist. ");
            } else {
               console.log(result);
               return res.send(result);
            }
         }
      });
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.level = async (req, res) => {
   try {
      //res.send(req.body);
      db.query("SELECT * FROM tbl_level", async (err, result) => {
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
      });
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.countQuestionType = async (req, res) => {
   try {
      // console.log(req.body);
      db.query(
         "SELECT t.type_id, t.type_name, COUNT(CASE WHEN q.sta_id = 3 THEN 1 END) AS count_type_id FROM tbl_type t LEFT JOIN tbl_question q on t.type_id = q.type_id  GROUP BY t.type_id  ORDER BY t.type_id  ASC;",
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
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.countFAQType = async (req, res) => {
   try {
      // console.log(req.body);
      db.query(
         "SELECT t.type_id, t.type_name, COUNT(f.faq_id) AS count_type_id FROM tbl_type t LEFT JOIN tbl_faq f on t.type_id = f.type_id  GROUP BY t.type_id  ORDER BY t.type_id  ASC;",
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
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

exports.readFAQType = async (req, res) => {
   try {
      const { type_id } = req.body;
      console.log(req.body);
      db.query("SELECT * FROM tbl_faq WHERE type_id = ?", [type_id], async (err, result) => {
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
      });
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};
