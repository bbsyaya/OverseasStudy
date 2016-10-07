var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('writer/index', { title: '留学项目发布' });
});

module.exports = router;
