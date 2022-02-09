//NOTE IMPORT
const express = require("express");
const router = express.Router();
//Controller
const { adminListUser, adminReadUser, adminEditUser, adminDeleteUser } = require("../controllers/admin");

//NOTE MiddleWare
const { auth, officerCheck, adminCheck } = require("../middlewares/auth");

//NOTE listuser
//@Enpoint  http://Localhost:3001/api/admin-list-user
//@Method   GET
//@Access   Private
router.get("/admin-list-user", adminListUser);

//NOTE edituser
//@Enpoint  http://Localhost:3001/api/admin-edituser
//@Method   GET
//@Access   Private
router.get("/admin-read-user/:id", adminReadUser);

//NOTE edituser
//@Enpoint  http://Localhost:3001/api/admin-edituser
//@Method   PUT
//@Access   Private
router.put("/admin-edit-user/:id", adminEditUser);

//NOTE edituser
//@Enpoint  http://Localhost:3001/api/admin-edituser
//@Method   DELETE
//@Access   Private
router.delete("/admin-delete-user/:id", adminDeleteUser);

module.exports = router;
