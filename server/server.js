//NOTE IMPORT
const express = require("express");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const { readdirSync } = require("fs");

// TriMerge
const cors = require("cors");
const corsOptions = {
   // origin: "https://comeduqanda.web.app",
   origin: "*",
   credentials: true,
};
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Run Server
const app = express();

//NOTE VALIABLE
const port = process.env.PORT;

//NOTE MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors(corsOptions));
app.use(fileUpload());

app.use("/qst_img", express.static("img/qst"));

//NOTE  Route
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(port, () => console.log(`Server is Running on PROT : ${port}`));
