var express = require("express");
var router = express.Router();
const nouns = require("../data/nouns");
const adjectives = require("../data/adjectives");

router.get("/nouns", function (req, res, next) {
  res.render("lec-3/nouns", {title: "Lec-3: Nouns"});
});

router.get("/nouns-plural", function (req, res, next) {
  res.render("lec-3/nouns-plural", {title: "Lec-3: Nouns-plural"});
});

router.get("/jobs", function (req, res, next) {
  res.render("lec-3/jobs", {title: "Lec-3: Jobs"});
});

router.get("/possessive", function (req, res, next) {
  res.render("lec-3/possessive", {title: "Lec-3: Possessive"});
});

module.exports = router;
