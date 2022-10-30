var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/greet', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  let jsonResponse = {
    "database" : "mysql",
    "version" : "5.7"
  }
  res.json(jsonResponse);
});


module.exports = router;
