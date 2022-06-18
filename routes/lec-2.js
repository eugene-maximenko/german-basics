var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/nouns", function (req, res, next) {
  res.render("nouns", {title: "Express"});
});

router.get("/nouns-prep", function (req, res, next) {
  res.render("nouns-prep", {title: "Express"});
});

router.get("/demonstrative", function (req, res, next) {
  res.render("demonstrative", {title: "Express"});
});

router.get("/jobs", function (req, res, next) {
  res.render("jobs", {title: "Express"});
});

module.exports = router;
