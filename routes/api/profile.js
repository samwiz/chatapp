const express = require("express");
const router = express.Router();
//@router GET api/profile/test
//@desc   tests profile route
//@access Public route
router.get("/test", (req, res) =>
  res.json({
    msg: "profile details"
  })
);

module.exports = router;
