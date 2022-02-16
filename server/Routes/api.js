//NOTE IMPORT
const express = require("express");
const router = express.Router();
const { register, login, listUser, editUser, deleteUser, currentUser } = require("../controllers/auth.js");
const { question_Type, level } = require("../controllers/query");

//NOTE MiddleWare
const { auth, adminCheck, officerCheck } = require("../middlewares/auth");

//NOTE REGISTER
//@Enpoint  http://Localhost:3001/api/register
//@Method   POST
//@Access   Publish
router.post("/register", register);

//NOTE LOGIN
//@Enpoint  http://Localhost:3001/api/register
//@Method   POST
//@Access   Publish
router.post("/login", login);

//@Enpoint  http://Localhost:3001/api/current-user
//@Method   POST
//@Access   private
router.post("/current-user", auth, currentUser);

//@Enpoint  http://Localhost:3001/api/current-officer
//@Method   POST
//@Access   private
router.post("/current-officer", auth, officerCheck, currentUser);

//@Enpoint  http://Localhost:3001/api/current-admin
//@Method   POST
//@Access   private
router.post("/current-admin", auth, officerCheck, adminCheck, currentUser);

//@Enpoint  http://Localhost:3001/api/query-question-type
//@Method   GET
//@Access   public
router.get("/query-question-type", question_Type);

//@Enpoint  http://Localhost:3001/api/query-question-type
//@Method   GET
//@Access   public
router.get("/query-Level", level);

//@Enpoint  http://Localhost:3001/api/auth
//@Method   GET
//@Access   private
router.get("/1", auth, (req, res) => {
   res.send("hello middleware");
});

router.get("/2", (req, res) => {
   res.send("hello middleware");
});

//@Enpoint  http://Localhost:3001/api/auth
//@Method   GET
//@Access   Publish
router.get("/auth", listUser);

//@Enpoint  http://Localhost:3001/api/auth
//@Method   PUT
//@Access   Publish
router.put("/auth", editUser);

//@Enpoint  http://Localhost:3001/api/auth
//@Method   DELETE
//@Access   Publish
router.delete("/auth", deleteUser);

module.exports = router;
