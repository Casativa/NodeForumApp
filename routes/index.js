var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var postListe = $.getJSON('http://jsonplaceholder.typicode.com/posts/')
  res.render('index', { title: 'Express', json: postListe });
});

module.exports = router;
