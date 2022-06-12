var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/nouns', function (req, res, next) {
  res.render('nouns', {title: 'Express'});
});

module.exports = router;
