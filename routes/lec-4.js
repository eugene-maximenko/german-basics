var express = require("express");
var router = express.Router();

router.get("/defined", function (req, res, next) {
  res.render("lec-4/defined", {title: "Lec-3: Nouns"});
});

module.exports = router;
