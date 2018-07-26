const express = require("express");
const router = express.Router();
//@router GET api/users/test
//@desc tests users route
router.get("/test", (req, res) =>
  res.json({
    msg: "user details"
  })
);

module.exports = router;
