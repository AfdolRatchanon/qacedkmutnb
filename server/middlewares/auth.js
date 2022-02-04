const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
   try {
      // NOTE headers[ในนี้ใช้ตัวพิมพ์เล็กเท่านั้น]
      const token = req.headers["authtoken"];
      if (!token) {
         return res.status(401).send("No Token, Authorization Denied!!!");
      }
      const decoded = jwt.verify(token, "jwtSecret");
      //   req.user = decode.user
      console.log("middleware", decoded);
      next();
   } catch (error) {
      console.log(error);
      res.status(401).send("Token Invalid!!!");
   }
};
