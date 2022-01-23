//POST
exports.register = async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

//GET
exports.listUser = async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

//PUT
exports.editUser = async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};

//DELETE
exports.deleteUser = async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
   }
};
