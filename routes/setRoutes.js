var express = require('express');
var router = express.Router();

var auth = require('../api/auth/auth');
var appliedFor = require('../api/appliedFor');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'TNP' });
});

router.get('/partials/*', function(req, res) {
  res.render('partials/' + req.params[0]);
});


router.get('/appliedfor',appliedFor.appliedFor)

module.exports = router;
