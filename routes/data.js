var express = require("express");
var router = express.Router();
const nouns = require('../data/nouns');
const adjectives = require('../data/adjectives');
const prepositions = require('../data/prepositions');
const jobs = require('../data/jobs');

router.get("/nouns", function (req, res, next) {
  res.json(nouns);
});

router.get("/adjectives", function (req, res, next) {
  res.json(adjectives);
});

router.get("/prepositions", function (req, res, next) {
  res.json(prepositions);
});

router.get("/jobs", function (req, res, next) {
  res.json(jobs);
});

module.exports = router;
