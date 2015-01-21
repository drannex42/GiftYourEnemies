var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '' });
});

/* GET home page. */
router.get('/paypal', function(req, res) {
  res.render('paypal', { title: 'Pay With Paypal - Gift Your Enemies' });
});

module.exports = router;
