const express = require("express");
const router = express.Router();

//Controller
const { officerReadQuestionType ,officerReadQuestion, replyQuestion} = require("../controllers/officer");

//NOTE MiddleWare
const { auth, officerCheck, adminCheck } = require("../middlewares/auth");

//@Enpoint  http://Localhost:3001/api/query-question-type
//@Method   POST
//@Access   private
router.post("/officer-read-question-type", auth, officerCheck, officerReadQuestionType);

//@Enpoint  http://Localhost:3001/api/query-question-type
//@Method   POST
//@Access   private
router.post("/officer-read-question", auth, officerCheck, officerReadQuestion);

//@Enpoint  http://Localhost:3001/api/query-question-type
//@Method   POST
//@Access   private
router.post("/officer-reply-question", auth, officerCheck, replyQuestion);

module.exports = router;
