var express = require('express');
var router = express.Router();
var User = require('../models/Todo.js');



// /* DELETE /commodity/:id */
// router.delete('/:id', function(req, res, next) {
//   User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });

// router.delete('/:id', function(req, res,) {
//     User.deleteOne({ _id: req.params.id }, function (err, user) {
//         if (err) res.send(err);
//         res.json({ Failed: false, message: 'Successfully deleted!' });
// });
// });

/**/

  /* GET /todos/id */
  router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* GET All*/
  router.get('/', function(req, res, next) {
    User.find(function (err, post) {
      if (err) res.send(err);
      res.json(post);
    });
  });

  /* DELETE /name */
router.delete('/:name', function (req, res) {
    User.deleteOne({ name: req.params.name }, function (err, user) {
        if (err) res.send(err);
        res.json({ Failed: false, message: 'Successfully deleted!' });
    });

});

/* POST /todos */
router.post('/', function(req, res, next) {
    User.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});



module.exports = router;