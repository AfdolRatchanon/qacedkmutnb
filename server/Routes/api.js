//NOTE IMPORT
const express = require("express");
const router = express.Router();
const { register, listUser, editUser, deleteUser } = require("../controllers/auth.js");

//@Enpoint  http://Localhost:3001/api/auth
//@Method   GET
//@Access   Publish
router.get("/auth", listUser);

//@Enpoint  http://Localhost:3001/api/auth
//@Method   POST
//@Access   Publish
router.post("/auth", register);

//@Enpoint  http://Localhost:3001/api/auth
//@Method   PUT
//@Access   Publish
router.put("/auth", editUser);

//@Enpoint  http://Localhost:3001/api/auth
//@Method   DELETE
//@Access   Publish
router.delete("/auth", deleteUser);

module.exports = router;
