var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
app.use(cors());


var mysql      = require('mysql');

var connection = mysql.createConnection({
   host: '10.45.167.87',
   user: 'nomisqa_heloc',
   password: 'nomisqa_heloc',
   database: 'nomisqa_heloc'
});

router.get('/api/getcard',function (req,res) {

   var sqlstring = 'select * from ns_user';
   connection.query(sqlstring,function(err, rows) {
      if (!err) {
         console.log('The solution is: ', rows);
      }else
         console.log('Error while performing Query.');
   });
   res.json({message: "melding"});
});
module.exports = router;
