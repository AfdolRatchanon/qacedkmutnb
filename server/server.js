//NOTE IMPORT
const express = require("express");
require("dotenv").config();
const { readdirSync } = require("fs");
const connectDB = require("./configs/db");

// TriMerge
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Run Server
const app = express();
connectDB();

//NOTE VALIABLE
const port = process.env.PORT;

//NOTE MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

//NOTE  Route
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(port, () => console.log(`Server is Running on PROT : ${port}`));
