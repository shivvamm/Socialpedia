var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongo = require('mongodb');

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/quotes";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/', function(req,res,next){
var resultArray =[];
mongo.connect(url, function(err,db){
  assert.equal(null, err);
  var cursor =db.collection('test').find();
  cursor.forEach(function(doc,err){
    asser.equal(null,err); 
    resultArray.push(doc) 
  }, function(){
    db.close();
    res.render('index',{items:resultArray});
  }) ;
});
});

router.post('/insert',function(req,res,next){
 var item = {
  quote:req.body.quote,
 };

mongo.connect(url , function(err,db){
assert.equal(null,err);
db.collection('test'),insertOne(item,function(err,result){
  assert.equal(null,err);
  console.log('Item Inserted');
  db.close();
});
}

 res.redirect('/');
});
module.exports = router;
