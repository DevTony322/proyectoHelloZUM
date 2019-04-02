var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HelloZUM' });
});
/* GET response helloZUM. */
router.get("/rest",function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ helloZum: 'Bienvenido a HelloZUM' }));
});

module.exports = router;
