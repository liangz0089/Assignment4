var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {//上面是自己起的名字
//   res.render('index', { title: 'register' });//下面是html文件
// });

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* GET search page. */
router.get('/search', function(req, res, next) {
  res.render('search');
});

/* GET delete page. */
router.get('/delete', function(req, res, next) {
  res.render('delete');
});


module.exports = router;


