var express = require("express");
var router = express.Router();
const nouns = require("../data/nouns");
const adjectives = require("../data/adjectives");

router.get("/nouns", function (req, res, next) {
  res.render("lec-3/nouns", { title: "Lec-3: Nouns" });
});

router.get("/nouns-plural", function (req, res, next) {
  res.render("lec-3/nouns-plural", { title: "Lec-3: Nouns" });
});

router.get("/diminutive", function (req, res, next) {
  res.render("lec-3/diminutive", { title: "Lec-3: Nouns" });
});

module.exports = router;
