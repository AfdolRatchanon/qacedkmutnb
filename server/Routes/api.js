//NOTE IMPORT
const express = require("express");
const router = express.Router();
const { register, login, listUser, editUser, deleteUser } = require("../controllers/auth.js");

//NOTE MiddleWare
const { auth } = require("../middlewares/auth");

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

//@Enpoint  http://Localhost:3001/api/auth
//@Method   GET
//@Access   Publish
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
